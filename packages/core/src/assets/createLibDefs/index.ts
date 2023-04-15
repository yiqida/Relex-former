import store, { SET_COMPSMAP, type CompsMap } from '@/store/index'
import libExported from '@relax-former/components'
import type { LibExported } from '@/assets/interface/index'
import { defineAsyncComponent } from 'vue'

const { libs } = libExported as unknown as LibExported

export function createLibDefs() {
  const compsMap: CompsMap = {}

  libs.forEach(leftCompGroup => {
    const groupList = leftCompGroup.list || []
    groupList.forEach(compSchema => {
      Reflect.set(compsMap, compSchema.__config__.tag, defineAsyncComponent(compSchema.__config__.def))
    })
  })

  store.commit(SET_COMPSMAP, compsMap)

  console.log(store.state.compsMap)
}
