import * as names from './mutation-types'
import type { State, CompsMap } from './state'

export default {
  [names.SET_COMPSMAP](state: State, compsMap: CompsMap) {
    state.compsMap = compsMap
  }
}
