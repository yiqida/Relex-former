import { isReactive } from 'vue'
import type { ActiveData } from '@/types/schema'
import * as names from './mutation-types'
import type { State, CompsMap } from './state'

export default {
  [names.SET_COMPSMAP](state: State, compsMap: CompsMap) {
    state.compsMap = compsMap
  },
  [names.SET_ACTIVE_DATA](state: State, activeData: ActiveData) {
    state.activeData = activeData
  },
  [names.SET_ACTIVE_DATE_PATH](state: State, { path, val }: { path: string, val: any}) {
    const keys = path.toString().split('.');

    for (let i = 0; i < keys.length; i ++) {
      const key = keys[i]
      const reg = /(\[\w+\])+$/g
      
      if (reg.test(key)) {
        // 如果当前key中携带了中括号语法，拆解开，后面统一使用万能的中括号语法。 eg: __config__.arrProps[0][1][2]
        keys[i] = key.replace(reg, '') // 先将 arrProps[0][1][2] => arrProps
        const matched = key.match(reg)![0] // 匹配出 '[0][1][2]' 的部分
        const splitKeys = matched.split('[').map(item => item.replace(']', '')) // 将 '[0][1][2]' => ['', 0', '1', '2']
        splitKeys.shift() // 将 ['', 0', '1', '2'] => ['0', '1', '2']
        keys.splice(i + 1, 0, ...splitKeys) // 将 ['0', '1', '2'] 中所有成员插入‘arrProps’后 => ['__config__', 'arrProps',  0', '1', '2']
      }
    }

    let currDepthObj = state.activeData

    keys.forEach((item: string, index: number) => {
      if (index === keys.length - 1) {
        // 因为当前item已经是最后一项，没有后续更多key的路径，故可直接赋值val
        currDepthObj[item] = val
      } else {
        if (!isReactive(currDepthObj[item])) {
          // 如果中间路径key遇到了非响应式数据，如：string、boolean、number，就将次key对应的值
          // 复写成空对象，以继续后面key的赋值，同时让当前阶段key对应的空对象具有响应式
          currDepthObj[item] = {}
        }
        currDepthObj = currDepthObj[item]
      }
    })
  }
}
