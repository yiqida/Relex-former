import type { Module } from 'vuex';
import type { State } from '../state'
import type { PlainObj } from '@/types/common';
import type { EditItem, ActiveData } from '@/types/schema'

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
            {
                "label":"右侧按钮",
                "type":"edAddComp",
                "model":"__config__.header",
                "default":{
                    "__config__":{
                        "def":{
                            "_custom":{
                                "type":"function",
                                "display":"<span style=\"opacity:.5;\">function</span> def()",
                                "tooltip":"<pre>function def() {\n      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index.vue */ \"./packages/ecyButton/index.vue\"));\n    }</pre>",
                                "_reviveId":40
                            }
                        },
                        "label":"按钮",
                        "tag":"ecy-button",
                        "tagIcon":"click-tap",
                        "grid":false,
                        "action":[
        
                        ],
                        "visibleOn":"",
                        "tip":"",
                        "distanceSet":"",
                        "style":{
                            "marginTop":"",
                            "marginRight":"",
                            "marginBottom":"",
                            "marginLeft":"",
                            "paddingTop":"",
                            "paddingRight":"",
                            "paddingBottom":"",
                            "paddingLeft":""
                        },
                        "descStyle":{
                            "color":"#aaa"
                        }
                    },
                    "domProps":{
                        "innerHTML":"按钮"
                    },
                    "type":"main",
                    "size":"small",
                    "disabled":false,
                    "readonly":false,
                    "style":{
                        "marginLeft":"10px",
                        "marginTop":"0px",
                        "marginBottom":"10px"
                    },
                    "disabledExpress":"",
                    "edit":[
                        {
                            "type":"divider",
                            "name":"基础信息"
                        },
                        {
                            "label":"是否显示",
                            "type":"edString",
                            "model":"__config__.visibleOn",
                            "placeholder":"elForm.age === 2",
                            "explain":"表达式结构构成:<br/>\n    页面属性中的表单名.关联组件的字段名 == 值<br/>\n    上下文有:<br/>\n    Route,ls(localStorage),ss(sessionStorage),state,window,model,server(server__0)\n    "
                        },
                        {
                            "label":"标签名称",
                            "type":"edString",
                            "model":"__config__.label",
                            "visibleOn":"this.__config__.tag !== \"ecy-button\""
                        },
                        {
                            "label":"文字",
                            "type":"edString",
                            "model":"domProps.innerHTML"
                        },
                        {
                            "type":"divider",
                            "name":"样式信息"
                        },
                        {
                            "label":"间距设置",
                            "type":"edSelect",
                            "model":"__config__.distanceSet",
                            "options":[
                                {
                                    "label":"margin",
                                    "value":"margin"
                                },
                                {
                                    "label":"padding",
                                    "value":"padding"
                                },
                                {
                                    "label":"none",
                                    "value":"none"
                                }
                            ]
                        },
                        {
                            "label":"marginTop",
                            "type":"edString",
                            "visibleOn":"this.__config__.distanceSet === \"margin\"",
                            "model":"__config__.style.marginTop"
                        },
                        {
                            "label":"marginRight",
                            "type":"edString",
                            "visibleOn":"this.__config__.distanceSet === \"margin\"",
                            "model":"__config__.style.marginRight"
                        },
                        {
                            "label":"marginBottom",
                            "type":"edString",
                            "visibleOn":"this.__config__.distanceSet === \"margin\"",
                            "model":"__config__.style.marginBottom"
                        },
                        {
                            "label":"marginLeft",
                            "type":"edString",
                            "visibleOn":"this.__config__.distanceSet === \"margin\"",
                            "model":"__config__.style.marginLeft"
                        },
                        {
                            "label":"paddingTop",
                            "type":"edString",
                            "visibleOn":"this.__config__.distanceSet === \"padding\"",
                            "model":"__config__.style.paddingTop"
                        },
                        {
                            "label":"paddingRight",
                            "type":"edString",
                            "visibleOn":"this.__config__.distanceSet === \"padding\"",
                            "model":"__config__.style.paddingRight"
                        },
                        {
                            "label":"paddingBottom",
                            "type":"edString",
                            "visibleOn":"this.__config__.distanceSet === \"padding\"",
                            "model":"__config__.style.paddingBottom"
                        },
                        {
                            "label":"paddingLeft",
                            "type":"edString",
                            "visibleOn":"this.__config__.distanceSet === \"padding\"",
                            "model":"__config__.style.paddingLeft"
                        },
                        {
                            "label":"表格栅格",
                            "type":"edSlider",
                            "model":"__config__.span",
                            "options":{
                                "max":24,
                                "min":1,
                                "marks":{
                                    "12":""
                                }
                            },
                            "visibleOn":"this.__config__.tag !== \"ecy-button\""
                        },
                        {
                            "label":"组件宽度",
                            "type":"edString",
                            "model":"style.width"
                        },
                        {
                            "label":"标签宽度",
                            "type":"edString",
                            "model":"__config__.labelWidth",
                            "visibleOn":"this.__config__.tag !== \"ecy-button\""
                        },
                        {
                            "label":"描述文案颜色",
                            "type":"edString",
                            "model":"__config__.descStyle.color",
                            "visibleOn":"this.__config__.tag !== \"ecy-button\""
                        },
                        {
                            "label":"type",
                            "type":"edSelect",
                            "model":"type",
                            "options":[
                                {
                                    "label":"main",
                                    "value":"main"
                                },
                                {
                                    "label":"secondary",
                                    "value":"secondary"
                                },
                                {
                                    "label":"tertiary",
                                    "value":"tertiary"
                                },
                                {
                                    "label":"line",
                                    "value":"line"
                                }
                            ]
                        },
                        {
                            "label":"size",
                            "type":"edSelect",
                            "model":"size",
                            "options":[
                                {
                                    "label":"large",
                                    "value":"large"
                                },
                                {
                                    "label":"small",
                                    "value":"small"
                                },
                                {
                                    "label":"mini",
                                    "value":"mini"
                                }
                            ]
                        },
                        {
                            "label":"是否禁用",
                            "type":"edString",
                            "model":"disabledExpress",
                            "placeholder":"Route.type === 'look'",
                            "explain":" Route或者表单名.关联组件的字段名 === 值<br/>\n      例如Route.type === 'look'<br/>\n      上下文有:<br/>\n      Route,ls(localStorage),ss(sessionStorage),state,window,model,server(server__0)\n      "
                        },
                        {
                            "type":"divider",
                            "name":"动作设置"
                        },
                        {
                            "type":"edAction",
                            "model":"__config__.action"
                        }
                    ]
                }
            }
      ]
    }
  },
  getters: {
    getComDef: (state) => (com: ActiveData) => {
      if (state.libDefs[com.__config__.tag]) {
        return state.libDefs[com.__config__.tag];
      }
    },
  }
}

export default libModule
