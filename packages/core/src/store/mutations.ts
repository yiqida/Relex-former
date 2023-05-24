import type { ActiveData } from '@/types/schema'
import * as names from './mutation-types'
import type { State, CompsMap } from './state'

export default {
  [names.SET_COMPSMAP](state: State, compsMap: CompsMap) {
    state.compsMap = compsMap
  },
  [names.SET_ACTIVE_DATA](state: State, activeData: ActiveData) {
    state.activeData = activeData
  }
}
