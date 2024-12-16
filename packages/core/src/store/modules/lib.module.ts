import type { Module } from 'vuex'
import type { State } from '../state'
import type { PlainObj } from '@/types/common'
import type { EditItem, ActiveData } from '@/types/schema'

type Tag = string

interface LibState extends PlainObj {
  libEdit: {
    [props: Tag]: EditItem[]
  }
}

const libModule: Module<LibState, State> = {
  state: {
    libEdit: {
      'el-demo-block': [
        {
          type: 'divider',
          name: '基础信息'
        },
        {
          label: '是否显示',
          type: 'edString',
          model: '__config__.visibleOn'
        },
        {
          label: '标题',
          type: 'edString',
          model: 'title'
        }
      ]
    }
  },
  getters: {
    getComDef: (state) => (com: ActiveData) => {
      const tag = com?.__config__?.tag || ''
      if (state.libEdit[tag]) {
        return state.libEdit[tag]
      }
    }
  }
}

export default libModule
