import type { InjectionKey } from 'vue'
import { createStore, Store, createLogger, useStore as baseUseStore } from 'vuex'
export * from './mutation-types'
export * from './state'
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

// 定义自己的 `useStore` 组合式函数，这样做是为了能让vuex感知到state的TS类型
export function useStore () {
  return baseUseStore(key)
}

export default store
