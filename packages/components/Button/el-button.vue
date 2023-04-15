<template>
  <!-- <el-button :type="type" :size="size">
    {{ domProps.innerHTML }}
  </el-button> -->
  <el-button>哈哈哈哈</el-button>
</template>
<script setup lang="ts">
// import { ElButton } from "element-plus";
import { toRefs } from "vue";
const props = defineProps(["currentItem", "layout"]);
const { type, size, domProps } = toRefs(props.currentItem);
</script>