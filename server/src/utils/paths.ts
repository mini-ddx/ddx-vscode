import { platform } from 'os';
import Uri from 'vscode-uri';

/**
 * ddx mainly deals with paths / uris from two objects
 *
 * - `TextDocument` from `vscode-languageserver`
 * - `SourceFile` from `typescript`
 *
 * ## `TextDocument.uri`
 *
 * - macOS / Linux: file:///foo/bar
 * - Windows: file:///c%3A/foo/bar (%3A is `:`)
 *
 * ## `SourceFile.fileName`
 *
 * - macOS / Linux: /foo/bar
 * - Windows: c:/foo/bar
 *
 * ## vscode-uri
 *
 * - `Uri.parse`: Takes full URI starting with `file://`
 * - `Uri.file`: Takes file path
 *
 * ### `fsPath` vs `path`
 *
 * - macOS / Linux:
 * ```
 * > Uri.parse('file:///foo/bar').fsPath
 * '/foo/bar'
 * > Uri.parse('file:///foo/bar').path
 * '/foo/bar'
 * ```
 * - Windows
 * ```
 * > Uri.parse('file:///c%3A/foo/bar').fsPath
 * 'c:\\foo\\bar' (\\ escapes to \)
 * > Uri.parse('file:///c%3A/foo/bar').path
 * '/c:/foo/bar'
 * ```
 */

export function getFileFsPath(documentUri: string): string {
  return Uri.parse(documentUri).fsPath;
}

export function getFilePath(documentUri: string): string {
  const IS_WINDOWS = platform() === 'win32';
  if (IS_WINDOWS) {
    // Windows have a leading slash like /C:/Users/pine
    return Uri.parse(documentUri).path.slice(1);
  } else {
    return Uri.parse(documentUri).path;
  }
}

export function normalizeFileNameToFsPath(fileName: string) {
  return Uri.file(fileName).fsPath;
}
