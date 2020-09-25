import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';

import { IHTMLTagProvider, Priority } from './common';

// todo: add mini program tag and Attributes

import * as alipayTags from './alipay/tags';
import * as alipayAttributes from './alipay/attributes';
// import * as dingUITags from './dingui/tags.json';
// import * as dingUIAttributes from './dingui/attributes.json';
// import * as antUITags from './antui/tags.json';
// import * as antUIAttributes from './antui/attributes.json';

export const alipayTagProvider = getExternalTagProvider('alipay', alipayTags, alipayAttributes);
// export const dingUITagProvider = getExternalTagProvider('dingui-mini', dingUITags, dingUIAttributes);
// export const antUITagProvider = getExternalTagProvider('mini-antui', antUITags, antUIAttributes);

export function getRuntimeTagProvider(workspacePath: string, pkg: any): IHTMLTagProvider | null {
  if (!pkg['@ddxjs/cli']) {
    return null;
  }

  const tagsPath = ts.findConfigFile(
    workspacePath,
    ts.sys.fileExists,
    path.join('node_modules/', pkg.name, pkg.ddx.tags)
  );
  const attrsPath = ts.findConfigFile(
    workspacePath,
    ts.sys.fileExists,
    path.join('node_modules/', pkg.name, pkg.ddx.attributes)
  );

  try {
    if (tagsPath && attrsPath) {
      const tagsJson = JSON.parse(fs.readFileSync(tagsPath, 'utf-8'));
      const attrsJson = JSON.parse(fs.readFileSync(attrsPath, 'utf-8'));
      return getExternalTagProvider(pkg.name, tagsJson, attrsJson);
    }
    return null;
  } catch (err) {
    return null;
  }
}

export function getExternalTagProvider(id: string, tags: any, attributes: any): IHTMLTagProvider {
  function findAttributeDetail(tag: string, attr: string) {
    return attributes[attr] || attributes[tag + '/' + attr];
  }

  if(tags.__esModule ) {
    tags = tags.default;
  }
  if(attributes.__esModule ) {
    attributes = attributes.default;
  }

  return {
    getId: () => id,
    priority: Priority.Library,
    collectTags(collector) {
      for (const tagName in tags) {
        collector(tagName, tags[tagName].description || '');
      }
    },
    collectAttributes(tag, collector) {
      if (!tags[tag]) {
        return;
      }
      const attrs = tags[tag].attributes;
      if (!attrs) {
        return;
      }
      for (const attr of attrs) {
        const detail = findAttributeDetail(tag, attr);
        collector(attr, undefined, (detail && detail.description) || '');
      }
    },
    collectValues(tag, attr, collector) {
      if (!tags[tag]) {
        return;
      }
      const attrs = tags[tag].attributes;
      if (!attrs || attrs.indexOf(attr) < 0) {
        return;
      }
      const detail = findAttributeDetail(tag, attr);
      if (!detail || !detail.options) {
        return;
      }
      for (const option of detail.options) {
        collector(option.toString());
      }
    }
  };
}
