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
  view: new HTMLTagSpecification('视图容器。相当于 web 的 div 或者 react-native 的 view。', [
    genAttribute(
      'disable-scroll',
      u,
      '是否阻止区域内滚动页面 说明：如果 view 中嵌套 view，外层 view 设置 disable-scroll 为 true 时将阻止内部的滚动属性。'
    ),
    genAttribute('hover-class', 'v', '触摸时添加的样式类')
  ])
};

const alipayAttributes = [genAttribute('v-text', u, 'Updates the element’s `textContent`.')];

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
