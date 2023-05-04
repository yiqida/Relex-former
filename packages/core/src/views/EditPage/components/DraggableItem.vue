<template>
    <ElCol v-if="grid" :span="span" @click="handleActiveItem" :class="className">
        <component :is="def" :current-item="currentItem" layout="editor" :index="index"></component>
    </ElCol>
    <div v-else @click="handleActiveItem" :class="className">
        <component :is="def" :current-item="currentItem" layout="editor" :index="index"></component>
    </div>
</template>
<script setup lang="ts">
import { ElCol } from "element-plus";
const props = defineProps<{
    currentItem: any,
    activeId: number,
    index: number,
    drawingList: any[]
}>()

const emit = defineEmits(['activeItem'])

const config = props.currentItem.__config__ as any;
const {
    needBorder,
    formId,
    grid,
    span,
    def
} = config;
let className = '';
if (needBorder) {
    className =
        props.activeId === formId ? 'drawing-row-item active-from-item' : 'drawing-row-item';
} else {
    className = props.activeId === formId ? 'drawing-item active-from-item' : 'drawing-item';
}

const handleActiveItem = () => {
    emit('activeItem', props.currentItem)
}
</script>