import {
  HTMLTagSpecification,
  IHTMLTagProvider,
  collectTagsDefault,
  collectAttributesDefault,
  collectValuesDefault,
  genAttribute,
  AttributeCollector,
  Priority
} from './common';

const u = undefined;

const alipayTags = {

};

const alipayAttributes = [
  genAttribute('v-text', u, 'Updates the element’s `textContent`.'),
];

const valueSets = {};


export function getVueTagProvider(): IHTMLTagProvider {
  return {
    getId: () => 'alipay',
    priority: Priority.Framework,
    collectTags: collector => collectTagsDefault(collector, alipayTags),
    collectAttributes: (tag: string, collector: AttributeCollector) => {
      collectAttributesDefault(tag, collector, alipayTags, alipayAttributes);
    },
    collectValues: (tag: string, attribute: string, collector: (value: string) => void) => {
      collectValuesDefault(tag, attribute, collector, alipayTags, alipayAttributes, valueSets);
    }
  };
}
