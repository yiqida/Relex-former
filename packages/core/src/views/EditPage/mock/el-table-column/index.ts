// 默认文本json
export const tableColumnContent = {
  __config__: {
    tag: 'el-table-column',
    type: 'content',
    headTip: '',
    contentTipKey: ''
  },
  prop: '',
  label: '',
  width: '',
  fixed: '',
  align: '',
  overflowTooltip: false,
  sortable: false
};

export const tableColumnImg = {
  __config__: {
    tag: 'el-table-column',
    srcSource: 'image',
    type: 'img',
    headTip: '',
    contentTipKey: ''
  },
  label: '',
  width: '',
  fixed: '',
  align: ''
};

export const tableColumnImg2 = [
  {
    comp: 'edString', // 告诉component应该渲染什么，传递给Editor组件的
    desc: {
      type: 'edString',
      model: '__config__.headTip',
      label: '表头tip'
    }
  },
  {
    comp: 'edString', // 告诉component应该渲染什么，传递给Editor组件的
    desc: {
      type: 'edString',
      model: '__config__.headTip',
      label: '表头tip'
    }
  }
]  

export const tableColumnButton = {
  __config__: {
    tag: 'el-table-column',
    srcSource: 'image',
    type: 'button',
    children: [
      // {
      //   ...button,
      //   size: 'mini'
      // },
      // {
      //   ...dropdown
      // }
    ],
    headTip: '',
    contentTipKey: ''
  },
  label: '',
  width: '',
  fixed: '',
  align: ''
};

export const tableColumnStatus = {
  __config__: {
    tag: 'el-table-column',
    srcSource: 'status',
    type: 'status',
    options: [
      {
        label: 'primary',
        type: 'primary',
        value: 'primary'
      },
      {
        label: 'info',
        type: 'info',
        value: 'info'
      },
      {
        label: 'success',
        type: 'success',
        value: 'success'
      },
      {
        label: 'warning',
        type: 'warning',
        value: 'warning'
      }
    ],
    headTip: '',
    contentTipKey: ''
  },
  label: '',
  width: '',
  fixed: '',
  align: ''
};

export const tableColumnAlabel = {
  __config__: {
    tag: 'el-table-column',
    srcSource: 'aLabel',
    type: 'aLabel',
    target: '',
    content: '下载',
    headTip: '',
    contentTipKey: ''
  },
  label: '',
  width: '',
  fixed: '',
  align: ''
};
export const tableColumnSolt = {
  __config__: {
    tag: 'el-table-column',
    slotCode: {
      htmlCode: '<!-- 可以用{{row.???}}取当前行的字段 -->\n<div>{{row.id}}</div>',
      jsCode: '// 插槽自定义代码',
      cssCode: '',
      jsonCode: ''
    },
    type: 'slotCode',
    headTip: '',
    contentTipKey: ''
  },
  label: '',
  width: '',
  fixed: '',
  align: '',
  overflowTooltip: false
};
export const tableColumnSwitch = {
  __config__: {
    tag: 'el-table-column',
    srcSource: '',
    type: 'switch',
    headTip: '',
    contentTipKey: '',
    prefixText: false,
    textOnTrue: '',
    textOnFalse: ''
  },
  prop: '',
  label: '',
  action: []
};
export const tableColumnSelect = {
  __config__: {
    tag: 'el-table-column',
    srcSource: '',
    type: 'selection',
    headTip: '',
    contentTipKey: ''
  },
  prop: '',
  label: '',
  action: []
};
