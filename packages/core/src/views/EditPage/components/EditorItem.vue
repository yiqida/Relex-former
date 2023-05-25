<template>
  <el-form-item :label="desc.label">
    <component :is="desc.type" :desc="desc" v-model="value"></component>
  </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'
import type { EditItem, ActiveData } from '@/types/schema'
import { useMapMutations } from '@/hooks/useMap'
import { SET_ACTIVE_DATA, SET_ACTIVE_DATE_PATH } from '@/store'

interface Props {
  desc: EditItem
  model: ActiveData
}

const props = withDefaults(defineProps<Props>(), {
  desc: () => ({} as EditItem),
  model: () => ({} as ActiveData)
})

const { setActiveData, setActiveDataPath } = useMapMutations({
  setActiveData: SET_ACTIVE_DATA,
  setActiveDataPath: SET_ACTIVE_DATE_PATH
})

function parsePath(path?: string) {
  /**
   * 这个if不知道是干什么的
   */
  if (!path) return function() {}

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


const value = computed({
  get() {
    return parsePath(props.desc.model)(props.model)
  },
  set(val) {
    try {
      if (props.desc.model) {
        setActiveDataPath({
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

export default {
  components: {
    divider,
    edString
  }
}
</script>
