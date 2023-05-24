<template>
  <el-form-item :label="desc.label">
    <component :is="desc.type" :desc="desc"></component>
  </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'
import type { EditItem, ActiveData } from '@/types/schema'
import { useMapMutations, useMapState } from '@/hooks/useMap'
import { SET_ACTIVE_DATA } from '@/store'

interface Props {
  desc: EditItem
  model: ActiveData
}

const props = withDefaults(defineProps<Props>(), {
  desc: () => ({} as EditItem),
  model: () => ({} as ActiveData)
})

// console.log('----props', props)

// const { setActiveData } = useMapMutations({
//   setActiveData: SET_ACTIVE_DATA
// })

function parsePath(path: string) {
  /**
   * 这个if不知道是干什么的
   */
  if (/[^\w.\-$]/.test(path)) {
    return function() {};
  }
  const segments = path.split('.'); // __config__  visibleOn

  return (obj: ActiveData) => {
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

console.log(parsePath('__config__.disabled')(props.model))
console.log(parsePath('__config__.haha')(props.model))
console.log(parsePath('__config__.disabled')(props.model))

// const value = computed({
//   get() {
//     return props.model
//   }
// })

</script>

<script lang="ts">
import divider from '@/components/editor/divider.vue'
import edString from '@/components/editor/edString.vue'

export default {
  components: {
    divider,
    edString
  }
}
</script>
