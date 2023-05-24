<template>
  <el-divider>{{ desc.name }}</el-divider>
</template>

<script setup lang="ts">
import { ElDivider } from 'element-plus'; 
import { defineProps, withDefaults } from 'vue'
import type { EditItem } from '@/types/schema'

interface Props {
  desc: EditItem
}

const props = withDefaults(defineProps<Props>(), {
  desc: () => ({} as EditItem)
})
</script>