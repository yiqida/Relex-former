// import {
//   tableColumnContent,
//   tableColumnImg,
//   tableColumnButton,
//   tableColumnStatus,
//   tableColumnAlabel,
//   tableColumnSolt,
//   tableColumnSwitch,
//   tableColumnSelect
// } from '../el-table-column/index';

// const tableChild = [
//   {
//     __config__: {
//       tag: 'el-table-column',
//       type: 'content'
//     },
//     prop: 'id',
//     label: 'ID',
//     slotCode: '',
//     width: '',
//     fixed: '',
//     align: '',
//     sortable: false,
//     overflowTooltip: false
//   },
//   {
//     __config__: {
//       tag: 'el-table-column',
//       type: 'content'
//     },
//     prop: 'title',
//     label: '活动名称',
//     width: '',
//     fixed: '',
//     align: '',
//     sortable: false,
//     overflowTooltip: false
//   },
//   {
//     __config__: {
//       tag: 'el-table-column',
//       srcSource: 'aLabel',
//       type: 'aLabel',
//       target: '',
//       content: '下载'
//     },
//     label: 'a链接',
//     width: '',
//     fixed: '',
//     align: ''
//   },
//   {
//     __config__: {
//       tag: 'el-table-column',
//       type: 'content'
//     },
//     prop: 'create_time',
//     label: '开始时间',
//     width: '',
//     fixed: '',
//     align: '',
//     sortable: false,
//     overflowTooltip: false
//   },
//   {
//     __config__: {
//       tag: 'el-table-column',
//       type: 'content'
//     },
//     prop: 'end_time',
//     label: '结束时间',
//     width: '',
//     fixed: '',
//     align: '',
//     sortable: false,
//     overflowTooltip: false
//   },
//   {
//     __config__: {
//       srcSource: 'image',
//       tag: 'el-table-column',
//       type: 'img'
//     },
//     label: '图片',
//     width: '',
//     fixed: '',
//     align: ''
//   },
//   {
//     __config__: {
//       srcSource: 'status',
//       tag: 'el-table-column',
//       type: 'status',
//       options: [
//         {
//           label: 'primary',
//           type: 'primary',
//           value: 'primary'
//         },
//         {
//           label: 'info',
//           type: 'primary',
//           value: 'info'
//         },
//         {
//           label: 'success',
//           type: 'primary',
//           value: 'success'
//         },
//         {
//           label: 'warning',
//           type: 'primary',
//           value: 'warning'
//         }
//       ]
//     },
//     label: '状态',
//     width: '',
//     fixed: '',
//     align: ''
//   },
//   {
//     __config__: {
//       srcSource: '',
//       tag: 'el-table-column',
//       type: 'switch'
//     },
//     prop: 'switch',
//     label: '开关',
//     action: []
//   },
//   {
//     __config__: {
//       tag: 'el-table-column',
//       type: 'button',
//       children: [
//         {
//           __config__: {
//             label: '按钮',
//             tag: 'el-button',
//             tagIcon: 'click-tap',
//             grid: false, // 不需要栅格
//             layout: 'raw',
//             action: []
//           },
//           __slot__: {
//             default: '查看'
//           },
//           style: { marginLeft: '10px' },
//           domProps: {
//             innerHTML: '查看'
//           },
//           type: 'main',
//           size: 'mini'
//         },
//         {
//           __config__: {
//             label: '按钮',
//             tag: 'el-button',
//             tagIcon: 'click-tap',
//             grid: false, // 不需要栅格
//             layout: 'raw',
//             action: []
//           },
//           __slot__: {
//             default: '编辑'
//           },
//           domProps: {
//             innerHTML: '编辑'
//           },
//           style: { marginLeft: '10px' },
//           type: 'secondary',
//           size: 'mini'
//         },
//         {
//           __config__: {
//             label: '按钮',
//             tag: 'el-button',
//             tagIcon: 'click-tap',
//             grid: false, // 不需要栅格
//             layout: 'raw',
//             action: []
//           },
//           __slot__: {
//             default: '删除'
//           },
//           domProps: {
//             innerHTML: '删除'
//           },
//           style: { marginLeft: '10px' },
//           type: 'tertiary',
//           size: 'mini'
//         },
//         {
//           __config__: {
//             rootData: true,
//             tag: 'el-dropdown',
//             tagIcon: 'drop-down-list',
//             label: '下拉菜单',
//             grid: false, // 不需要栅格
//             children: menuChild,
//             defaultValue: [],
//             type: 'dropdown'
//           },
//           __slot__: {
//             default: '更多'
//           },
//           domProps: {
//             innerHTML: '更多'
//           },
//           style: { marginLeft: '10px' },
//           name: '更多',
//           trigger: ''
//         }
//       ]
//     },
//     label: '操作',
//     width: '',
//     fixed: '',
//     align: ''
//   }
// ];

