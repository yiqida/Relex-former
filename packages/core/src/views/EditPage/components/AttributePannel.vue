<template>
  <div class="px-4 h-[calc(100vh - 42px)] overflow-y-auto">
    <editor-item v-for="(item, index) in activeData.edit" :key="index" :desc="item" :model="activeData" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import type { ActiveData } from '@/types/schema'
import EditorItem from './EditorItem.vue'

interface Props {
  activeData: ActiveData
}

withDefaults(defineProps<Props>(), {
  activeData: () => ({} as ActiveData)
})
</script>