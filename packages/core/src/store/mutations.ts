import type { ActiveData } from '@/types/schema'
import * as names from './mutation-types'
import type { State, CompsMap } from './state'
import { setValueByPath } from '@/utils/index'

export default {
  [names.SET_COMPSMAP](state: State, compsMap: CompsMap) {
    state.compsMap = compsMap
  },
  [names.SET_ACTIVE_DATA](state: State, activeData: ActiveData) {
    state.activeData = activeData
  },
  [names.SET_ACTIVE_DATE_PATH](state: State, { path, val }: { path: string, val: any}) {
    setValueByPath(state.activeData, { path, val })
  }
}
