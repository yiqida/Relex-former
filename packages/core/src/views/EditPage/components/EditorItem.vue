<template>
  <el-form-item :label="desc.label" style="border: 1px blue solid">
    <component :is="desc.type" :desc="desc" v-model="value"></component>
  </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed, onMounted } from 'vue'
import type { EditItem, ActiveData } from '@/types/schema'
import { useMapMutations } from '@/hooks/useMap'
import { SET_ACTIVE_DATA, SET_ACTIVE_DATE_PATH } from '@/store'
import { isEmpty, setValueByPath } from '@/utils/index'

/**
 * 可能的需求待补充：
 * 1. emit('update', item) 能力
 */

interface Props {
  desc: EditItem
  model: ActiveData | ActiveData[]  // 这里需要修改，实际上并不一定是activeData
}

const props = withDefaults(defineProps<Props>(), {
  desc: () => ({} as EditItem),
  model: () => ({} as ActiveData)
})

const { setActiveData } = useMapMutations({
  setActiveData: SET_ACTIVE_DATA,
  setActiveDataPath: SET_ACTIVE_DATE_PATH
})

function parsePath(path?: string) {
  /**
   * 这个if不知道是干什么的
   */
  if (isEmpty(path)) return function() {}

  if (/[^\w.\-$]/.test(path!)) {
    return function() {};
  }

  const segments = `${path}`.split('.'); // __config__  visibleOn

  return (obj: any) => {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      const key = segments[i];

      if (obj[key] === undefined) {
        if (key === 'disabled') {
          obj[key] = false
        } else {
          obj[key] = ''
        }
      }
      obj = obj[key];
    }
    return obj;
  };
}


const value = computed({
  get() {
    return parsePath(props.desc.model)(props.model)
  },
  set(val) {
    try {
      if (props.desc.model) {
        setValueByPath(props.model, {
          path: props.desc.model,
          val
        })
      } else {
        setActiveData(val)
      }
    } catch(err) {
      console.error(err, 'error');  
    }
  }
})
</script>

<script lang="ts">
import divider from '@/components/editor/divider.vue'
import edString from '@/components/editor/edString.vue'
import edArray from '@/components/editor/edArray.vue'
import edObject from '@/components/editor/edObject.vue'

export default {
  components: {
    divider,
    edString,
    edArray,
    edObject
  }
}
</script>
