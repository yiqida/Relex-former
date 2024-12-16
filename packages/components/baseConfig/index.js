export const config = {
  visibleOn: '',
  distanceSet: '',
  style: {
    marginTop: '',
    marginRight: '',
    marginBottom: '',
    marginLeft: '',
    paddingTop: '',
    paddingRight: '',
    paddingBottom: '',
    paddingLeft: ''
  },
};
export const props = {
  disabled: false,
  readonly: false
};

export const ruleEdit = [
  {
    type: 'divider',
    name: '校验'
  }
];

export const actionEdit = [
  {
    type: 'divider',
    name: '动作设置'
  }
];

export const baseEdit = [
  {
    type: 'divider',
    name: '基础信息'
  },
  {
    label: '是否显示',
    type: 'edString',
    model: '__config__.visibleOn',
    placeholder: 'elForm.age === 2',
    explain: `表达式结构构成:<br/>
    页面属性中的表单名.关联组件的字段名 == 值<br/>
    上下文有:<br/>
    Route,ls(localStorage),ss(sessionStorage),state,window,model,server(server__0)
    `
  },
  {
    label: '标签名称',
    type: 'edString',
    model: '__config__.label',
    visibleOn: 'this.__config__.tag !== "el-button"'
  }
];

export const styleEdit = [
  {
    type: 'divider',
    name: '样式信息'
  },
  {
    label: '间距设置',
    type: 'edSelect',
    model: '__config__.distanceSet',
    options: [
      {
        label: 'margin',
        value: 'margin'
      },
      {
        label: 'padding',
        value: 'padding'
      },
      {
        label: 'none',
        value: 'none'
      }
    ]
  },
  {
    label: 'Top',
    type: 'edString',
    visibleOn: 'this.__config__.distanceSet === "margin"',
    model: '__config__.style.marginTop'
  },
  {
    label: 'Right',
    type: 'edString',
    visibleOn: 'this.__config__.distanceSet === "margin"',
    model: '__config__.style.marginRight'
  },
  {
    label: 'Bottom',
    type: 'edString',
    visibleOn: 'this.__config__.distanceSet === "margin"',
    model: '__config__.style.marginBottom'
  },
  {
    label: 'Left',
    type: 'edString',
    visibleOn: 'this.__config__.distanceSet === "margin"',
    model: '__config__.style.marginLeft'
  },
  {
    label: 'Top',
    type: 'edString',
    visibleOn: 'this.__config__.distanceSet === "padding"',
    model: '__config__.style.paddingTop'
  },
  {
    label: 'Right',
    type: 'edString',
    visibleOn: 'this.__config__.distanceSet === "padding"',
    model: '__config__.style.paddingRight'
  },
  {
    label: 'Bottom',
    type: 'edString',
    visibleOn: 'this.__config__.distanceSet === "padding"',
    model: '__config__.style.paddingBottom'
  },
  {
    label: 'Left',
    type: 'edString',
    visibleOn: 'this.__config__.distanceSet === "padding"',
    model: '__config__.style.paddingLeft'
  },
  {
    label: '表格栅格',
    type: 'edSlider',
    model: '__config__.span',
    options: {
      max: 24,
      min: 1,
      marks: { 12: '' }
    },
    visibleOn: 'this.__config__.tag !== "el-button"'
  },
  {
    label: '组件宽度',
    type: 'edString',
    model: 'style.width',
    visibleOn: 'this.__config__.tag !== "el-button"'
  },
  {
    label: '标签宽度',
    type: 'edString',
    model: '__config__.labelWidth',
    visibleOn: 'this.__config__.tag !== "el-button"'
  },
];

// 数据来源配置
export const dataSourceConfig = {
  dataSourceType: 'static',
  dataServerContent: '',
  dataServerInfo: ''
};

export const dataSourceEdit = [
  {
    type: 'divider',
    name: 'value配置'
  },
  {
    label: '数据来源',
    type: 'edSelect',
    model: '__config__.dataSourceType',
    options: [
      {
        label: '静态数据',
        value: 'static'
      },
      {
        label: '数据源数据',
        value: 'dynamic'
      },
      {
        label: 'window',
        value: 'window'
      },
      {
        label: 'Route',
        value: 'Route'
      },
      {
        label: 'localStorage',
        value: 'ls'
      },
      {
        label: 'currentScope',
        value: 'currentScope'
      },
      {
        label: 'state',
        value: 'state'
      }
    ]
  },
  {
    label: '数据源选取',
    explain: '请从最左侧数据源添加数据来源',
    type: 'edSelect',
    source: 'dynamic',
    model: '__config__.dataServerContent',
    visibleOn: 'this.__config__.dataSourceType === "dynamic"'
  },
  {
    explain: `
    {<br/>
    &nbsp;&nbsp;"code": 0,<br/>
    &nbsp;&nbsp;"msg": "success",<br/>
    &nbsp;&nbsp;"data": {<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;"name": "bob"<br/>
    &nbsp;&nbsp;}<br/>
    }<br/>
    要取name的值, 则写为data.name。`,
    label: '数据绑定',
    type: 'edString',
    model: '__config__.dataServerInfo',
    visibleOn: 'this.__config__.dataSourceType !== "static"'
  }
];

export const dataTypeConfig = {
  dataType: 'static'
};

