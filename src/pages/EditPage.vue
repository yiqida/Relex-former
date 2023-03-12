<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header class="flex justify-end items-center">
        <el-button type="">保存</el-button>
        <el-button>清空</el-button>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
import { ElContainer, ElAside, ElHeader, ElMain, ElButton } from "element-plus";
export default {
  components: {
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElButton
  },
  setup() {},
};
</script>
