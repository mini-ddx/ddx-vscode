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

export const progress = {
  'progress/percent': {
    description: '百分比(0~100)'
  },
  'progress/show-info': {
    description: '在右侧显示百分比值'
  },
  'progress/stroke-width': {
    description: '线的粗细，单位 px'
  },
  'progress/active-color': {
    description: '已选择的进度条颜色'
  },
  'progress/background-color': {
    description: '未选择的进度条颜色'
  },
  'progress/active': {
    description: '从左往右是否进行加载动画'
  }
};

export const richText = {
  'rich-text/nodes': {
    description: '节点列表'
  }
};

export const button = {
  'progress/percent': {
    description: '百分比(0~100)'
  },
  'progress/show-info': {
    description: '在右侧显示百分比值'
  },
  'progress/stroke-width': {
    description: '线的粗细，单位 px'
  },
  'progress/active-color': {
    description: '已选择的进度条颜色'
  },
  'progress/background-color': {
    description: '未选择的进度条颜色'
  },
  'progress/active': {
    description: '从左往右是否进行加载动画'
  }
};

export const form = {
  'form/report-submit': {
    description:
      "onSubmit 回调是否返回 formId，用于发送 模板消息，使用前可使用 canIUse ('form.report-submit')判断是否支持",
    version: '>=1.3.0'
  },
  'form/onSubmit': {
    description:
      "携带 form 中的数据触发 submit 事件，event.detail = {value : {'slider': '80'}, buttonTarget: {'dataset': 'buttonDataset'} } (可以在 submit 按钮上添加自定义参数)",
    version: '>=buttonTarget 1.7.0 开始支持'
  },
  'form/onReset': {
    description: '表单重置时会触发 reset 事件'
  }
};

export const label = { 'label/for': { description: '绑定组件的 id' } };

export const input = {
  'input/value': {
    description: '初始内容'
  },
  'input/name': {
    description: '组件名字，用于表单提交获取数据'
  },
  'input/type': {
    description:
      'input 的类型，有效值：text、 number、 idcard、 digit(可以唤起带有小数点的数字键盘)、numberpad、digitpad、 idcardpad。',
    version:
      '>=numberpad、digitpad、 idcardpad 基础库 1.13.0 客户端 10.1.50，可通过 my.canIUse(input.type.numberpad)来检测。'
  },
  'input/password': {
    description: '是否是密码类型'
  },
  'input/placeholder': {
    description: '占位符'
  },
  'input/placeholder-style': {
    description: '指定 placeholder 的样式，可设置间距',
    version: '>=1.6.0'
  },
  'input/placeholder-class': {
    description: '指定 placeholder 的样式类',
    version: '>=1.6.0'
  },
  'input/disabled': {
    description: '是否禁用'
  },
  'input/maxlength': {
    description: '最大长度'
  },
  'input/focus': {
    description: '获取焦点'
  },
  'input/confirm-type': {
    description:
      '设置键盘右下角按钮的文字，有效值：done（显示“完成”）、go（显示“前往”）、next（显示“下一个”）、search（显示“搜索”）、send（显示“发送”），平台不同显示的文字略有差异。注意：只有在 type=text 时有效',
    version: '>=1.7.0'
  },
  'input/confirm-hold': {
    description: '点击键盘右下角按钮时是否保持键盘不收起状态',
    version: '>=1.7.0'
  },
  'input/cursor': {
    description: '指定 focus 时的光标位置'
  },
  'input/selection-start': {
    description: '获取光标时，选中文本对应的焦点光标起始位置，需要和 selection-end 配合使用',
    version: '>=1.7.0'
  },
  'input/selection-end': {
    description: '获取光标时，选中文本对应的焦点光标结束位置，需要和 selection-start 配合使用',
    version: '>=1.7.0'
  },
  'input/randomNumber': {
    description: '当 type 为 number, digit, idcard 数字键盘是否随机排列',
    version: '>=1.9.0'
  },
  'input/controlled': {
    description: '是否为受控组件。为 true 时，value 内容会完全受 setData 控制',
    version: '>=1.8.0'
  },
  'input/onInput': {
    description: '键盘输入时触发 input 事件，event.detail = {value: value}'
  },
  'input/onConfirm': {
    description: '点击键盘完成时触发，event.detail = {value: value}'
  },
  'input/onFocus': {
    description: '聚焦时触发，event.detail = {value: value}'
  },
  'input/onBlur': {
    description: '失去焦点时触发（仅支持真机），event.detail = {value: value}'
  }
};

export const textarea = {
  'textarea/name': {
    description: '组件名字，用于表单提交获取数据'
  },
  'textarea/value': {
    description: '初始内容'
  },
  'textarea/placeholder': {
    description: '占位符'
  },
  'textarea/placeholder-style': {
    description: '指定 placeholder 的样式',
    version: '>=1.6.0'
  },
  'textarea/placeholder-class': {
    description: '指定 placeholder 的样式类',
    version: '>=1.6.0'
  },
  'textarea/disabled': {
    description: '是否禁用'
  },
  'textarea/maxlength': {
    description: '最大长度，当设置为-1时不限制最大长度'
  },
  'textarea/focus': {
    description: '获取焦点'
  },
  'textarea/auto-height': {
    description: '是否自动增高'
  },
  'textarea/show-count': {
    description: '是否渲染字数统计功能（是否删除默认计数器/是否显示字数统计）',
    version: '>=1.8.0'
  },
  'textarea/controlled': {
    description: '是否为受控组件。为 true 时，value 内容会完全受 setData 控制',
    version: '>=1.8.0'
  },
  'textarea/onInput': {
    description: '键盘输入时触发，event.detail = {value: value}，可以直接 return 一个字符串以替换输入框的内容'
  },
  'textarea/onFocus': {
    description: '输入框聚焦时触发 event.detail = {value: value}'
  },
  'textarea/onBlur': {
    description: '输入框失去焦点时触发，event.detail = {value: value}'
  },
  'textarea/onConfirm': {
    description: '点击完成时触发，event.detail = {value: value}'
  }
};

