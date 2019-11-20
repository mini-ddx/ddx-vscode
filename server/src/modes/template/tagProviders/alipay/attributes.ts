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

// todo 添加 mode 的自动提示
export const image = {
  'image/src': { description: '图片地址' },
  'image/mode': { description: '图片模式' },
  'image/class': { description: '' },
  'image/style': { description: '' },
  'image/lazy-load': {
    description: '支持图片懒加载，不支持通过 css 来控制 image 展示隐藏的场景。',
    version: '>=1.9.0'
  },
  'image/default-source': {
    description: '默认图片地址，若设置默认图片地址，会先显示默认图片，等 src 对应的图片加载成功后，再渲染对应的图片。',
    version: '>=1.19.0'
  },
  'image/onLoad': {
    description: "图片载入完毕时触发，事件对象 event.detail = {height: '图片高度px', width: '图片宽度px'}"
  },
  'image/onError': { description: "当图片加载错误时触发，事件对象 event.detail = {errMsg: 'something wrong'}" },
  'image/onTap': { description: '点击图片时触发' },
  'image/catchTap': { description: '点击图片时触发，阻止事件冒泡' }
};

export const video = {
  'video/属性名': {
    description: '说明',
    version: '>=undefined'
  },
  'video/src': {
    description:
      '要播放视频的资源地址，支持优酷视频编码（支付宝客户端10.1.75），优酷视频上传流程请见 小程序视频播放。\n\nsrc 支持的协议如下：\n\nvid/showId: XMzg2Mzc5MzMwMA== \n\napFilePath: https://resource/xxx.video ',
    version: '>=undefined'
  },
  'video/poster': {
    description: '视频封面图的url，支持jpg、png等图片，如https://***.jpg。如果不传的话，默认取视频的首帧图作为封面图。',
    version: '>=undefined'
  },
  'video/objectFit': {
    description: '当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充。',
    version: '>=undefined'
  },
  'video/initial-time': {
    description: '指定视频初始播放位置，单位s',
    version: '>=undefined'
  },
  'video/duration': {
    description: '指定视频时长，单位s，默认读取视频本身市场信息',
    version: '>=undefined'
  },
  'video/controls': {
    description: '是否显示默认播放控件（底部工具条，包括播放/暂停按钮、播放进度、时间）',
    version: '>=undefined'
  },
  'video/autoplay': {
    description: '是否自动播放',
    version: '>=undefined'
  },
  'video/direction': {
    description:
      '设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）',
    version: '>=undefined'
  },
  'video/loop': {
    description: '是否循环播放',
    version: '>=undefined'
  },
  'video/muted': {
    description: '是否静音播放',
    version: '>=undefined'
  },
  'video/show-fullscreen-btn': {
    description: '是否显示全屏按钮',
    version: '>=undefined'
  },
  'video/show-play-btn': {
    description: '是否显示视频底部控制栏的播放按钮',
    version: '>=undefined'
  },
  'video/show-center-play-btn': {
    description: '是否显示视频中间的播放按钮',
    version: '>=undefined'
  },
  'video/enableProgressGesture': {
    description: '全屏模式下是否开启控制进度的手势',
    version: '>=undefined'
  },
  'video/mobilenetHintType': {
    description: '移动网络提醒样式：0-不提醒；1-tip提醒；2-阻塞提醒(无消耗流量大小)；3-阻塞提醒(有消耗流量大小)',
    version: '>=undefined'
  },
  'video/onPlay': {
    description: '当开始/继续播放时触发 play 事件',
    version: '>=undefined'
  },
  'video/onPause': {
    description: '当暂停播放时触发 pause 事件',
    version: '>=undefined'
  },
  'video/onEnded': {
    description: '当播放到末尾时触发 ended 事件',
    version: '>=undefined'
  },
  'video/onTimeUpdate': {
    description:
      "播放进度变化时触发，event.detail = {currentTime: '当前播放时间',userPlayDuration:'用户实际观看时长',videoDuration:'视频总时长'} ",
    version: '>=undefined'
  },
  'video/onLoading': {
    description: '视频出现缓冲时触发',
    version: '>=undefined'
  },
  'video/onError': {
    description: '视频播放出错时触发(errorCode 见下面错误码表)',
    version: '>=undefined'
  },
  'video/onFullScreenChange': {
    description:
      '视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal',
    version: '>=undefined'
  },
  'video/onTap': {
    description: '点击视频 view 时触发，event.detail = {ptInView:{x:0,y:0}}',
    version: '>=undefined'
  },
  'video/onUserAction': {
    description:
      '用户操作事件，event.detail = {tag:"mute", value:0}，tag为用户操作的元素，目前支持的 tag 有：play(底部播放按钮)、centerplay(中心播放按钮)、mute(静音按钮)、fullscreen(全屏按钮)、retry(重试按钮)、mobilenetplay(网络提醒的播放按钮)',
    version: '>=undefined'
  }
};

