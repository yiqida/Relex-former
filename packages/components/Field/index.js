import comps from './index.vue';
import { ruleArr } from '../utils/ruleSchema.js';
import { deepClone } from '../utils/utils.js';
import {
  styleEdit,
  config,
  baseEdit,
  props,
  attrEdit,
} from '../baseConfig';

export default {
  // 组件的自定义配置
  __config__: {
    def: comps,
    label: '输入框',
    labelWidth: null,
    tag: 'field',
    tagIcon: 'edit',
    defaultValue: '',
    layout: 'colFormItem',
    span: 24,
    // 正则校验规则
    regList: [],
    ...config,
    rules: deepClone(ruleArr),
  },
  // 其余的为可直接写在组件标签上的属性
  placeholder: '请输入',
  clearable: true,
  'prefix-icon': '',
  'suffix-icon': '',
  maxlength: null,
  'show-word-limit': false,
  'show-password': false,
  ...props,
  type: 'text',
  __vModel__: '',
  required: false,
  edit: [
    ...baseEdit,
    {
      label: 'type类型',
      type: 'edSelect',
      model: 'type',
      options: [
        {
          label: 'text',
          value: 'text'
        },
        {
          label: 'textarea',
          value: 'textarea'
        },
        {
          label: 'tel',
          value: 'tel'
        },
        {
          label: 'digit',
          value: 'digit'
        },
        {
          label: 'number',
          value: 'number'
        },
        {
          label: 'password',
          value: 'password'
        }
      ]
    },
    {
      label: '字段名',
      type: 'edString',
      explain: '提交表单时,提交的json对象中<br/>该组件对应的字段名称',
      model: '__vModel__'
    },
    {
      label: '占位提示',
      type: 'edString',
      model: 'placeholder'
    },
    {
      type: 'divider',
      name: '统计字符数'
    },
    {
      label: '显示统计',
      type: 'edBoolean',
      model: 'show-word-limit'
    },
    {
      label: '最多字符数',
      type: 'edString',
      model: 'maxlength'
    },
    {
      type: 'divider',
      name: '属性'
    },
    ...attrEdit,
    ...styleEdit,
    {
      label: '前图标',
      type: 'edString',
      model: 'prefix-icon'
    },
    {
      label: '后图标',
      type: 'edString',
      model: 'suffix-icon'
    },
    {
      type: 'divider',
      name: '校验'
    },
    {
      type: 'edRule',
      model: '__config__.rules'
    }
  ]
};
