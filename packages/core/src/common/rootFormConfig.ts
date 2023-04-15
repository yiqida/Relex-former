// 页面属性
interface IformConf {
    size: 'default' | 'small' | 'large',
    [propName: string]: any
}

export const formConf: IformConf = {
    formRef: 'elForm',
    formModel: 'formData',
    size: 'default',
    labelPosition: 'right',
    labelWidth: 100,
    formRules: 'rules',
    gutter: 15,
    disabledExpress: '',
    span: 24,
    hasFooter: false,
    dragableGroup: 'componentsGroup',
    dataSource: [],
    model: {},
    mountedCode: {
        htmlCode: '',
        jsCode:
            '// data函数已经初始化一个state对象 \n \
  // 可以通过this.$set初始化state的值 \n \
  // mounted钩子函数里，可以访问this.$set, this.$route, this.$router, this.$message等方法 \n \
      function mounted() { \n \
        \n \
      }',
        cssCode: '',
        jsonCode: ''
    },
    isFilterEmpty: true,
    emptyDefault: 'null',
    edit: [
        {
            type: 'divider',
            name: '表单信息'
        },
        {
            label: '表单名',
            type: 'edString',
            model: 'formRef'
        },
        {
            label: '表单模型',
            type: 'edString',
            model: 'formModel'
        },
        {
            label: '表单尺寸',
            type: 'edSelect',
            model: 'size',
            options: [
                {
                    label: '中等',
                    value: 'medium'
                },
                {
                    label: '较小',
                    value: 'small'
                },
                {
                    label: '迷你',
                    value: 'mini'
                }
            ]
        },
        {
            label: '标签对齐',
            type: 'edSelect',
            model: 'labelPosition',
            options: [
                {
                    label: '左对齐',
                    value: 'left'
                },
                {
                    label: '右对齐',
                    value: 'right'
                },
                {
                    label: '顶部对齐',
                    value: 'top'
                }
            ]
        },
        {
            label: '标签宽度',
            type: 'edNumber',
            model: 'labelWidth'
        },
        {
            type: 'edString',
            label: '禁用表单',
            model: 'disabledExpress',
            placeholder: "Route.type === 'look'",
            explain: `
        Route或者表单名.关联组件的字段名 === 值<br/>
        例如Route.type === 'look'`
        },
        {
            label: '过滤空值',
            type: 'edBoolean',
            model: 'isFilterEmpty'
        },
        {
            label: '设置空值',
            type: 'edString',
            model: 'emptyDefault',
            visibleOn: '!this.isFilterEmpty'
        }
    ]
};