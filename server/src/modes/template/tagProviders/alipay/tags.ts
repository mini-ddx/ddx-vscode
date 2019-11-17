export default {
  view: {
    attributes: [
      'disable-scroll',
      'hover-class',
      'hover-start-time',
      'hover-stay-time',
      'hidden',
      'class',
      'style',
      'animation',
      'hover-stop-propagation',
      'onTap',
      'onTouchStart',
      'onTouchMove',
      'onTouchEnd',
      'onTouchCancel',
      'onLongTap',
      'onTransitionEnd',
      'onAnimationIteration',
      'onAnimationStart',
      'onAnimationEnd',
      'onAppear',
      'onDisappear',
      'onFirstAppear'
    ],
    defaults: [],
    description: '视图容器。相当于 web 的 div 或者 react-native 的 view。如果需要使用滚动视图，请使用 scroll-view。'
  },
  swiper: {
    subtags: ['swiper-item'],
    attributes: [
      'indicator-dots',
      'indicator-color',
      'indicator-active-color',
      'active-class',
      'changing-class',
      'autoplay',
      'current',
      'duration',
      'interval',
      'circular',
      'vertical',
      'previous-margin',
      'next-margin',
      'acceleration',
      'disable-programmatic-animation',
      'onChange',
      'onTransition',
      'onAnimationEnd',
      'disable-touch'
    ],
    defaults: ['autoplay'],
    description: '滑块视图容器。其中，只可放置 swiper-item，否则会导致未定义的行为。'
  },
  'swiper-item': {
    defaults: ['autoplay'],
    description: '仅可放置在 swiper 组件中，宽高自动设置为 100%。swiper-item 不能添加事件，建议嵌套 view 绑定事件。'
  },
  'scroll-view': {
    description: '可滚动视图区域。',
    attributes: [
      'class',
      'style',
      'scroll-x',
      'scroll-y',
      'upper-threshold',
      'lower-threshold',
      'scroll-top',
      'scroll-left',
      'scroll-into-view',
      'scroll-with-animation',
      'scroll-animation-duration',
      'enable-back-to-top',
      'trap-scroll',
      'onScrollToUpper',
      'onScrollToLower',
      'onScroll',
      'onTouchStart',
      'onTouchMove',
      'onTouchEnd',
      'onTouchCancel'
    ]
  },
  'cover-view': {
    description: '覆盖在原生组件之上的文本视图。可覆盖的原生组件包括 map、canvas。',
    attributes: ['onTap']
  },
  'movable-view': {
    description:
      '覆可移动的视图容器，在页面中可以拖拽滑动。movable-view 必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。',
    attributes: [
      'direction',
      'inertia',
      'out-of-bounds',
      'x',
      'y',
      'damping',
      'friction',
      'disabled',
      'scale',
      'scale-min',
      'scale-max',
      'scale-value',
      'animation',
      'onTouchStart',
      'catchTouchStart',
      'onTouchMove',
      'catchTouchMove',
      'onTouchEnd',
      'catchTouchEnd',
      'onTouchCancel',
      'onChange',
      'onChangeEnd',
      'onScale'
    ]
  },
  'movable-area': {
    description: 'movable-view 的可移动区域。movable-area 必须设置 width 和 height 属性，不设置默认为 10px。',
    subtags: ['movable-view'],
    attributes: ['scale-area']
  },
  text: {
    description: '文本。',
    attributes: ['selectable', 'space', 'decode', 'number-of-lines']
  },
  icon: {
    description: '图标。',
    attributes: ['type', 'size', 'color']
  }
};
