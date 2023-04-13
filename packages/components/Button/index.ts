
import comps from './el-button.vue';

export default {
  __config__: {
    def: comps,
    label: '按钮',
    tag: 'ecy-button',
    tagIcon: 'click-tap',
    grid: false, // 不需要栅格
    action: [],
  },
  domProps: {
    innerHTML: '按钮'
  },
  type: 'main',
  size: 'small',
  style: { marginLeft: '10px', marginTop: '0px', marginBottom: '10px' },
  edit: []
};