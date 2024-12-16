import index from './index.vue';

export default {
  __config__: {
    def: index,
    span: 24,
    layout: 'elForm',
    tag: 'el-form',
    tagIcon: 'form',
    label: '表单容器',
    draggGroup: 'formGroup',
    needBorder: true, // 需要border
    children: [],
    visibleOn: '',
    tip: ''
  },
  formRef: 'elForm',
  formModel: {},
  rules: {},
  size: 'medium',
  labelPosition: 'right',
  labelWidth: 100,
  disabledExpress: '',
  edit: [
    {
      type: 'divider',
      name: '基础信息'
    },
    {
      label: '是否显示',
      type: 'edString',
      model: '__config__.visibleOn'
    },
    {
      type: 'edString',
      label: '表单名',
      model: 'formRef'
    },
    {
      type: 'divider',
      name: '样式信息'
    },
    {
      label: '表格栅格',
      type: 'edSlider',
      model: '__config__.span',
      options: {
        max: 24,
        min: 1,
        marks: { 12: '' }
      }
    },
    {
      type: 'edSelect',
      label: '标签对齐',
      model: 'labelPosition',
      options: [
        {
          label: '右对齐',
          value: 'right'
        },
        {
          label: '左对齐',
          value: 'left'
        },
        {
          label: '顶部对齐',
          value: 'top'
        }
      ]
    },
    {
      type: 'edNumber',
      label: '标签宽度',
      model: 'labelWidth'
    },
    {
      type: 'divider',
      name: '属性信息'
    },
    {
      type: 'edString',
      label: '禁用表单',
      model: 'disabledExpress',
      placeholder: "Route.type === 'look'",
      explain: `
            Route或者表单名.关联组件的字段名 === 值<br/>
            例如Route.type === 'look'`
    }
  ]
};
