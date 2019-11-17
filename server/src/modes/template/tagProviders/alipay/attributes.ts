export const view = {
  'disable-scroll': {
    description:
      '是否阻止区域内滚动页面 说明：如果 view 中嵌套 view，外层 view 设置 disable-scroll 为 true 时将阻止内部的滚动属性。'
  },
  'hover-class': {
    description: '触摸时添加的样式类'
  },
  'hover-start-time': {
    description: '按住多久后出现点击状态，单位毫秒'
  },
  'hover-stay-time': {
    description: '松开后点击状态保留时间，单位毫秒'
  },
  hidden: {
    description: '是否隐藏'
  },
  class: {
    description: '自定义样式名'
  },
  style: {
    description: '内联样式'
  },
  animation: {
    description:
      '用于动画，详见 my.createAnimation 。使用 my.createAnimation 生成的动画是通过过渡（Transition）实现的，只会触发 onTransitionEnd，不会触发 onAnimationStart, onAnimationIteration, onAnimationEnd。'
  },
  'hover-stop-propagation': {
    description: '是否阻止当前元素的祖先元素出现点击态',
    version: '>=1.10.0'
  },
  onTap: {
    description: '点击'
  },
  onTouchStart: {
    description: '触摸动作开始'
  },
  onTouchMove: {
    description: '触摸后移动'
  },
  onTouchEnd: {
    description: '触摸动作结束'
  },
  onTouchCancel: {
    description: '触摸动作被打断，如来电提醒，弹窗'
  },
  onLongTap: {
    description: '长按 500ms 之后触发，触发了长按事件后进行移动将不会触发屏幕的滚动'
  },
  onTransitionEnd: {
    description: '过渡（Transition）结束时触发',
    version: '>=1.8.0'
  },
  onAnimationIteration: {
    description: '每开启一次新的动画过程时触发。（第一次不触发）',
    version: '>=1.8.0'
  },
  onAnimationStart: {
    description: '动画开始时触发',
    version: '>=1.8.0'
  },
  onAnimationEnd: {
    description: '动画结束时触发',
    version: '>=1.8.0'
  },
  onAppear: {
    description: '当前元素可见时触发。',
    version: '>=1.9.0'
  },
  onDisappear: {
    description: '当view标签隐藏到2/3时会触发。',
    version: '>=1.9.0'
  },
  onFirstAppear: {
    description: '当前元素首次可见时触发。',
    version: '>=1.9.4'
  }
};

export const swiper = {
  'indicator-dots': {
    description: '是否显示指示点'
  },
  'indicator-color': {
    description: '指示点颜色'
  },
  'indicator-active-color': {
    description: '当前选中的指示点颜色'
  },
  'active-class': {
    description: 'swiper-item 可见时的 class',
    version: '>=1.13.7'
  },
  'changing-class': {
    description: 'acceleration 设置为 {{true}} 时且处于滑动过程中，中间若干屏处于可见时的class',
    version: '>=1.13.7'
  },
  autoplay: {
    description: '是否自动切换'
  },
  current: {
    description: '当前页面的 index'
  },
  duration: {
    description: '滑动动画时长'
  },
  interval: {
    description: '自动切换时间间隔'
  },
  circular: {
    description: '是否启用无限滑动'
  },
  vertical: {
    description: '滑动方向是否为纵向'
  },
  'previous-margin': {
    description: '前边距，单位px，1.9.0暂时只支持水平方向',
    version: '>=1.9.0'
  },
  'next-margin': {
    description: '后边距，单位px，1.9.0暂时只支持水平方向',
    version: '>=1.9.0'
  },
  acceleration: {
    description: '当开启时，会根据滑动速度，连续滑动多屏',
    version: '>=1.13.7'
  },
  'disable-programmatic-animation': {
    description: '是否禁用代码变动触发 swiper 切换时使用动画。',
    version: '>=1.13.7'
  },
  onChange: {
    description:
      'current 改变时会触发，event.detail = {current, isChanging}，其中 isChanging 需 acceleration 设置为 {{true}} 时才有值，当连续滑动多屏时，中间若干屏触发 onChange 事件时 isChanging 为 true，最后一屏返回 false。'
  },
  onTransition: {
    description: 'swiper 中 swiper-item 的位置发生改变时会触发 transition 事件。',
    version: '>=1.15.0'
  },
  onAnimationEnd: {
    description:
      '动画结束时会触发 animationEnd 事件，event.detail = {current, source}，其中 source 的值有 autoplay 和 touch',
    version: '>=1.15.0'
  },
  'disable-touch': {
    description: '是否禁止用户 touch 操作',
    version: '>=1.15.0'
  }
};

