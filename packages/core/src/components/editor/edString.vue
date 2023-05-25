<template>
  <div class="ed-string-wrapper">
    <el-input v-model="model"></el-input>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed, defineEmits } from 'vue'
import type { EditItem } from '@/types/schema'

interface Props {
  modelValue: any
  desc: EditItem
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const emits = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({}),
  desc: () => ({} as EditItem)
})

const model = computed({
  get() {
    return props.modelValue
  },
  set(val: string) {
    emits('update:modelValue', val)
  }
})
</script>