export const radioGroup = {
  'radio-group/onChange': { description: '选中项发生变化时触发，event.detail = {value: 选中项 radio 的 value}' },
  'radio-group/name': { description: '组件名字，用于表单提交获取数据' }
};

export const radio = {
  'radio/value': {
    description: '组件值，选中时 change 事件会携带的 value'
  },
  'radio/checked': {
    description: '当前是否选中'
  },
  'radio/disabled': {
    description: '是否禁用'
  },
  'radio/color': {
    description: 'radio 的颜色，同 CSS 色值',
    version: '>=1.10.0'
  }
};

export const checkbox = {
  'checkbox/value': {
    description: '组件值，选中时 change 事件会携带的 value'
  },
  'checkbox/checked': {
    description: '当前是否选中，可用来设置默认选中'
  },
  'checkbox/disabled': {
    description: '是否禁用'
  },
  'checkbox/onChange': {
    description: '组件发生改变时触发，detail = {value: 该 checkbox 是否 checked }'
  },
  'checkbox/color': {
    description: 'checkbox 的颜色，同 CSS 色值',
    version: '>=1.10.0'
  }
};

export const checkboxGroup = {
  'checkbox-group/name': { description: '组件名字，用于表单提交获取数据' },
  'checkbox-group/onChange': {
    description: '中选中项发生改变时触发， detail = {value: 选中的 checkbox 项 value 的值} '
  }
};

export const _switch = {
  'switch/name': {
    description: '组件名字，用于表单提交获取数据'
  },
  'switch/checked': {
    description: '是否选中'
  },
  'switch/disabled': {
    description: '是否禁用'
  },
  'switch/color': {
    description: '组件颜色，同 CSS 色值',
    version: '>=1.10.0'
  },
  'switch/onChange': {
    description: 'checked 改变时触发，event.detail={ value:checked}'
  },
  'switch/controlled': {
    description: '是否为受控组件，为 true 时，checked 会完全受 setData 控制',
    version: '>=1.8.0'
  }
};

export const slider = {
  'slider/name': {
    description: '组件名字，用于表单提交获取数据'
  },
  'slider/min': {
    description: '最小值'
  },
  'slider/max': {
    description: '最大值',
    version: '>='
  },
  'slider/step': {
    description: '步长，值必须大于 0，并可被(max - min)整除'
  },
  'slider/disabled': {
    description: '是否禁用'
  },
  'slider/value': {
    description: '当前取值'
  },
  'slider/show-value': {
    description: '是否显示当前 value'
  },
  'slider/active-color': {
    description: '已选择的颜色，同 CSS 色值'
  },
  'slider/background-color': {
    description: '背景条颜色，同 CSS 色值'
  },
  'slider/track-size': {
    description: '轨道线条高度'
  },
  'slider/handle-size': {
    description: '滑块大小',
    version: '>='
  },
  'slider/handle-color': {
    description: '滑块填充色，同 CSS 色值'
  },
  'slider/onChange': {
    description: '完成一次拖动后触发，event.detail = {value: value}'
  },
  'slider/onChanging': {
    description: '拖动过程中触发的事件，event.detail = {value: value}',
    version: '>=1.5.0'
  }
};

export const picker = {
  'picker/range': {
    description: 'String[] 时表示可选择的字符串列表；Object[] 时需指定 range-key 表示可选择的字段'
  },
  'picker/range-key': {
    description: '当 range 是一个 Object[] 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容'
  },
  'picker/value': { description: '表示选择了 range 中的第几个（下标从 0 开始）。' },
  'picker/onChange': { description: 'value 改变时触发，event.detail = {value: value}' },
  'picker/disabled': { description: '是否禁用' }
};

export const pickerView = {
  'picker-view/value': {
    description: '数字表示 picker-view-column 中对应的 index （从 0 开始）'
  },
  'picker-view/indicator-style': {
    description: '选中框样式'
  },
  'picker-view/indicator-class': {
    description: '选中框的类名',
    version: '>=1.10'
  },
  'picker-view/mask-style': {
    description: '蒙层的样式',
    version: '>=1.10'
  },
  'picker-view/mask-class': {
    description: '蒙层的类名',
    version: '>=1.10'
  },
  'picker-view/onChange': {
    description:
      '滚动选择 value 改变时触发，event.detail = {value: value} value为数组，表示 picker-view 内的 picker-view-column index 索引 ，从 0 开始'
  }
};

export const navigator = {
  'navigator/open-type': {
    description: '跳转方式'
  },
  'navigator/hover-class': {
    description: '点击后的样式类'
  },
  'navigator/hover-start-time': {
    description: '按住后多少时间后出现点击状态，单位ms'
  },
  'navigator/hover-stay-time': {
    description: '手指松开后点击状态保留时间，单位ms'
  },
  'navigator/url': {
    description: '当前小程序内的跳转链接'
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
  ...icon,
  ...progress,
  ...richText,
  ...button,
  ...form,
  ...label,
  ...input,
  ...textarea,
  ...radioGroup,
  ...checkbox,
  ...checkboxGroup,
  ..._switch,
  ...slider,
  ...picker,
  ...pickerView,
  ...navigator
};
