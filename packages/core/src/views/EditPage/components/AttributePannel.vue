<template>
  <div class="attribute-panel-wrapper">
    <el-tabs v-model="activeTab" class="attribute-panel-tab" @tab-click="handleClick">
      <el-tab-pane label="组件属性" name="compAttr">
        <el-form v-if="showField">
          <EditorGroup :activeData="activeData"></EditorGroup>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="页面属性" name="pageAttr">Config</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineProps, withDefaults } from 'vue'
import { ElTabs, ElTabPane, ElForm, ElFormItem } from "element-plus";
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import EditorGroup from './EditorGroup.vue'

interface Props {
  activeData: any,
  formConf: any,
  showField: boolean
}

const props = withDefaults(defineProps<Props>(), {
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