export const canvas = {
  'canvas/id': {
    description: '组件唯一标识符'
  },
  'canvas/style': {
    description: '-'
  },
  'canvas/class': {
    description: '-'
  },
  'canvas/width': {
    description: '-'
  },
  'canvas/height': {
    description: '-'
  },
  'canvas/disable-scroll': {
    description: '禁止屏幕滚动以及下拉刷新'
  },
  'canvas/onTap': {
    description: '点击'
  },
  'canvas/onTouchStart': {
    description: '触摸动作开始'
  },
  'canvas/onTouchMove': {
    description: '触摸后移动'
  },
  'canvas/onTouchEnd': {
    description: '触摸动作结束'
  },
  'canvas/onTouchCancel': {
    description: '触摸动作被打断，如来电提醒，弹窗'
  },
  'canvas/onLongTap': {
    description: '长按 500ms 之后触发，触发了长按事件后进行移动将不会触发屏幕的滚动'
  }
};

export const map = {
  'map/属性': {
    description: '说明',
    version: '>=支付宝客户端支持版本'
  },
  'map/style': {
    description: '内联样式'
  },
  'map/class': {
    description: '样式名'
  },
  'map/​latitude': {
    description: '中心纬度',
    version: '>=​10.1.32'
  },
  'map/longitude': {
    description: '中心经度',
    version: '>=10.1.32'
  },
  'map/scale': {
    description: '缩放级别，取值范围为 5-18',
    version: '>=10.1.32'
  },
  'map/markers': {
    description: '覆盖物，在地图上的一个点绘制图标',
    version: '>=10.1.32'
  },
  'map/polyline': {
    description: '覆盖物，多个连贯点的集合（路线）',
    version: '>=10.1.32'
  },
  'map/circles': {
    description: '覆盖物，圆',
    version: '>=10.1.32'
  },
  'map/controls': {
    description: '在地图View之上的一个控件',
    version: '>=10.1.32'
  },
  'map/polygon': {
    description: '覆盖物，多边形',
    version: '>=10.1.32'
  },
  'map/show-location': {
    description: '是否显示带有方向的当前定位点',
    version: '>=10.1.32'
  },
  'map/include-points': {
    description: '视野将进行小范围延伸包含传入的坐标\n[{\n    latitude: 30.279383,\n    longitude: 120.131441,\n}]\n',
    version: '>=10.1.32'
  },
  'map/include-padding': {
    description: '视野在地图padding范围内展示\n{\n    left:0, right:0,\n    top:0, bottom:0\n}\n',
    version: '>=10.1.35'
  },
  'map/ground-overlays': {
    description:
      "覆盖物，自定义贴图\n[{\n    // 右上，左下\n    'include-points':[{\n        latitude: 39.935029,\n        longitude: 116.384377,\n    },{\n        latitude: 39.939577,\n        longitude: 116.388331,\n    }],\n    image:'/image/overlay.png',\n    alpha:0.25,\n    zIndex:1\n}]\n",
    version: '>=10.1.35'
  },
  'map/tile-overlay': {
    description:
      "覆盖物，网格贴图\n{\n    url:'http://xxx',\n    type:0, // url类型\n    tileWidth:256,\n    tileHeight:256,\n    zIndex:1,\n}\n",
    version: '>=10.1.35'
  },
  'map/setting': {
    description:
      '设置\n{\n\t// 手势\n\tgestureEnable: 1,\n\t// 比例尺\n\tshowScale: 1,\n\t// 指南针\n\tshowCompass: 1,\n\t//双手下滑\n\ttiltGesturesEnabled: 1,\n\t// 交通路况展示\n\ttrafficEnabled: 0,\n\t// 地图 POI 信息\n\tshowMapText: 0,\n\t// 高德地图 logo 位置\n\tlogoPosition: {\n\t\tcenterX: 150,\n\t\tcenterY: 90\n\t}\n}\n'
  },
  'map/onMarkerTap': {
    description: '点击Marker时触发\n{\n    markerId,\n    latitude,\n    longitude, \n}\n',
    version: '>=10.1.32'
  },
  'map/onCalloutTap': {
    description: '点击Marker对应的callout时触发\n{\n    markerId,\n    latitude,\n    longitude, \n}\n',
    version: '>=10.1.32'
  },
  'map/onControlTap': {
    description: '点击control时触发\n{\n    controlId\n}\n',
    version: '>=10.1.32'
  },
  'map/onRegionChange': {
    description: '视野发生变化时触发\n{\n    type: "begin/end", \n    latitude,\n    longitude, \n    scale\n}\n',
    version: '>=10.1.32'
  },
  'map/onTap': {
    description: '点击地图时触发\n{\n    latitude,\n    longitude, \n}\n',
    version: '>=10.1.32'
  },
  'map/optimize': {
    description:
      '开启optimize模式后，无需再监听onRegionChange来获取并设置新的scale值以保证地图不会再回到原来的缩放比例。若开发者需要再回到初始缩放比例，可以通过this.setData({scale: {_v: scale}})来实现。optimize模式下此写法支持longitude、latitude、sacle、show-location4个属性。',
    version: '>=1.18.5'
  }
};

