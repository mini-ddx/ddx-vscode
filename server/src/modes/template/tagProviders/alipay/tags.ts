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
  },
  progress: {
    description: '进度条。',
    attributes: ['percent', 'show-info', 'stroke-width', 'active-color', 'background-color', 'active']
  },
  'rich-text': {
    description: '富文本。',
    attributes: ['nodes']
  },
  button: {
    description: '按钮。',
    attributes: [
      'size',
      'type',
      'plain',
      'disabled',
      'loading',
      'hover-class',
      'hover-start-time',
      'hover-stay-time',
      'hover-stop-propagation',
      'form-type',
      'open-type',
      'scope',
      'onTap',
      'app-parameter',
      'public-id'
    ]
  },
  form: {
    description: '按钮。',
    attributes: ['report-submit', 'onSubmit', 'onReset']
  },
  label: {
    description: `用于改进表单组件的可用性。
    使用 for 属性找到对应组件的 id，或者将组件放在该标签下。当点击时，就会聚焦对应的组件。for 优先级高于内部组件，内部有多个组件的时候默认触发第一个组件。
    目前可以绑定的组件有：checkbox , radio ,input, textarea。`,
    attributes: ['for']
  },
  input: {
    description: '',
    attributes: [
      'value',
      'name',
      'type',
      'password',
      'placeholder',
      'placeholder-style',
      'placeholder-class',
      'disabled',
      'maxlength',
      'focus',
      'confirm-type',
      'confirm-hold',
      'cursor',
      'selection-start',
      'selection-end',
      'randomNumber',
      'controlled',
      'onInput',
      'onConfirm',
      'onFocus',
      'onBlur'
    ]
  },
  textarea: {
    description: '多行输入框，可输入多行内容。',
    attributes: [
      'name',
      'value',
      'placeholder',
      'placeholder-style',
      'placeholder-class',
      'disabled',
      'maxlength',
      'focus',
      'auto-height',
      'show-count',
      'controlled',
      'onInput',
      'onFocus',
      'onBlur',
      'onConfirm'
    ]
  },
  'radio-group': {
    subtags: ['radio'],
    description: '单项选择器组，内部由多个 radio  组成。',
    attributes: ['onChange', 'name']
  },
  radio: {
    description: '单选按钮。',
    attributes: ['value', 'checked', 'disabled', 'color']
  },
  checkbox: {
    description: '多选项目。',
    attributes: ['value', 'checked', 'disabled', 'onChange', 'color']
  },
  'checkbox-group': {
    description: '',
    attributes: ['name', 'onChange']
  },
  switch: {
    description:
      '单选开关。iOS 和安卓展现样式有所差异。iOS 单选开关为圆形；安卓单选开关为方形。不支持自定义 switch 样式，如大小等。',
    attributes: ['name', 'checked', 'disabled', 'color', 'onChange', 'controlled']
  },
  slider: {
    description: '滑动选择器。',
    attributes: [
      'name',
      'min',
      'max',
      'step',
      'disabled',
      'value',
      'show-value',
      'active-color',
      'background-color',
      'track-size',
      'handle-size',
      'handle-color',
      'onChange',
      'onChanging'
    ]
  },
  picker: {
    description: '从底部弹起的滚动选择器。picker 组件不支持多列选择，可以使用 picker-view 组件。',
    attributes: ['range', 'range-key', 'value', 'onChange', 'disabled']
  },
  pickerView: {
    description: '嵌入页面的滚动选择器。 其中只可放置 picker-view-column 组件，其它节点不会显示。',
    attributes: ['value', 'indicator-style', 'indicator-class', 'mask-style', 'mask-class', 'onChange']
  },
  navigator: {
    description: '导航',
    attributes: ['open-type', 'hover-class', 'hover-start-time', 'hover-stay-time', 'url']
  },
  image: {
    description: '图片。',
    attributes: [
      'src',
      'mode',
      'class',
      'style',
      'lazy-load',
      'default-source',
      'onLoad',
      'onError',
      'onTap',
      'catchTap'
    ]
  },
  video: {
    description: '',
    attributes: [
      'src',
      'poster',
      'objectFit',
      'initial-time',
      'duration',
      'controls',
      'autoplay',
      'direction',
      'loop',
      'muted',
      'show-fullscreen-btn',
      'show-play-btn',
      'show-center-play-btn',
      'enableProgressGesture',
      'mobilenetHintType',
      'onPlay',
      'onPause',
      'onEnded',
      'onTimeUpdate',
      'onLoading',
      'onError',
      'onFullScreenChange',
      'onTap',
      'onUserAction'
    ]
  },
  canvas: {
    description:
      '画布。画布是一个矩形区域，用于在页面上绘制图形，开发者可以控制其每一像素。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。',
    attributes: [
      'id',
      'style',
      'class',
      'width',
      'height',
      'disable-scroll',
      'onTap',
      'onTouchStart',
      'onTouchMove',
      'onTouchEnd',
      'onTouchCancel',
      'onLongTap'
    ]
  },
  map: {
    description:
      '该组件是地图组件。同一个页面需要展示多个 map 组件的话，需要使用不同的 ID 。目前只支持高德地图 style 。',
    attributes: [
      'style',
      'class',
      '​latitude',
      'longitude',
      'scale',
      'markers',
      'polyline',
      'circles',
      'controls',
      'polygon',
      'show-location',
      'include-points',
      'include-padding',
      'ground-overlays',
      'tile-overlay',
      'setting',
      'onMarkerTap',
      'onCalloutTap',
      'onControlTap',
      'onRegionChange',
      'onTap',
      'optimize'
    ]
  },
  'web-view': {
    description: 'web-view 组件用于承载 H5 网页，自动铺满整个小程序页面。',
    attributes: ['src', 'onMessage']
  }
};
