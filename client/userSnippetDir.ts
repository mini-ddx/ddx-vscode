import { homedir } from 'os';
import { resolve } from 'path';

export function getGlobalSnippetDir(isInsiders: boolean) {
  const appName = isInsiders ? 'Code - Insiders' : 'Code';

  if (process.platform === 'win32') {
    return resolve(process.env['APPDATA'] || '', appName, 'User/snippets/ddx');
  } else if (process.platform === 'darwin') {
    return resolve(homedir(), 'Library/Application Support', appName, 'User/snippets/ddx');
  } else {
    return resolve(homedir(), '.config', appName, 'User/snippets/ddx');
  }
}