export const scrollView = {
  class: {
    description: '外部样式名'
  },
  style: {
    description: '内联样式名'
  },
  'scroll-x': {
    description: '允许横向滚动'
  },
  'scroll-y': {
    description: '允许纵向滚动'
  },
  'upper-threshold': {
    description: '距顶部/左边多远时（单位px），触发 scrolltoupper 事件'
  },
  'lower-threshold': {
    description: '距底部/右边多远时（单位px），触发 scrolltolower 事件'
  },
  'scroll-top': {
    description: '设置竖向滚动条位置'
  },
  'scroll-left': {
    description: '设置横向滚动条位置'
  },
  'scroll-into-view': {
    description: '值应为某子元素 id，则滚动到该元素，元素顶部对齐滚动区域顶部'
  },
  'scroll-with-animation': {
    description: '在设置滚动条位置时使用动画过渡'
  },
  'scroll-animation-duration': {
    description:
      '当 scroll-with-animation 设置为 true 时，可以设置 scroll-animation-duration 来控制动画的执行时间，单位ms',
    version: '>=1.9.0'
  },
  'enable-back-to-top': {
    description: '当点击 iOS 顶部状态栏或者双击安卓标题栏时，滚动条返回顶部，只支持竖向',
    version: '>=1.11.0'
  },
  'trap-scroll': {
    description: '纵向滚动时，当滚动到顶部或底部时，强制禁止触发页面滚动，仍然只触发 scroll-view 自身的滚动。',
    version: '>=1.11.2'
  },
  onScrollToUpper: {
    description: '滚动到顶部/左边，会触发 scrolltoupper 事件'
  },
  onScrollToLower: {
    description: '滚动到底部/右边，会触发 scrolltolower 事件'
  },
  onScroll: {
    description: '滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth}'
  },
  onTouchStart: {
    description: '触摸动作开始',
    version: '>=1.15.0'
  },
  onTouchMove: {
    description: '触摸后移动',
    version: '>=1.15.0'
  },
  onTouchEnd: {
    description: '触摸动作结束',
    version: '>=1.15.0'
  },
  onTouchCancel: {
    description: '触摸动作被打断，如来电提醒，弹窗',
    version: '>=1.15.0'
  }
};

// 带 namespace

export const coverView = { 'cover-view/onTap': { description: '点击事件回调', version: '>=1.9.0' } };

export const coverImage = {
  'cover-image/src': {
    description: '图片地址，支持的地址格式同 image 一致',
    version: '>=1.9.0'
  },
  'cover-image/onTap': {
    description: '点击事件回调',
    version: '>=1.9.0'
  }
};

