<template>
  <div class="ed-object-wrapper">
    <editor-item
      v-for="(item, index) in clonedAllEditItems"
      :key="index"
      :desc="item"
      :model="modelValue"
      @update="updateCom"
    ></editor-item>
    <!-- <div>edObject</div> -->
  </div>
</template>

<script setup lang="ts">
import { reactive, defineProps, withDefaults, computed, defineEmits, onMounted } from 'vue'
import type { EditItem } from '@/types/schema'
import EditorItem from '@/views/EditPage/components/EditorItem.vue'

interface Props {
  modelValue: any[]
  desc: EditItem
}

interface Emits {
  (e: 'update:modelValue', value: any): void
}

const emits = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ([]),
  desc: () => ({} as EditItem)
})


const clonedAllEditItems = computed(() => {
  let properties = props.desc.props
  let edits = []

  for (let key in properties) {
    let item = properties[key]
    let value = props.modelValue
    let show = item.show
    if (show && !!value) {
      let [showKey, showValue] = show.split(':')
      if (props.modelValue[showKey] === showValue) {
        edits.push(
          Object.assign({}, item, {
            label: item.label,
            type: item.type,
            model: item.model ? item.model : key,
          })
        )
      }
    }
    else if (!!value) {
      edits.push(
        Object.assign({}, item, {
          label: item.label,
          type: item.type,
          model: item.model ? item.model : key,
        })
      )
    }
  }

  return edits
})

function updateCom(item: any) {
  let newItem = JSON.parse(JSON.stringify(item))
  emits('update:modelValue', newItem)
}
</script>