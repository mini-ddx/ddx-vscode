export default {
  view: {
    attributes: ['disable-scroll', 'hover-class', 'hover-start-time', 'hover-stay-time', 'hidden'],
    defaults: [],
    description: '视图容器。相当于 web 的 div 或者 react-native 的 view。如果需要使用滚动视图，请使用 scroll-view。'
  },
  swiper: {
    subtags: ['swiper-item'],
    attributes: ['autoplay', 'indicator-dots'],
    defaults: [],
    description: '滑块视图容器。其中，只可放置 swiper-item，否则会导致未定义的行为。'
  },
  'swiper-item': {
    defaults: ['autoplay'],
    description: '仅可放置在 swiper 组件中，宽高自动设置为 100%。swiper-item 不能添加事件，建议嵌套 view 绑定事件。'
  }
};
