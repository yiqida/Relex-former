export default {
  __config__: {
    def: () => import('./test-comp.vue'),
    label: '测试组件',
    tag: 'test-comp',
    action: [],
  },
  domProps: {
    innerHTML: '测试组件'
  },
  edit: []
};
