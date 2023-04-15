<template>
  <div class="editor-page-wrapper">
    <div class="nav-header"></div>
    <div class="editor-container">
      <div class="left-comps-container"></div>
      <div class="center-editor">
        <el-row :gutter="formConf.gutter">
          <el-form :size="formConf.size" :label-position="formConf.labelPosition"
            :label-width="formConf.labelWidth + 'px'">
            <Container @drop="onDrop" orientation="vertical">
              <Draggable class="drop-list" v-for="(item, index) in list" :key="index">
                <div class="drop-item">
                  <span>{{ item.name }}</span>
                </div>
              </Draggable>
            </Container>
          </el-form>
        </el-row>
      </div>
      <div class="right-edited-container"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ElRow, ElForm } from "element-plus";
import { Container, Draggable } from "vue3-smooth-dnd";
import { formConf } from "../../common/rootFormConfig";


onMounted(() => {
  console.log(123)
})
const list = ref([
  {
    name: "红",
  },
  {
    name: "绿",
  },
  {
    name: "蓝",
  },
]);
function onDrop(dropResult: any) {
  list.value = applyDrag(list.value, dropResult)
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