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
    const arr = path.toString().split('.');

    const newArr = arr.map((item: string) => {
      const hasBar = item.indexOf('-');
      if (hasBar >= 0) {
        item = `['${item}']`;
      }
      return item;
    });

    let currDepthObj = state.activeData

    newArr.forEach((item: string, index: number) => {
      if (index === newArr.length - 1) {
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
