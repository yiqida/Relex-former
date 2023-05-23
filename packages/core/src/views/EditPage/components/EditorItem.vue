<template>
  <el-form-item label="标题">
    <div>Editor-Item</div>
  </el-form-item>
</template>

<script setup lang="ts">
import { reactive, defineProps, withDefaults } from 'vue'
import type { EditItem, ActiveData } from '@/types/schema'

interface Props {
  desc: EditItem
  model: ActiveData
}

const props = withDefaults(defineProps<Props>(), {
  desc: () => ({} as EditItem),
  model: () => ({} as ActiveData)
})
</script>