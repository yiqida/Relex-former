import { defineAsyncComponent } from 'vue';
export default {
  __config__: {
    def: defineAsyncComponent(() => import('./el-button.vue')),
    label: '按钮',
    tag: 'el-button',
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
