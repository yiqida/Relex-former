<template>
  <div class="ed-string-wrapper">
    <el-input v-model="model"></el-input>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed, defineEmits } from 'vue'
import type { EditItem } from '@/types/schema'

interface Props {
  value: any
  desc: EditItem
}

interface Emits {
  (e: 'input', value: string): void
}

const emits = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  value: () => ({}),
  desc: () => ({} as EditItem)
})

const model = computed({
  get() {
    // console.log(props.value, '12312313')
    if (Array.isArray(props.value)) {
      return props.value.join(',');
    }
    if (typeof props.value === 'boolean') {
      return `${props.value}`;
    }
    return props.value;
  },
  set(val: any) {
    if (Array.isArray(props.value)) {
      if (val) {
        val = val.split(',');
      } else {
        val = [];
      }
    }
    if (typeof val === 'boolean') {
      val = `${val}`;
    }
    // if (props.desc.model === 'formRef') {
    //   // 删除ref
    //   this.deleteModel(this.value);
    // }
    // if (props.desc.model === '__vModel__') {
    //   // 删除对应model上的值
    //   const data = this.activeData();
    //   const { parentRef } = data.__config__;
    //   if (parentRef) {
    //     const model = this.getModelValue(parentRef);
    //     this.$delete(model, this.value);
    //   } else {
    //     const model = this.getModelValue(this.formConf().formRef);
    //     if (model) {
    //       this.$delete(model, this.value);
    //     }
    //   }
    // }
    emits('input', val);
  }
})
</script>
