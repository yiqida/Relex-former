<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header class="flex justify-end items-center">
        <el-button type="">保存</el-button>
        <el-button>清空</el-button>
      </el-header>
      <el-main>
        <el-row :gutter="formConf.gutter">
          <el-form :size="formConf.size" :label-position="formConf.labelPosition" :disabled="formDisabled" :label-width="formConf.labelWidth + 'px'" :model="homeModel">
            <Container @drop="onDrop" orientation="vertical">
              <Draggable class="drop-list" v-for="(item,index) in list" :key="index">
                <div class="drop-item">
                  <span>{{item.name}}</span>
                </div>
              </Draggable>
            </Container>
          </el-form>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { ElContainer, ElAside, ElHeader, ElMain, ElButton } from "element-plus";
import { Container, Draggable } from "vue3-smooth-dnd";

import { formConf } from "@/common/rootFormConfig";
import { ref } from 'vue'
export default {
  components: {
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElButton,
    Container,
    Draggable,
  },
  setup() {
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
    function onDrop (dropResult) {
      list.value = applyDrag(list.value, dropResult)
    }
    function applyDrag(arr, dragResult){
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
    return {
      formConf,
      list,
      onDrop
    };
  },
};
</script>
