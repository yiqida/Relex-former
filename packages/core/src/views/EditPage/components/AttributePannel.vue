<template>
  <div>
    <EditorGroup :activeData="activeData"></EditorGroup>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineProps, withDefaults } from 'vue'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import EditorGroup from './EditorGroup.vue'

interface Props {
  activeData: any,
  formConf?: any,
  showField?: boolean
}

withDefaults(defineProps<Props>(), {
  activeData: {},
  formConf: {},
  showField: true
})

const activeTab = ref('compAttr')

const form = reactive({
  name: ''
})

const handleClick = (tab: TabsPaneContext, event: Event) => {
}

</script>