// export default {
//   __config__: {
//     def: comps,
//     rootData: true,
//     label: '表格',
//     defaultValue: [],
//     layout: 'colTableItem',
//     tagIcon: 'table-file',
//     tag: 'el-table',
//     tableSlotCode: {
//       htmlCode: '',
//       cssCode: '',
//       jsonCode: `[{"label":"ID","tabChild":[0]},{"label":"活动名称","tabChild":[1]},{"label":"a链接","tabChild":[2]},{"label":"预收销售","child":[{"label":"预收业务","tabChild":[3,4]},{"label":"物流/送装","tabChild":[5,6,7]}]},{"label":"操作","tabChild":[8]}]`,
//       jsCode:
//         '// data是选择的数据, formRef是整个页面的form表单\nfunction dataPipe(data, formRef) {\n\treturn [{label:"", value:""}];\n}\n'
//     },
//     enableTabHeader: false,
//     dataType: 'dynamic',
//     pageIndexKey: 'page_index',
//     pageSizeKey: 'page_size',
//     children: tableChild,
//     visibleOn: '',
//     tip: '',
//     ...dynamicOptionsConfig,
//     url: '/v1/appointment/list',
//     params: [
//       { label: 'page_index', value: '1' },
//       { label: 'page_size', value: '10' }
//     ],
//     dataListInfo: 'data.list',
//     totalInfo: 'data.total',
//     ...localDynamicOptionsConfig,
//     ...apiHighConfig,
//     paramCode: {
//       htmlCode: '',
//       cssCode: '',
//       jsCode:
//         '// data是配置的参数对象集合,需return一个对象,作为结果\nfunction dataPipe(data) {\n\treturn data;\n}\n'
//     },
//     optionSlotCode: {
//       htmlCode: '',
//       cssCode: '',
//       jsCode: '// res是接口返回的数据\nfunction dataPipe(res) {\n\treturn res;\n}\n'
//     },
//     isInterval: '',
//     intervalTimer: 1000
//   },
//   data: [],
//   total: 0,
//   isPagination: true,
//   currentPage: 1,
//   edit: [
//     ...newBaseEdit,
//     {
//       type: 'edString',
//       model: '__vModel__',
//       label: '字段名',
//       explain: '提交表单时,提交的json对象中<br/>该组件对应的字段名称'
//     },
//     {
//       label: '列信息',
//       type: 'edArray',
//       model: '__config__.children',
//       showLabel: 'label', // 折叠面板的标题应取 Array.editor 的 value[index] === this.__config__.children 中的哪个字段
//       valueType: { // edArray中全部编辑成员组
//         label: '类型', // 没啥用
//         options: [
//           { label: '文本', value: '0', default: tableColumnContent },
//           { label: '按钮', value: '1', default: tableColumnButton },
//           { label: '图片', value: '2', default: tableColumnImg },
//           { label: '状态', value: '3', default: tableColumnStatus },
//           { label: '超链接', value: '4', default: tableColumnAlabel },
//           { label: '自定义代码', value: '5', default: tableColumnSolt },
//           { label: '开关', value: '6', default: tableColumnSwitch },
//           { label: '选择框', value: '7', default: tableColumnSelect }
//         ]
//       },
//       item: {
//         type: 'edObject', // 数组成员是什么组件承载的，也有可能支持edString
//         props: { // edObject中所有编辑项目类型
//           label: {
//             type: 'edString',
//             label: '列名信息'
//           },
//           prop: {
//             visibleOn: 'this.__config__.type === "content"',
//             type: 'edString',
//             label: 'key信息'
//           },
//           srcSource: {
//             visibleOn: 'this.__config__.type === "img"',
//             type: 'edString',
//             label: 'key信息',
//             model: '__config__.srcSource'
//           },
//           status: {
//             visibleOn: 'this.__config__.type === "status"',
//             type: 'edString',
//             label: 'key信息',
//             model: '__config__.srcSource'
//           },
//           options: {
//             visibleOn: 'this.__config__.type === "status"',
//             type: 'edStatus',
//             label: 'options状态',
//             model: '__config__.options'
//           },
//           aLabel: {
//             visibleOn: 'this.__config__.type === "aLabel"',
//             type: 'edString',
//             label: 'key信息',
//             model: '__config__.srcSource'
//           },
//           target: {
//             visibleOn: 'this.__config__.type === "aLabel"',
//             type: 'edString',
//             label: 'target',
//             model: '__config__.target'
//           },
//           content: {
//             visibleOn: 'this.__config__.type === "aLabel"',
//             type: 'edString',
//             label: '文案',
//             model: '__config__.content'
//           },
//           slotCode: {
//             visibleOn: 'this.__config__.type === "slotCode"',
//             type: 'edCodeIcon',
//             label: '代码编辑',
//             defaultName: 'html,javascript',
//             explain:
//               '表格中的某一列,若不是根据接口返回字段直接展示,而是需要逻辑处理,样式处理等,可使用插槽。插槽代码编辑同Vue',
//             model: '__config__.slotCode'
//           },
//           switch: {
//             visibleOn: 'this.__config__.type === "switch"',
//             type: 'edString',
//             label: 'key信息',
//             model: '__config__.srcSource'
//           },
//           action: {
//             type: 'edAction',
//             model: 'action',
//             visibleOn: 'this.__config__.type === "switch"'
//           },
//           buttons: {
//             visibleOn: 'this.__config__.type === "button"',
//             label: '按钮',
//             type: 'edArray',
//             showLabel: 'domProps.innerHTML',
//             model: '__config__.children',
//             item: {
//               type: 'edObject',
//               props: {
//                 label: {
//                   type: 'edString',
//                   label: '',
//                   model: 'domProps.innerHTML'
//                 },
//                 type: {
//                   visibleOn: 'this.__config__.type !== "dropdown"',
//                   label: '',
//                   type: 'edSelect',
//                   model: 'type',
//                   multiple: false,
//                   options: [
//                     {
//                       label: 'main',
//                       value: 'main'
//                     },
//                     {
//                       label: 'secondary',
//                       value: 'secondary'
//                     },
//                     {
//                       label: 'tertiary',
//                       value: 'tertiary'
//                     }
//                   ]
//                 }
//               }
//             }
//           },
//           width: {
//             type: 'edString',
//             label: '宽度',
//             explain: '该列在表格中的宽度'
//           },
//           fixed: {
//             type: 'edString',
//             label: '固定列'
//           },
//           align: {
//             type: 'edString',
//             label: '对齐方式',
//             explain: '表格列的对齐方式<br/>center(居中)<br/>left(diyi左对齐)<br/>right(右对齐)'
//           },
//           sortable: {
//             type: 'edSwitch',
//             label: '支持排序',
//             explain: '表格列是否支持排序',
//             visibleOn: 'this.__config__.type === "content"'
//           },
//           overflowTooltip: {
//             type: 'edSwitch',
//             label: '显示溢出文本',
//             explain: '当文字超长时显示省略号,鼠标悬停时显示全部文字',
//             visibleOn: 'this.__config__.type === "content" || this.__config__.type === "slotCode"'
//           },
//           headTip: {
//             type: 'edString',
//             label: '表头tip',
//             model: '__config__.headTip'
//           },
//           contentTipKey: {
//             type: 'edString',
//             label: '表格tip的key',
//             explain: '表格列tooltip提示',
//             model: '__config__.contentTipKey',
//             visibleOn: 'this.__config__.type === "content" || this.__config__.type === "button"'
//           },
//           prefixText: {
//             type: 'edSwitch',
//             label: '开启前缀文本',
//             explain: '是否开启前缀文本提示',
//             model: '__config__.prefixText',
//             visibleOn: 'this.__config__.type === "switch"'
//           },
//           textOnTrue: {
//             type: 'edString',
//             label: 'textOnTrue',
//             model: '__config__.textOnTrue',
//             visibleOn: 'this.__config__.type === "switch" && __config__.prefixText===true'
//           },
//           textOnFalse: {
//             type: 'edString',
//             label: 'textOnFalse',
//             model: '__config__.textOnFalse',
//             visibleOn: 'this.__config__.type === "switch" && __config__.prefixText===true'
//           }
//         }
//       }
//     },
//     {
//       label: '分页',
//       type: 'edBoolean',
//       model: 'isPagination'
//     },
//     {
//       label: '多级表头',
//       type: 'edBoolean',
//       model: '__config__.enableTabHeader'
//     },
//     {
//       type: 'edCodeIcon',
//       label: '表头json',
//       model: '__config__.tableSlotCode',
//       defaultName: 'json',
//       visibleOn: 'this.__config__.enableTabHeader === true'
//     },
//     {
//       type: 'divider',
//       name: 'api请求信息'
//     },
//     {
//       label: '数据来源',
//       type: 'edSelect',
//       model: '__config__.dataType',
//       options: [
//         {
//           label: '远程数据',
//           value: 'dynamic'
//         },
//         {
//           label: '数据源数据',
//           value: 'localDynamic'
//         }
//       ]
//     },
//     ...newDynamicOptionsEdit,
//     ...newLocalDynamicOptionsEdit,
//     {
//       type: 'edString',
//       model: '__config__.pageIndexKey',
//       label: '当前页key',
//       visibleOn: 'this.__config__.dataType == "dynamic"'
//     },
//     {
//       type: 'edString',
//       model: '__config__.pageSizeKey',
//       label: '页数key',
//       visibleOn: 'this.__config__.dataType == "dynamic"'
//     },
//     {
//       type: 'divider',
//       name: '高级配置',
//       visibleOn: 'this.__config__.dataType == "dynamic"'
//     },
//     ...newApiHighEdit,
//     {
//       type: 'edString',
//       model: '__config__.isInterval',
//       label: '重复请求',
//       visibleOn: 'this.__config__.dataType == "dynamic"'
//     },
//     {
//       type: 'edNumber',
//       model: '__config__.intervalTimer',
//       label: '重复间隔时间',
//       visibleOn: 'this.__config__.dataType == "dynamic" && this.__config__.isInterval'
//     },
//     {
//       type: 'divider',
//       name: 'api返回信息'
//     },
//     {
//       type: 'edString',
//       model: '__config__.dataListInfo',
//       explain:
//         '接口返回数据中,表格数组所对应的字段名称<br/>如: data:{ list: [表格对应数据] }<br/>则填写data.list',
//       label: 'dataList'
//     },
//     {
//       type: 'edString',
//       model: '__config__.totalInfo',
//       explain:
//         '接口返回数据中,表格数据总条数所对应的字段名称<br/>如: data:{ list: [表格对应数据] total: 178 }<br/>则填写data.total',
//       label: 'total'
//     }
//   ]
// };

