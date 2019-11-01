import * as fs from 'fs';
import * as path from 'path';
import { CompletionItem, InsertTextFormat, CompletionItemKind, MarkupContent } from 'vscode-languageserver-types';

type SnippetSource = 'workspace' | 'user' | 'ddx';
type SnippetType = 'file' | 'template' | 'style' | 'script' | 'config' | 'custom';
interface Snippet {
  source: SnippetSource;
  name: string;
  type: SnippetType;
  customTypeName?: string;
  content: string;
}

export interface ScaffoldSnippetSources {
  workspace: string | undefined;
  user: string | undefined;
  ddx: string | undefined;
}

export class SnippetManager {
  private _snippets: Snippet[] = [];

  constructor(workspacePath: string, globalSnippetDir?: string) {
    const workspaceSnippets = loadAllSnippets(path.resolve(workspacePath, '.vscode/ddx/snippets'), 'workspace');
    const userSnippets = globalSnippetDir ? loadAllSnippets(globalSnippetDir, 'user') : [];
    const ddxSnippets = loadAllSnippets(path.resolve(__dirname, './ddxSnippets'), 'ddx');
    this._snippets = [...workspaceSnippets, ...userSnippets, ...ddxSnippets];
  }

  // Return all snippets in order
  completeSnippets(scaffoldSnippetSources: ScaffoldSnippetSources): CompletionItem[] {
    return this._snippets
      .filter(s => {
        return scaffoldSnippetSources[s.source] !== '';
      })
      .map(s => {
        let scaffoldLabelPre = '';
        switch (s.type) {
          case 'file':
            scaffoldLabelPre = '<ddx> with';
            break;
          case 'custom':
            scaffoldLabelPre = `<${s.customTypeName || 'custom'}> with`;
            break;
          case 'template':
          case 'style':
          case 'script':
          case 'config':
            scaffoldLabelPre = `<${s.type}>`;
            break;
        }

        const sourceIndicator = scaffoldSnippetSources[s.source];
        const label = `${scaffoldLabelPre} ${s.name} ${sourceIndicator}`;

        return <CompletionItem>{
          label,
          insertText: s.content,
          insertTextFormat: InsertTextFormat.Snippet,
          // Use file icon to indicate file/template/style/script/custom completions
          kind: CompletionItemKind.File,
          documentation: computeDocumentation(s),
          detail: computeDetailsForFileIcon(s),
          sortText: computeSortTextPrefix(s) + label
        };
      });
  }
}

function loadAllSnippets(rootDir: string, source: SnippetSource): Snippet[] {
  let snippets = [
    ...loadSnippetsFromDir(rootDir, source, 'file'),
    ...loadSnippetsFromDir(path.resolve(rootDir, 'template'), source, 'template'),
    ...loadSnippetsFromDir(path.resolve(rootDir, 'style'), source, 'style'),
    ...loadSnippetsFromDir(path.resolve(rootDir, 'script'), source, 'script'),
    ...loadSnippetsFromDir(path.resolve(rootDir, 'config'), source, 'config')
  ];

  try {
    fs.readdirSync(rootDir).forEach(p => {
      if (p === 'template' || p === 'style' || p === 'script') {
        return;
      }
      const absPath = path.resolve(rootDir, p);
      if (!absPath.endsWith('.ddx') && fs.existsSync(absPath) && fs.lstatSync(absPath).isDirectory()) {
        const customDirSnippets = loadSnippetsFromDir(absPath, source, 'custom').map(s => {
          return {
            ...s,
            customTypeName: p
          };
        });

        snippets = [...snippets, ...customDirSnippets];
      }
    });
  } catch (err) {}

  return snippets;
}

function loadSnippetsFromDir(dir: string, source: SnippetSource, type: SnippetType): Snippet[] {
  const snippets: Snippet[] = [];

  if (!fs.existsSync(dir)) {
    return snippets;
  }

  try {
    fs.readdirSync(dir)
      .filter(p => p.endsWith('.ddx'))
      .forEach(p => {
        snippets.push({
          source,
          name: p,
          type,
          content: fs.readFileSync(path.resolve(dir, p), 'utf-8').replace(/\\t/g, '\t')
        });
      });
  } catch (err) {}

  return snippets;
}

function computeSortTextPrefix(snippet: Snippet) {
  const s = {
    workspace: 0,
    user: 1,
    ddx: 2
  }[snippet.source];

  const t = {
    file: 'a',
    template: 'b',
    style: 'c',
    script: 'd',
    config: 'e',
    custom: 'f'
  }[snippet.type];

  return s + t;
}

function computeDetailsForFileIcon(s: Snippet) {
  switch (s.type) {
    case 'file':
      return s.name + ' | .ddx';
    case 'template':
      return s.name + ' | .html';
    case 'style':
      return s.name + ' | .css';
    case 'template':
      return s.name + ' | .js';
    case 'config':
      return s.name + ' | .json';
    case 'custom':
      return s.name;
  }
}

function computeDocumentation(s: Snippet): MarkupContent {
  return {
    kind: 'markdown',
    value: `\`\`\`ddx\n${s.content}\n\`\`\``
  };
}
