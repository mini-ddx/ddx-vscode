import { IHTMLTagProvider } from './common';
import { getHTML5TagProvider } from './htmlTags';
import { getVueTagProvider } from './vueTags';
// import { getRouterTagProvider } from './routerTags';
import {
  getRuntimeTagProvider,
  alipayTagProvider
  // antUITagProvider,
  // dingUITagProvider
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
];

export interface CompletionConfiguration {
  [provider: string]: boolean;
}

export function getTagProviderSettings(workspacePath: string | null | undefined) {
  const settings: CompletionConfiguration = {
    html5: true,
    ddx: true, // todo add ddx
    aliay: false,
    // 小程序
    'dingui-mini': false,
    'mini-antui': false
  };
  if (!workspacePath) {
    return settings;
  }

  const autoAddMap: { [packageName: string]: any } = {
    // 'alipay': alipayTagsTagProvider, // 原生 支付宝小程序
    // 'mini-antui': antUITagProvider,
    // 'dingui-mini': dingUITagProvider
  };

  // 需要判断 是否支付宝小程序
  allTagProviders.push(alipayTagProvider);
  settings.alipay = true;

  try {
    const packagePath = ts.findConfigFile(workspacePath, ts.sys.fileExists, 'package.json');
    if (!packagePath) {
      return settings;
    }

    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
    const dependencies = packageJson.dependencies || {};
    // const devDependencies = packageJson.devDependencies || {};

    for (const dep in dependencies) {
      if (autoAddMap[dep] !== undefined) {
        allTagProviders.push(autoAddMap[dep]);
        continue;
      }
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