export const mockActivedTableConfig = {"__config__":{"rootData":true,"label":"表格","defaultValue":[],"layout":"colTableItem","tagIcon":"table-file","tag":"el-demo-table","tableSlotCode":{"htmlCode":"","cssCode":"","jsonCode":"[{\"label\":\"ID\",\"tabChild\":[0]},{\"label\":\"活动名称\",\"tabChild\":[1]},{\"label\":\"a链接\",\"tabChild\":[2]},{\"label\":\"预收销售\",\"child\":[{\"label\":\"预收业务\",\"tabChild\":[3,4]},{\"label\":\"物流/送装\",\"tabChild\":[5,6,7]}]},{\"label\":\"操作\",\"tabChild\":[8]}]","jsCode":"// data是选择的数据, formRef是整个页面的form表单\nfunction dataPipe(data, formRef) {\n\treturn [{label:\"\", value:\"\"}];\n}\n"},"enableTabHeader":false,"dataType":"dynamic","pageIndexKey":"page_index","pageSizeKey":"page_size","children":[{"__config__":{"tag":"el-table-column","type":"content","formId":102,"renderKey":"1021686536168062","componentName":"myVar102","headTip":"","contentTipKey":""},"prop":"id","label":"ID","slotCode":"","width":"","fixed":"","align":"","sortable":false,"overflowTooltip":false,"id":102},{"__config__":{"tag":"el-table-column","type":"content","formId":103,"renderKey":"1031686536168062","componentName":"myVar103","headTip":"","contentTipKey":""},"prop":"title","label":"活动名称","width":"","fixed":"","align":"","sortable":false,"overflowTooltip":false,"id":103},{"__config__":{"tag":"el-table-column","srcSource":"aLabel","type":"aLabel","target":"","content":"下载","formId":104,"renderKey":"1041686536168062","componentName":"myVar104","headTip":""},"label":"a链接","width":"","fixed":"","align":"","id":104},{"__config__":{"tag":"el-table-column","type":"content","formId":105,"renderKey":"1051686536168062","componentName":"myVar105","headTip":"","contentTipKey":""},"prop":"create_time","label":"开始时间","width":"","fixed":"","align":"","sortable":false,"overflowTooltip":false,"id":105},{"__config__":{"tag":"el-table-column","type":"content","formId":106,"renderKey":"1061686536168062","componentName":"myVar106","headTip":"","contentTipKey":""},"prop":"end_time","label":"结束时间","width":"","fixed":"","align":"","sortable":false,"overflowTooltip":false,"id":106},{"__config__":{"srcSource":"image","tag":"el-table-column","type":"img","formId":107,"renderKey":"1071686536168062","componentName":"myVar107","headTip":""},"label":"图片","width":"","fixed":"","align":"","id":107},{"__config__":{"srcSource":"status","tag":"el-table-column","type":"status","options":[{"label":"primary","type":"primary","value":"primary"},{"label":"info","type":"primary","value":"info"},{"label":"success","type":"primary","value":"success"},{"label":"warning","type":"primary","value":"warning"}],"formId":108,"renderKey":"1081686536168062","componentName":"myVar108","headTip":""},"label":"状态","width":"","fixed":"","align":"","id":108},{"__config__":{"srcSource":"","tag":"el-table-column","type":"switch","formId":109,"renderKey":"1091686536168062","componentName":"myVar109","headTip":"","prefixText":""},"prop":"switch","label":"开关","action":[],"id":109,"width":"","fixed":"","align":""},{"__config__":{"tag":"el-table-column","type":"button","children":[{"__config__":{"label":"按钮","tag":"el-button","tagIcon":"click-tap","grid":false,"layout":"raw","action":[],"formId":111,"renderKey":"1111686536168062","componentName":"myVar111"},"__slot__":{"default":"查看"},"style":{"marginLeft":"10px"},"domProps":{"innerHTML":"查看"},"type":"main","size":"mini","id":111},{"__config__":{"label":"按钮","tag":"el-button","tagIcon":"click-tap","grid":false,"layout":"raw","action":[],"formId":112,"renderKey":"1121686536168062","componentName":"myVar112"},"__slot__":{"default":"编辑"},"domProps":{"innerHTML":"编辑"},"style":{"marginLeft":"10px"},"type":"secondary","size":"mini","id":112},{"__config__":{"label":"按钮","tag":"el-button","tagIcon":"click-tap","grid":false,"layout":"raw","action":[],"formId":113,"renderKey":"1131686536168062","componentName":"myVar113"},"__slot__":{"default":"删除"},"domProps":{"innerHTML":"删除"},"style":{"marginLeft":"10px"},"type":"tertiary","size":"mini","id":113},{"__config__":{"rootData":true,"tag":"el-dropdown","tagIcon":"drop-down-list","label":"下拉菜单","grid":false,"children":[{"__config__":{"disabled":false,"divided":false,"icon":"","formId":115,"renderKey":"1151686536168062","componentName":"myVar115"},"command":"approve","label":"审核","id":115},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":116,"renderKey":"1161686536168062","componentName":"myVar116"},"command":"reject","label":"驳回","id":116},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":117,"renderKey":"1171686536168062","componentName":"myVar117"},"command":"detail","label":"查看","id":117},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":118,"renderKey":"1181686536168062","componentName":"myVar118"},"command":"edit","label":"编辑","id":118}],"defaultValue":[],"type":"dropdown","formId":114,"renderKey":"1141686536168062","componentName":"myVar114"},"__slot__":{"default":"更多"},"domProps":{"innerHTML":"更多"},"style":{"marginLeft":"10px"},"name":"更多","trigger":"","id":114,"__children__":[{"__config__":{"disabled":false,"divided":false,"icon":"","formId":115,"renderKey":"1151686536168062","componentName":"myVar115"},"command":"approve","label":"审核","id":115},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":116,"renderKey":"1161686536168062","componentName":"myVar116"},"command":"reject","label":"驳回","id":116},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":117,"renderKey":"1171686536168062","componentName":"myVar117"},"command":"detail","label":"查看","id":117},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":118,"renderKey":"1181686536168062","componentName":"myVar118"},"command":"edit","label":"编辑","id":118}]}],"formId":110,"renderKey":"1101686536168062","componentName":"myVar110","headTip":"","contentTipKey":""},"label":"操作","width":"","fixed":"","align":"","id":110,"__children__":[{"__config__":{"label":"按钮","tag":"el-button","tagIcon":"click-tap","grid":false,"layout":"raw","action":[],"formId":111,"renderKey":"1111686536168062","componentName":"myVar111"},"__slot__":{"default":"查看"},"style":{"marginLeft":"10px"},"domProps":{"innerHTML":"查看"},"type":"main","size":"mini","id":111},{"__config__":{"label":"按钮","tag":"el-button","tagIcon":"click-tap","grid":false,"layout":"raw","action":[],"formId":112,"renderKey":"1121686536168062","componentName":"myVar112"},"__slot__":{"default":"编辑"},"domProps":{"innerHTML":"编辑"},"style":{"marginLeft":"10px"},"type":"secondary","size":"mini","id":112},{"__config__":{"label":"按钮","tag":"el-button","tagIcon":"click-tap","grid":false,"layout":"raw","action":[],"formId":113,"renderKey":"1131686536168062","componentName":"myVar113"},"__slot__":{"default":"删除"},"domProps":{"innerHTML":"删除"},"style":{"marginLeft":"10px"},"type":"tertiary","size":"mini","id":113},{"__config__":{"rootData":true,"tag":"el-dropdown","tagIcon":"drop-down-list","label":"下拉菜单","grid":false,"children":[{"__config__":{"disabled":false,"divided":false,"icon":"","formId":115,"renderKey":"1151686536168062","componentName":"myVar115"},"command":"approve","label":"审核","id":115},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":116,"renderKey":"1161686536168062","componentName":"myVar116"},"command":"reject","label":"驳回","id":116},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":117,"renderKey":"1171686536168062","componentName":"myVar117"},"command":"detail","label":"查看","id":117},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":118,"renderKey":"1181686536168062","componentName":"myVar118"},"command":"edit","label":"编辑","id":118}],"defaultValue":[],"type":"dropdown","formId":114,"renderKey":"1141686536168062","componentName":"myVar114"},"__slot__":{"default":"更多"},"domProps":{"innerHTML":"更多"},"style":{"marginLeft":"10px"},"name":"更多","trigger":"","id":114,"__children__":[{"__config__":{"disabled":false,"divided":false,"icon":"","formId":115,"renderKey":"1151686536168062","componentName":"myVar115"},"command":"approve","label":"审核","id":115},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":116,"renderKey":"1161686536168062","componentName":"myVar116"},"command":"reject","label":"驳回","id":116},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":117,"renderKey":"1171686536168062","componentName":"myVar117"},"command":"detail","label":"查看","id":117},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":118,"renderKey":"1181686536168062","componentName":"myVar118"},"command":"edit","label":"编辑","id":118}]}]}],"visibleOn":"","tip":"","host":"VUE_APP_MI_HOST","method":"get","contentType":"form","url":"/v1/appointment/list","params":[{"label":"page_index","value":"1"},{"label":"page_size","value":"10"}],"dataListInfo":"data.list","totalInfo":"data.total","optionDataServerContent":"","optionDataServerInfo":"","isPackage":false,"useParamCode":false,"paramCode":{"htmlCode":"","cssCode":"","jsCode":"// data是配置的参数对象集合,需return一个对象,作为结果\nfunction dataPipe(data) {\n\treturn data;\n}\n"},"useCodeFilter":false,"optionSlotCode":{"htmlCode":"","cssCode":"","jsCode":"// res是接口返回的数据\nfunction dataPipe(res) {\n\treturn res;\n}\n"},"emitList":[],"isInterval":"","intervalTimer":1000,"formId":101,"renderKey":"1011686536168062"},"data":[],"total":0,"isPagination":true,"currentPage":1,"__vModel__":"table101","filterVModel":"","id":101,"__children__":[{"__config__":{"tag":"el-table-column","type":"content","formId":102,"renderKey":"1021686536168062","componentName":"myVar102","headTip":"","contentTipKey":""},"prop":"id","label":"ID","slotCode":"","width":"","fixed":"","align":"","sortable":false,"overflowTooltip":false,"id":102},{"__config__":{"tag":"el-table-column","type":"content","formId":103,"renderKey":"1031686536168062","componentName":"myVar103","headTip":"","contentTipKey":""},"prop":"title","label":"活动名称","width":"","fixed":"","align":"","sortable":false,"overflowTooltip":false,"id":103},{"__config__":{"tag":"el-table-column","srcSource":"aLabel","type":"aLabel","target":"","content":"下载","formId":104,"renderKey":"1041686536168062","componentName":"myVar104","headTip":""},"label":"a链接","width":"","fixed":"","align":"","id":104},{"__config__":{"tag":"el-table-column","type":"content","formId":105,"renderKey":"1051686536168062","componentName":"myVar105","headTip":"","contentTipKey":""},"prop":"create_time","label":"开始时间","width":"","fixed":"","align":"","sortable":false,"overflowTooltip":false,"id":105},{"__config__":{"tag":"el-table-column","type":"content","formId":106,"renderKey":"1061686536168062","componentName":"myVar106","headTip":"","contentTipKey":""},"prop":"end_time","label":"结束时间","width":"","fixed":"","align":"","sortable":false,"overflowTooltip":false,"id":106},{"__config__":{"srcSource":"image","tag":"el-table-column","type":"img","formId":107,"renderKey":"1071686536168062","componentName":"myVar107","headTip":""},"label":"图片","width":"","fixed":"","align":"","id":107},{"__config__":{"srcSource":"status","tag":"el-table-column","type":"status","options":[{"label":"primary","type":"primary","value":"primary"},{"label":"info","type":"primary","value":"info"},{"label":"success","type":"primary","value":"success"},{"label":"warning","type":"primary","value":"warning"}],"formId":108,"renderKey":"1081686536168062","componentName":"myVar108","headTip":""},"label":"状态","width":"","fixed":"","align":"","id":108},{"__config__":{"srcSource":"","tag":"el-table-column","type":"switch","formId":109,"renderKey":"1091686536168062","componentName":"myVar109","headTip":"","prefixText":""},"prop":"switch","label":"开关","action":[],"id":109,"width":"","fixed":"","align":""},{"__config__":{"tag":"el-table-column","type":"button","children":[{"__config__":{"label":"按钮","tag":"el-button","tagIcon":"click-tap","grid":false,"layout":"raw","action":[],"formId":111,"renderKey":"1111686536168062","componentName":"myVar111"},"__slot__":{"default":"查看"},"style":{"marginLeft":"10px"},"domProps":{"innerHTML":"查看"},"type":"main","size":"mini","id":111},{"__config__":{"label":"按钮","tag":"el-button","tagIcon":"click-tap","grid":false,"layout":"raw","action":[],"formId":112,"renderKey":"1121686536168062","componentName":"myVar112"},"__slot__":{"default":"编辑"},"domProps":{"innerHTML":"编辑"},"style":{"marginLeft":"10px"},"type":"secondary","size":"mini","id":112},{"__config__":{"label":"按钮","tag":"el-button","tagIcon":"click-tap","grid":false,"layout":"raw","action":[],"formId":113,"renderKey":"1131686536168062","componentName":"myVar113"},"__slot__":{"default":"删除"},"domProps":{"innerHTML":"删除"},"style":{"marginLeft":"10px"},"type":"tertiary","size":"mini","id":113},{"__config__":{"rootData":true,"tag":"el-dropdown","tagIcon":"drop-down-list","label":"下拉菜单","grid":false,"children":[{"__config__":{"disabled":false,"divided":false,"icon":"","formId":115,"renderKey":"1151686536168062","componentName":"myVar115"},"command":"approve","label":"审核","id":115},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":116,"renderKey":"1161686536168062","componentName":"myVar116"},"command":"reject","label":"驳回","id":116},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":117,"renderKey":"1171686536168062","componentName":"myVar117"},"command":"detail","label":"查看","id":117},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":118,"renderKey":"1181686536168062","componentName":"myVar118"},"command":"edit","label":"编辑","id":118}],"defaultValue":[],"type":"dropdown","formId":114,"renderKey":"1141686536168062","componentName":"myVar114"},"__slot__":{"default":"更多"},"domProps":{"innerHTML":"更多"},"style":{"marginLeft":"10px"},"name":"更多","trigger":"","id":114,"__children__":[{"__config__":{"disabled":false,"divided":false,"icon":"","formId":115,"renderKey":"1151686536168062","componentName":"myVar115"},"command":"approve","label":"审核","id":115},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":116,"renderKey":"1161686536168062","componentName":"myVar116"},"command":"reject","label":"驳回","id":116},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":117,"renderKey":"1171686536168062","componentName":"myVar117"},"command":"detail","label":"查看","id":117},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":118,"renderKey":"1181686536168062","componentName":"myVar118"},"command":"edit","label":"编辑","id":118}]}],"formId":110,"renderKey":"1101686536168062","componentName":"myVar110","headTip":"","contentTipKey":""},"label":"操作","width":"","fixed":"","align":"","id":110,"__children__":[{"__config__":{"label":"按钮","tag":"el-button","tagIcon":"click-tap","grid":false,"layout":"raw","action":[],"formId":111,"renderKey":"1111686536168062","componentName":"myVar111"},"__slot__":{"default":"查看"},"style":{"marginLeft":"10px"},"domProps":{"innerHTML":"查看"},"type":"main","size":"mini","id":111},{"__config__":{"label":"按钮","tag":"el-button","tagIcon":"click-tap","grid":false,"layout":"raw","action":[],"formId":112,"renderKey":"1121686536168062","componentName":"myVar112"},"__slot__":{"default":"编辑"},"domProps":{"innerHTML":"编辑"},"style":{"marginLeft":"10px"},"type":"secondary","size":"mini","id":112},{"__config__":{"label":"按钮","tag":"el-button","tagIcon":"click-tap","grid":false,"layout":"raw","action":[],"formId":113,"renderKey":"1131686536168062","componentName":"myVar113"},"__slot__":{"default":"删除"},"domProps":{"innerHTML":"删除"},"style":{"marginLeft":"10px"},"type":"tertiary","size":"mini","id":113},{"__config__":{"rootData":true,"tag":"el-dropdown","tagIcon":"drop-down-list","label":"下拉菜单","grid":false,"children":[{"__config__":{"disabled":false,"divided":false,"icon":"","formId":115,"renderKey":"1151686536168062","componentName":"myVar115"},"command":"approve","label":"审核","id":115},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":116,"renderKey":"1161686536168062","componentName":"myVar116"},"command":"reject","label":"驳回","id":116},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":117,"renderKey":"1171686536168062","componentName":"myVar117"},"command":"detail","label":"查看","id":117},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":118,"renderKey":"1181686536168062","componentName":"myVar118"},"command":"edit","label":"编辑","id":118}],"defaultValue":[],"type":"dropdown","formId":114,"renderKey":"1141686536168062","componentName":"myVar114"},"__slot__":{"default":"更多"},"domProps":{"innerHTML":"更多"},"style":{"marginLeft":"10px"},"name":"更多","trigger":"","id":114,"__children__":[{"__config__":{"disabled":false,"divided":false,"icon":"","formId":115,"renderKey":"1151686536168062","componentName":"myVar115"},"command":"approve","label":"审核","id":115},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":116,"renderKey":"1161686536168062","componentName":"myVar116"},"command":"reject","label":"驳回","id":116},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":117,"renderKey":"1171686536168062","componentName":"myVar117"},"command":"detail","label":"查看","id":117},{"__config__":{"disabled":false,"divided":false,"icon":"","formId":118,"renderKey":"1181686536168062","componentName":"myVar118"},"command":"edit","label":"编辑","id":118}]}]}],"undefined":""}