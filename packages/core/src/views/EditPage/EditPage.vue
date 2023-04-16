<template>
  <!-- <div class="text-center">哈哈哈哈</div> -->
  <div class="editor-page-wrapper">
    <div class="nav-header"></div>
    <div class="editor-container">
      <div class="left-comps-container">
        <Container @drop="onDrop" orientation="vertical" group-name="1">
          <Draggable class="drop-list" v-for="(compCreator, compName) in compsMap" :key="compName">
            <div class="comp-button" @click="showComp(compCreator)">{{ compName }}</div>
          </Draggable>
        </Container>

      </div>
      <div class="center-editor">
        <el-row :gutter="formConf.gutter">
          <el-form :size="formConf.size" :label-position="formConf.labelPosition"
            :label-width="formConf.labelWidth + 'px'">
            <Container @drop="onDrop" orientation="vertical" group-name="1">
              <Draggable class="drop-list" v-for="(item, index) in drawingList" :key="index">
                <div class="drop-item">
                  <span>{{ item.name }}</span>
                </div>
              </Draggable>
            </Container>
          </el-form>
        </el-row>
        <div style="border: 2px red solid">
          <component v-if="showComponent" :is="Component"></component>
        </div>
      </div>
      <div class="right-edited-container"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, type Component, reactive } from 'vue'
import { ElRow, ElForm } from "element-plus";
import { Container, Draggable } from "vue3-smooth-dnd";
import type { CompInviter } from '@/store/index'
import { formConf } from "../../common/rootFormConfig";
import { useLeftCompsList } from './hooks/useLeftCompsList'
import draggable from 'vuedraggable'


const { compsMap } = useLeftCompsList()
const drawingList = reactive<any>([])

const showComponent = ref<Component | null>()

async function showComp(compCreator?: CompInviter) {
  showComponent.value = typeof compCreator === 'function' ? await compCreator() : null
}


onMounted(() => {
  console.log(123)
})

function onDrop(dropResult: any) {
  console.log(dropResult, '----')
  drawingList.value = applyDrag(drawingList.value, dropResult)
}
function applyDrag(arr: any, dragResult: any) {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;
  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }
  return result;
}
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
</style>