export function isVueFile(path: string) {
  return path.endsWith('.ddx');
}

/**
 * If the path ends with `.ddx.ts`, it's a `.ddx` file pre-processed by Vetur
 * to be used in TS Language Service
 */
export function isVirtualVueFile(path: string) {
  return path.endsWith('.ddx.ts') && !path.includes('node_modules');
}

/**
 * If the path ends with `.ddx.template`, it's a `.ddx` file's template part
 * pre-processed by Vetur to calculate template diagnostics in TS Language Service
 */
export function isVirtualVueTemplateFile(path: string) {
  return path.endsWith('.ddx.template');
}
