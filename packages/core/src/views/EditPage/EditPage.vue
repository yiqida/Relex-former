<template>
  <div class="editor-page-wrapper">
    <div class="nav-header flex justify-end items-center">
      <el-button :icon="Finished" type="text">
        保存
      </el-button>
      <el-button class="delete-btn" :icon="Delete" type="text" @click="handleEmpty">
        清空
      </el-button>
    </div>
    <div class="editor-container">
      <div class="left-comps-container">
        <div v-for="(item, listIndex) in lib.libs" :key="listIndex">
          <div class="components-title">
            {{ item.title }}
          </div>
          <draggable class="components-draggable" :list="item.list" :group="{
              name: dragableGroup,
              pull: 'clone',
              put: false
            }" item-key="__config__.label" :sort="false">
            <template #item="{ element }">
              <div class="components-item" @click="clickComps(element)">
                {{ element.__config__.label }}
              </div>
            </template>
          </draggable>
        </div>
      </div>
      <div class="center-editor">
        <el-row :gutter="formConf.gutter" class="h-full">
          <el-form class="w-full h-full" :size="formConf.size" :label-position="formConf.labelPosition"
            :label-width="formConf.labelWidth + 'px'">
            <draggable class="drawing-board h-full" :list="drawingList" :animation="340" group="componentsGroup">
              <template #item="{ element, index }">
                <DraggableItem :drawing-list="drawingList" :current-item="element" :active-id="activeId" :index="index" />
              </template>
            </draggable>
          </el-form>
        </el-row>
        <!-- <div v-for="(comp, index) in drawList" :key="index">
          <component :is="comp"></component>
        </div> -->
      </div>
      <div class="right-edited-container"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineAsyncComponent, reactive, markRaw } from 'vue'
import { ElRow, ElForm, ElMessageBox } from "element-plus";
import { Delete, Finished } from '@element-plus/icons-vue'
import { formConf } from "../../common/rootFormConfig";
import draggable from 'vuedraggable'
import lib from '@relax-former/components'
import DraggableItem from './components/DraggableItem.vue'

const drawingList = ref<any[]>([])
const dragableGroup = ref('componentsGroup')
const activeId = ref(-1)

const handleEmpty = async () => {
  await ElMessageBox.alert('确定要清空所有组件吗？', '提示', {
    callback: () => {
      drawingList.value = [];
    }
  })
}

// const drawList = reactive([] as any[])

function clickComps(element: any) {
  // const defFunc = element.__config__.def
  // // const AsyncComp = computed(() => defineAsyncComponent(defFunc))
  // const AsyncComp = markRaw(defineAsyncComponent(defFunc))
  drawingList.value.push(element)
}
</script>

<style lang="scss" scoped>
$nav-height: 1rem;

.editor-page-wrapper {
  border: 1px red solid;

  .nav-header {
    height: $nav-height;
    margin-right: 20px;
  }

  .editor-container {
    display: flex;
    min-height: calc(100vh - $nav-height);

    .left-comps-container {
      border: 1px blueviolet solid;
      width: 2.6rem;

      .comp-button {
        @include flex-center;
        width: 1.15rem;
        height: 0.28rem;
        font-size: 0.13rem;
        color: rgb(48, 49, 51);
        background: rgb(241, 242, 243);
        cursor: pointer;
      }
    }

    .center-editor {
      border: 1px hotpink solid;
      width: 13.56rem;
    }

    .right-edited-container {
      border: 1px forestgreen solid;
      width: 3rem;
    }
  }
}

.components-draggable {
  padding-bottom: 20px;
}

.components-item {
  display: inline-block;
  width: 48%;
  height: 50px;
  font-size: 14px;
  transition: transform 0ms !important;
}

.components-title {
  font-size: 16px;
}
</style>