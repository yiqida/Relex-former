import ButtonSchema from './Button/index'
import TestCompSchma from './TestComp/index'

const lib = {
  name: '用户自定义组件库',
  libs: [
    {
      title: '基础',
      list: [ButtonSchema, TestCompSchma]
    }
  ]
}

export default lib
