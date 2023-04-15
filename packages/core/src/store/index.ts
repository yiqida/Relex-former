import { createStore } from 'vuex'
import type { State } from './state'
import state from './state'

const store = createStore<State>({
  state
})

export default store
