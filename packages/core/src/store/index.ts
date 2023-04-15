import type { InjectionKey } from 'vue'
import { createStore, Store, createLogger } from 'vuex'
import state, { type State } from './state'
import getters from './getters'
import mutations from './mutations'

export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
  state,
  getters,
  mutations,
  plugins: [createLogger()]
})

export default store
