import store, { SET_COMPSMAP, type CompsMap } from '@/store/index'
import libExported from '@relax-former/components'
import type { LibExported } from '@/assets/interface/index'

const { libs } = libExported as unknown as LibExported

export function createLibDefs() {
  const compsMap: CompsMap = new Map()

  libs.forEach(leftCompGroup => {
    const groupList = leftCompGroup.list || []
    groupList.forEach(compSchema => {
      compsMap.set(compSchema.__config__.tag, compSchema.__config__.def)
    })
  })

  store.commit(SET_COMPSMAP, compsMap)

  console.log(store.state.compsMap)
}
