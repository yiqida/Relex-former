import { mapState, mapMutations, mapGetters } from "vuex";
import { useStore } from '@/store/index';
import { computed, type ComputedRef } from 'vue'

interface useMapStateRet {
  [x: string]: ComputedRef<any>;
}

/**
 * setup下不容易直接使用mapState，使用hook封装mapState
 */
export function useMapState(map: any) {
  const store = useStore() // 注意 useStore 不能写在外面，执行useStore时执行栈中必须存活setup
  const computeds = mapState(map)

  const stateComputeds: useMapStateRet = {}
  
  Object.keys(computeds).forEach(fnName => {
    const fn = computeds[fnName].bind({ $store: store })
    stateComputeds[fnName] = computed<any>(fn)
  })

  return stateComputeds
}

/**
 * setup下不容易直接使用mapMutations，使用hook封装mapMutations
 */
export function useMapMutations(map: any) {
  const store = useStore()
  const methods = mapMutations(map)

  Object.keys(methods).forEach(fnName => {
    methods[fnName] = methods[fnName].bind({ $store: store })
  })

  return methods
}

export function useMapGetters(map: any) {
  const store = useStore()
  const getters = mapGetters(map)

  const stateGetters: useMapStateRet = {}

  Object.keys(getters).forEach(fnName => {
    const fn = getters[fnName].bind({ $store: store })
    stateGetters[fnName] = computed<any>(fn)
  })

  return stateGetters
}
