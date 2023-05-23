<template>
  <div class="editor-group-wrapper">
    <editor-item
      v-for="(item, index) in edits" 
      :key="index"
      :desc="item"
      :model="activeData"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import { useMapGetters } from '@/hooks/useMap'
import type { ActiveData } from '@/types/schema'
import EditorItem from './EditorItem.vue'

interface Props {
  activeData: ActiveData
}

const props = withDefaults(defineProps<Props>(), {
  activeData: () => ({} as ActiveData)
})

const getCompEdit = useMapGetters(['getComDef']).getComDef

const edits = computed(() => {
  return getCompEdit.value(props.activeData)
})

console.log('edits', edits.value)
</script>