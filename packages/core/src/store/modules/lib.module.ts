import type { Module } from 'vuex';
import type { State } from '../state'
import type { PlainObj } from '@/types/common';
import type { EditItem, ActiveData } from '@/types/schema'

import {
  tableColumnContent,
  tableColumnImg,
  tableColumnButton,
  tableColumnStatus,
  tableColumnAlabel,
  tableColumnSolt,
  tableColumnSwitch,
  tableColumnSelect
} from '@/views/EditPage/mock/el-table-column';

type Tag = string

interface LibState extends PlainObj {
  libEdit: {
    [props: Tag]: EditItem[]
  }
}

const libModule: Module<LibState, State> = {
  state: {
    libEdit: {
      'el-demo-block': [
            {
                "type":"divider",
                "name":"基础信息"
            },
            {
                "label":"是否显示",
                "type":"edString",
                "model":"__config__.visibleOn"
            },
            {
                "label":"标题",
                "type":"edString",
                "model":"title"
            },
      ],
      'el-demo-table': [
        // {
        //   type: 'edString',
        //   model: '__vModel__',
        //   label: '字段名',
        //   explain: '提交表单时,提交的json对象中<br/>该组件对应的字段名称'
        // },
        {
          label: '列信息',
          type: 'edArray',
          model: '__config__.children',
          showLabel: 'label', // 折叠面板的标题应取 Array.editor 的 value[index] === this.__config__.children 中的哪个字段
          valueType: { // edArray中全部编辑成员组
            label: '类型', // 没啥用
            options: [
              { label: '文本', value: '0', default: tableColumnContent },
              { label: '按钮', value: '1', default: tableColumnButton },
              { label: '图片', value: '2', default: tableColumnImg },
              { label: '状态', value: '3', default: tableColumnStatus },
              { label: '超链接', value: '4', default: tableColumnAlabel },
              { label: '自定义代码', value: '5', default: tableColumnSolt },
              { label: '开关', value: '6', default: tableColumnSwitch },
              { label: '选择框', value: '7', default: tableColumnSelect }
            ]
          },
          item: {
            type: 'edObject', // 数组成员是什么组件承载的，也有可能支持edString
            props: { // edObject中所有编辑项目类型
              label: {
                type: 'edString',
                label: '列名信息'
              },
              prop: {
                visibleOn: 'this.__config__.type === "content"',
                type: 'edString',
                label: 'key信息'
              },
              srcSource: {
                visibleOn: 'this.__config__.type === "img"',
                type: 'edString',
                label: 'key信息',
                model: '__config__.srcSource'
              },
              status: {
                visibleOn: 'this.__config__.type === "status"',
                type: 'edString',
                label: 'key信息',
                model: '__config__.srcSource'
              },
              // options: {
              //   visibleOn: 'this.__config__.type === "status"',
              //   type: 'edStatus',
              //   label: 'options状态',
              //   model: '__config__.options'
              // },
              aLabel: {
                visibleOn: 'this.__config__.type === "aLabel"',
                type: 'edString',
                label: 'key信息',
                model: '__config__.srcSource'
              },
              target: {
                visibleOn: 'this.__config__.type === "aLabel"',
                type: 'edString',
                label: 'target',
                model: '__config__.target'
              },
              content: {
                visibleOn: 'this.__config__.type === "aLabel"',
                type: 'edString',
                label: '文案',
                model: '__config__.content'
              },
              // slotCode: {
              //   visibleOn: 'this.__config__.type === "slotCode"',
              //   type: 'edCodeIcon',
              //   label: '代码编辑',
              //   defaultName: 'html,javascript',
              //   explain:
              //     '表格中的某一列,若不是根据接口返回字段直接展示,而是需要逻辑处理,样式处理等,可使用插槽。插槽代码编辑同Vue',
              //   model: '__config__.slotCode'
              // },
              switch: {
                visibleOn: 'this.__config__.type === "switch"',
                type: 'edString',
                label: 'key信息',
                model: '__config__.srcSource'
              },
              // action: {
              //   type: 'edAction',
              //   model: 'action',
              //   visibleOn: 'this.__config__.type === "switch"'
              // },
              buttons: {
                visibleOn: 'this.__config__.type === "button"',
                label: '按钮',
                type: 'edArray',
                showLabel: 'domProps.innerHTML',
                model: '__config__.children',
                item: {
                  type: 'edObject',
                  props: {
                    label: {
                      type: 'edString',
                      label: '',
                      model: 'domProps.innerHTML'
                    },
                    // type: {
                    //   visibleOn: 'this.__config__.type !== "dropdown"',
                    //   label: '',
                    //   type: 'edSelect',
                    //   model: 'type',
                    //   multiple: false,
                    //   options: [
                    //     {
                    //       label: 'main',
                    //       value: 'main'
                    //     },
                    //     {
                    //       label: 'secondary',
                    //       value: 'secondary'
                    //     },
                    //     {
                    //       label: 'tertiary',
                    //       value: 'tertiary'
                    //     }
                    //   ]
                    // }
                  }
                }
              },
              width: {
                type: 'edString',
                label: '宽度',
                explain: '该列在表格中的宽度'
              },
              fixed: {
                type: 'edString',
                label: '固定列'
              },
              align: {
                type: 'edString',
                label: '对齐方式',
                explain: '表格列的对齐方式<br/>center(居中)<br/>left(diyi左对齐)<br/>right(右对齐)'
              },
              // sortable: {
              //   type: 'edSwitch',
              //   label: '支持排序',
              //   explain: '表格列是否支持排序',
              //   visibleOn: 'this.__config__.type === "content"'
              // },
              // overflowTooltip: {
              //   type: 'edSwitch',
              //   label: '显示溢出文本',
              //   explain: '当文字超长时显示省略号,鼠标悬停时显示全部文字',
              //   visibleOn: 'this.__config__.type === "content" || this.__config__.type === "slotCode"'
              // },
              headTip: {
                type: 'edString',
                label: '表头tip',
                model: '__config__.headTip'
              },
              contentTipKey: {
                type: 'edString',
                label: '表格tip的key',
                explain: '表格列tooltip提示',
                model: '__config__.contentTipKey',
                visibleOn: 'this.__config__.type === "content" || this.__config__.type === "button"'
              },
              // prefixText: {
              //   type: 'edSwitch',
              //   label: '开启前缀文本',
              //   explain: '是否开启前缀文本提示',
              //   model: '__config__.prefixText',
              //   visibleOn: 'this.__config__.type === "switch"'
              // },
              textOnTrue: {
                type: 'edString',
                label: 'textOnTrue',
                model: '__config__.textOnTrue',
                visibleOn: 'this.__config__.type === "switch" && __config__.prefixText===true'
              },
              textOnFalse: {
                type: 'edString',
                label: 'textOnFalse',
                model: '__config__.textOnFalse',
                visibleOn: 'this.__config__.type === "switch" && __config__.prefixText===true'
              }
            }
          }
        },
        // {
        //   label: '分页',
        //   type: 'edBoolean',
        //   model: 'isPagination'
        // },
        // {
        //   label: '多级表头',
        //   type: 'edBoolean',
        //   model: '__config__.enableTabHeader'
        // },
        // {
        //   type: 'edCodeIcon',
        //   label: '表头json',
        //   model: '__config__.tableSlotCode',
        //   defaultName: 'json',
        //   visibleOn: 'this.__config__.enableTabHeader === true'
        // },
        // {
        //   type: 'divider',
        //   name: 'api请求信息'
        // },
        // {
        //   label: '数据来源',
        //   type: 'edSelect',
        //   model: '__config__.dataType',
        //   options: [
        //     {
        //       label: '远程数据',
        //       value: 'dynamic'
        //     },
        //     {
        //       label: '数据源数据',
        //       value: 'localDynamic'
        //     }
        //   ]
        // },
        // {
        //   type: 'edString',
        //   model: '__config__.pageIndexKey',
        //   label: '当前页key',
        //   visibleOn: 'this.__config__.dataType == "dynamic"'
        // },
        // {
        //   type: 'edString',
        //   model: '__config__.pageSizeKey',
        //   label: '页数key',
        //   visibleOn: 'this.__config__.dataType == "dynamic"'
        // },
        // {
        //   type: 'divider',
        //   name: '高级配置',
        //   visibleOn: 'this.__config__.dataType == "dynamic"'
        // },
        // {
        //   type: 'edString',
        //   model: '__config__.isInterval',
        //   label: '重复请求',
        //   visibleOn: 'this.__config__.dataType == "dynamic"'
        // },
        // {
        //   type: 'edNumber',
        //   model: '__config__.intervalTimer',
        //   label: '重复间隔时间',
        //   visibleOn: 'this.__config__.dataType == "dynamic" && this.__config__.isInterval'
        // },
        // {
        //   type: 'divider',
        //   name: 'api返回信息'
        // },
        // {
        //   type: 'edString',
        //   model: '__config__.dataListInfo',
        //   explain:
        //     '接口返回数据中,表格数组所对应的字段名称<br/>如: data:{ list: [表格对应数据] }<br/>则填写data.list',
        //   label: 'dataList'
        // },
        // {
        //   type: 'edString',
        //   model: '__config__.totalInfo',
        //   explain:
        //     '接口返回数据中,表格数据总条数所对应的字段名称<br/>如: data:{ list: [表格对应数据] total: 178 }<br/>则填写data.total',
        //   label: 'total'
        // }
      ],
    }
  },
  getters: {
    getComDef: (state) => (com: ActiveData) => {
      if (state.libEdit[com.__config__.tag]) {
        return state.libEdit[com.__config__.tag];
      }
    },
  }
}

export default libModule
