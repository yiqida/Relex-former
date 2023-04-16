<template>
  <div class="editor-page-wrapper">
    <div class="nav-header"></div>
    <div class="editor-container">
      <div class="left-comps-container">
        <div v-for="(item, listIndex) in lib.libs" :key="listIndex">
          <div class="components-title">
            {{ item.title }}
          </div>
          <draggable class="components-draggable" :list="item.list"  :group="{
            name: dragableGroup,
            pull: 'clone',
            put: false
          }" item-key="__config__.label" :sort="false">
            <template #item="{ element }">
              <div class="components-item">
                {{ element.__config__.label }}
              </div>
            </template>>
          </draggable>

        </div>
      </div>
      <div class="center-editor">
        <el-row :gutter="formConf.gutter" class="h-full">
          <el-form class="w-full h-full" :size="formConf.size" :label-position="formConf.labelPosition"
            :label-width="formConf.labelWidth + 'px'">
            <draggable class="drawing-board h-full" :list="drawingList" :animation="340" group="componentsGroup">
              <template #item="{ element }">
                <div :drawing-list="drawingList" :current-item="element">
                  {{ element.__config__.label }}
                </div>
              </template>
            </draggable>
          </el-form>
        </el-row>
      </div>
      <div class="right-edited-container"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElRow, ElForm } from "element-plus";
import { formConf } from "../../common/rootFormConfig";
import draggable from 'vuedraggable'
import lib from '@relax-former/components'
const drawingList = reactive<any>([])
const dragableGroup = ref('componentsGroup')
</script>

<style lang="scss">
$nav-height: 1rem;

.editor-page-wrapper {
  border: 1px red solid;

  .nav-header {
    height: $nav-height;
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
  transition: transform 0ms !important;
}
</style>