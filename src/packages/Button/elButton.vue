<template>
  <el-button :type="type" :size="size">
    {{ domProps.innerHTML }}
  </el-button>
</template>
<script setup>
import { ElButton } from "element-plus";
import { toRefs } from "vue";
const props = defineProps(["currentItem", "layout"]);
const { type, size, domProps } = toRefs(props.currentItem);
</script>