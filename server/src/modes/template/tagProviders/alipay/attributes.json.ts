export default {
  'disable-scroll': {
    description:
      '是否阻止区域内滚动页面 说明：如果 view 中嵌套 view，外层 view 设置 disable-scroll 为 true 时将阻止内部的滚动属性。',
    type: 'boolean',
    default: true,
    options: [true, false]
  },
  'hover-class': {
    type: 'string',
    description: '触摸时添加的样式类'
  },
  'hover-start-time': {
    type: 'number',
    description: '按住多久后出现点击状态，单位毫秒'
  },
  'hover-stay-time': {
    type: 'number',
    description: '松开后点击状态保留时间，单位毫秒'
  },
  hidden: {
    description: '松开后点击状态保留时间，单位毫秒',
    type: 'boolean',
    default: true,
    options: [true, false]
  },
  autoplay: {
    description: '是否自动切换',
    type: 'boolean',
    default: true,
    options: [true, false]
  },
  'indicator-dots': {
    description: '是否显示指示点',
    type: 'boolean',
    default: true,
    options: [true, false]
  }
};