// options选项
export const optionsEdit = [
  {
    label: '数据来源',
    type: 'edSelect',
    model: '__config__.dataType',
    options: [
      {
        label: '静态数据',
        value: 'static'
      },
      {
        label: '远程数据',
        value: 'dynamic'
      },
      {
        label: '数据源数据',
        value: 'localDynamic'
      }
    ]
  }
];

// 远程数据配置
export const dynamicOptionsConfig = {
  host: 'VUE_APP_MI_HOST',
  method: 'get',
  contentType: 'json',
  url: '',
  params: [],
  dataListInfo: 'data'
};

export const dynamicOptionsEdit = [
  {
    label: '服务域名',
    type: 'edEnv',
    model: '__config__.host',
    explain: '可在预览页面,左下角【设置域名】处,添加域名设置',
    visibleOn: 'this.__config__.dataType === "dynamic"'
  },
  {
    label: '请求方法',
    type: 'edSelect',
    model: '__config__.method',
    visibleOn: 'this.__config__.dataType === "dynamic"',
    options: [
      {
        label: 'get',
        value: 'get'
      },
      {
        label: 'post',
        value: 'post'
      }
    ]
  },
  {
    label: 'content-type',
    type: 'edSelect',
    model: '__config__.contentType',
    options: [
      {
        label: 'application/json',
        value: 'json'
      },
      {
        label: 'application/x-www-form-urlencoded;charset=UTF-8;',
        value: 'form'
      }
    ],
    visibleOn: 'this.__config__.dataType === "dynamic"'
  },
  {
    type: 'edString',
    model: '__config__.url',
    visibleOn: 'this.__config__.dataType === "dynamic"',
    label: '地址'
  },
  {
    type: 'edParam',
    model: '__config__.params',
    explain: '参数配置',
    visibleOn: 'this.__config__.dataType === "dynamic"',
    label: '参数'
  },
  {
    type: 'edString',
    model: '__config__.dataListInfo',
    explain: '假设服务端返回下面示例：则填入data即可<br/>{</br>&nbsp;data: [</br>&nbsp;&nbsp;{</br>&nbsp;&nbsp;&nbsp;name: "张三",</br>&nbsp;&nbsp;&nbsp;value: 123</br>&nbsp;&nbsp;}</br>&nbsp;]</br>}',
    visibleOn: 'this.__config__.dataType === "dynamic"',
    label: '返回变量绑定'
  }
];

// 数据源options配置
export const localDynamicOptionsConfig = {
  optionDataServerContent: '',
  optionDataServerInfo: ''
};

export const localDynamicOptionsEdit = [
  {
    label: '数据源选取',
    type: 'edSelect',
    source: 'dynamic',
    model: '__config__.optionDataServerContent',
    visibleOn: 'this.__config__.dataType === "localDynamic"'
  },
  {
    label: '数据绑定',
    type: 'edString',
    model: '__config__.optionDataServerInfo',
    visibleOn: 'this.__config__.dataType === "localDynamic"'
  }
];

// api高级配置
export const apiHighConfig = {
  useParamCode: false,
  paramCode: {
    htmlCode: '',
    cssCode: '',
    jsCode:
      '// data是配置的参数对象集合, formRef是整个页面的form表单,需return一个对象,作为结果\nfunction dataPipe(data,formRef) {\n\treturn data;\n}\n'
  },
  useCodeFilter: false,
  optionSlotCode: {
    htmlCode: '',
    cssCode: '',
    jsCode:
      '// res是接口返回的数据, formRef是整个页面的form表单\nfunction dataPipe(res, formRef) {\n\treturn [{label:"", value:""}];\n}\n'
  },
  emitList: []
};

export const apiHighEdit = [
  {
    type: 'edBoolean',
    label: '参数转换',
    explain: '请求参数格式转换的函数',
    model: '__config__.useParamCode',
    visibleOn: 'this.__config__.dataType === "dynamic"'
  },
  {
    type: 'edCodeIcon',
    label: '自定义函数',
    model: '__config__.paramCode',
    defaultName: 'javascript',
    visibleOn: 'this.__config__.useParamCode === true && this.__config__.dataType === "dynamic"'
  },
  {
    type: 'edBoolean',
    label: '结果转换',
    explain: '接口返回结果，格式转换函数',
    model: '__config__.useCodeFilter',
    visibleOn: 'this.__config__.dataType === "dynamic"'
  },
  {
    type: 'edCodeIcon',
    label: '自定义函数',
    model: '__config__.optionSlotCode',
    defaultName: 'javascript',
    visibleOn: 'this.__config__.useCodeFilter === true && this.__config__.dataType === "dynamic"'
  },
  {
    type: 'edWatch',
    label: '发送通知',
    explain: '接收方应为同表单内,值受该组件影响的其他组件【字段名】',
    model: '__config__.emitList'
  }
];

export const attrEdit = [
  {
    label: '是否禁用',
    type: 'edBoolean',
    model: 'disabled'
  },
  {
    label: '是否只读',
    type: 'edBoolean',
    model: 'readonly'
  },
  {
    label: '是否可清空',
    type: 'edBoolean',
    model: 'clearable'
  },
  {
    label: '是否必选',
    type: 'edBoolean',
    model: 'required'
  }
];
