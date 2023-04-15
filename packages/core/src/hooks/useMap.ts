import { mapState, mapMutations } from "vuex";
import { useStore } from '@/store/index';
import { computed, type ComputedRef } from 'vue'

interface useMapStateRet {
  [x: string]: ComputedRef<any>;
}

/**
 * setup下不容易直接使用mapState，使用hook封装mapState
 */
export function useMapState(map: any) {
  const store = useStore()
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