export const webView = {
  'web-view/src': {
    description:
      'web-view 要渲染的 H5 网页 URL ，需要在如下路径中 支付宝小程序管理中心 > 设置 > 开发设置 >H5域名配置 进行 H5 域名白名单配置'
  },
  'web-view/onMessage': { description: '网页向小程序 postMessage 消息。e.detail = { data }' }
};

export const contactButton = {
  'contact-button/tnt-inst-id': {
    description: '必填。企业唯一编码，一个企业支付宝账号对应一个编码。'
  },
  'contact-button/scene': {
    description: '必填。聊天窗编码，每个聊天窗的唯一编码'
  },
  'contact-button/size': {
    description: '选填。咨询按钮大小，正方形设置边长（如25*25 px）'
  },
  'contact-button/color': {
    description: '选填。咨询按钮颜色，默认白底蓝色',
    version: '1.9.0'
  },
  'contact-button/icon': {
    description: '选填。咨询按钮头像',
    version: '1.9.0'
  },
  'contact-button/alipay-card-no': {
    description:
      '选填。支付宝访客用户ID（2088开头）,客服回答问题时，如客户已离开咨询窗口，则通过推送消息到支付宝 card 中提醒客户。'
  }
};

/**
 * todo: 只对支持 WAI-ARIA 的组件提示
 *  view
    text
    icon
    button
    label
    checkbox
    switch
    image
    radio
 */
export const ariaComponent = {
  role: {
    description: 'aria 属性的核心是 role 属性，该属性表示组件的语义角色。'
  },
  'aria-label': {
    description: 'aria-label 可以代替组件内的文本内容'
  },
  'aria-labelledby': {
    description: '一些组件和其他组件是有关联的，需要一起朗读才能表达出完整的含义。'
  },
  'aria-checked': {
    description:
      'aria-checked 表示 checkbox、switch 等组件是否被选中。聚焦到这些组件后，读屏软件将朗读组件的选中状态 未选中 或者 已选中 ，告诉用户当前组件的选中状态。'
  },
  'aria-expanded': {
    description:
      'aria-expanded 表示可折叠的组件的展开信息，适合对有折叠功能的组件使用，如折叠菜单、带折叠的下拉菜单等。使用 aria-expanded 属性，可让读屏软件朗读组件的展开状态。'
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
  ...navigator,
  ...image,
  ...video,
  ...canvas,
  ...map,
  ...webView,
  ...contactButton,
  ...ariaComponent
};
