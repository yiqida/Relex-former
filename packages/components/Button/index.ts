export default {
  __config__: {
    def: () => import('./el-button.vue'),
    label: '按钮',
    tag: 'el-button',
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
