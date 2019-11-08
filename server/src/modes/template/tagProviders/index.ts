import { IHTMLTagProvider } from './common';
import { getHTML5TagProvider } from './htmlTags';
import { getVueTagProvider } from './vueTags';
// import { getRouterTagProvider } from './routerTags';
import {
  // elementTagProvider,
  // onsenTagProvider,
  // bootstrapTagProvider,
  // buefyTagProvider,
  // gridsomeTagProvider,
  getRuntimeTagProvider
} from './externalTagProviders';
export { getComponentInfoTagProvider as getComponentTags } from './componentInfoTagProvider';
export { IHTMLTagProvider } from './common';

import * as ts from 'typescript';
import * as fs from 'fs';
import { join } from 'path';

export let allTagProviders: IHTMLTagProvider[] = [
  getHTML5TagProvider(),
  getVueTagProvider()
  // getRouterTagProvider(),
  // elementTagProvider,
  // onsenTagProvider,
  // bootstrapTagProvider,
  // buefyTagProvider,
  // gridsomeTagProvider
];

export interface CompletionConfiguration {
  [provider: string]: boolean;
}

export function getTagProviderSettings(workspacePath: string | null | undefined) {
  const settings: CompletionConfiguration = {
    html5: true,
    ddx: true, // todo add ddx
    router: false,
    element: false,
    onsen: false,
    bootstrap: false,
    buefy: false,
    vuetify: false,
    quasar: false, // Quasar v1+
    'quasar-framework': false, // Quasar pre v1
    nuxt: false,
    gridsome: false
  };
  if (!workspacePath) {
    return settings;
  }
  try {
    const packagePath = ts.findConfigFile(workspacePath, ts.sys.fileExists, 'package.json');
    if (!packagePath) {
      return settings;
    }

    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
    const dependencies = packageJson.dependencies || {};
    // const devDependencies = packageJson.devDependencies || {};

    // if (dependencies['buefy']) {
    //   settings['buefy'] = true;
    // }

    for (const dep in dependencies) {
      const runtimePkgPath = ts.findConfigFile(
        workspacePath,
        ts.sys.fileExists,
        join('node_modules', dep, 'package.json')
      );

      if (!runtimePkgPath) {
        continue;
      }

      const runtimePkg = JSON.parse(fs.readFileSync(runtimePkgPath, 'utf-8'));
      if (!runtimePkg) {
        continue;
      }

      const tagProvider = getRuntimeTagProvider(workspacePath, runtimePkg);
      if (!tagProvider) {
        continue;
      }

      allTagProviders.push(tagProvider);
      settings[dep] = true;
    }
  } catch (e) {}
  return settings;
}

export function getEnabledTagProviders(tagProviderSetting: CompletionConfiguration) {
  return allTagProviders.filter(p => tagProviderSetting[p.getId()] !== false);
}