export const movableView = {
  'movable-view/direction': {
    description: 'movable-view 的移动方向，属性值有 all、vertical、horizontal、none'
  },
  'movable-view/inertia': {
    description: 'movable-view是否带有惯性',
    version: '>=1.20.0'
  },
  'movable-view/out-of-bounds': {
    description: '超过可移动区域后，movable-view是否还可以移动',
    version: '>=1.20.0'
  },
  'movable-view/x': {
    description: '定义 x 轴方向的偏移，会换算为 left 属性，如果 x 的值不在可移动范围内，会自动移动到可移动范围'
  },
  'movable-view/y': {
    description: '定义 y 轴方向的偏移，会换算为 top 属性，如果 y 的值不在可移动范围内，会自动移动到可移动范围'
  },
  'movable-view/damping': {
    description: '阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快',
    version: '>=1.20.0'
  },
  'movable-view/friction': {
    description: '摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值',
    version: '>=1.20.0'
  },
  'movable-view/disabled': {
    description: '是否禁用'
  },
  'movable-view/scale': {
    description: '是否支持双指缩放，默认缩放手势生效区域是在movable-view内',
    version: '>=1.20.0'
  },
  'movable-view/scale-min': {
    description: '定义缩放倍数最小值',
    version: '>=1.20.0'
  },
  'movable-view/scale-max': {
    description: '定义缩放倍数最大值',
    version: '>=1.20.0'
  },
  'movable-view/scale-value': {
    description: '定义缩放倍数，取值范围为 0.5 - 10',
    version: '>=1.20.0'
  },
  'movable-view/animation': {
    description: '是否使用动画',
    version: '>=1.20.0'
  },
  'movable-view/onTouchStart': {
    description: '触摸动作开始，事件会向父节点传递。',
    version: '>=1.11.5'
  },
  'movable-view/catchTouchStart': {
    description: '触摸动作开始，事件仅作用于组件，不向父节点传递。',
    version: '>=1.11.5'
  },
  'movable-view/onTouchMove': {
    description: '触摸移动事件，事件会向父节点传递。',
    version: '>=1.11.5'
  },
  'movable-view/catchTouchMove': {
    description: '触摸移动事件，事件仅作用于组件，不向父节点传递。',
    version: '>=1.11.5'
  },
  'movable-view/onTouchEnd': {
    description: '触摸动作结束，事件会向父节点传递。',
    version: '>=1.11.5'
  },
  'movable-view/catchTouchEnd': {
    description: '触摸动作结束，事件仅作用于组件，不向父节点传递。',
    version: '>=1.11.5'
  },
  'movable-view/onTouchCancel': {
    description: '触摸动作被打断，如来电提醒，弹窗',
    version: '>=1.11.5'
  },
  'movable-view/onChange': {
    description:
      '拖动过程中触发的事件，event.detail = {x: x, y: y, source: source}，其中 source 表示产生移动的原因，值可为 touch（拖动）'
  },
  'movable-view/onChangeEnd': {
    description: '拖动结束触发的事件，event.detail = {x: x, y: y}'
  },
  'movable-view/onScale': {
    description: '缩放过程中触发的事件，event.detail = {x, y, scale}',
    version: '>=1.20.0'
  }
};

export const movableArea = {
  'movable-area/scale-area': {
    description: '否',
    version: '>=当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area'
  }
};

export const text = {
  'text/selectable': {
    description: '是否可选'
  },
  'text/space': {
    description: '以何种方式显示连续空格'
  },
  'text/decode': {
    description:
      '是否解码。为 true 时表示对文本内容进行解码，可解析的 HTML 实体字符有：&nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;'
  },
  'text/number-of-lines': {
    description: '多行省略，值须大于等于1，表现同 css 的 -webkit-line-clamp 属性一致'
  }
};

export const icon = {
  'icon/type': {
    description:
      'icon 类型，有效值： info, warn, waiting, cancel, download, search, clear, success, success_no_circle,loading',
    version: '>=loading(1.7.2)'
  },
  'icon/size': {
    description: 'icon 大小，单位 px'
  },
  'icon/color': {
    description: 'icon 颜色，同 CSS 色值'
  }
};

export default {
  ...view,
  ...swiper,
  ...scrollView,
  ...coverView,
  ...coverImage,
  ...movableView,
  ...movableArea,
  ...text,
  ...icon
};
