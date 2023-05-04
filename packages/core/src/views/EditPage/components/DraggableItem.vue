<template>
    <ElCol v-if="grid" :span="span" @click="handleActiveItem" :class="className">
        <component :is="def" :current-item="currentItem" layout="editor" :index="index"></component>
        <CopyAndDelete />
    </ElCol>
    <div v-else @click="handleActiveItem" :class="className">
        <component :is="def" :current-item="currentItem" layout="editor" :index="index"></component>
        <CopyAndDelete />
    </div>
</template>
<script setup lang="ts">
import { ElCol } from 'element-plus'
import CopyAndDelete from './CopyAndDelete.vue'
const props = defineProps<{
    currentItem: any
    activeId: number
    index: number
    drawingList: any[]
}>()

const emit = defineEmits(['activeItem'])

const config = props.currentItem.__config__ as any
const { needBorder, formId, grid, span, def } = config
let className = 'drawing-item'
if (props.activeId === formId) {
    className += ' active-from-item'
}
if (needBorder) {
    className += ' drawing-row-item'
}

const handleActiveItem = () => {
    emit('activeItem', props.currentItem)
}
</script>

<style lang="scss" scoped>

.drawing-item {
    position: relative;
}
.drawing-row-item {
    cursor: move;
    box-sizing: border-box;
    border: 1px dashed rgba(0, 0, 0, 0.12);
    border-radius: 3px;
}

.active-from-item {
    &>.el-form-item {
        background: #f6f7ff;
        border-radius: 6px;
    }

    &>.drawing-item-copy,
    &>.drawing-item-delete {
        display: initial;
    }
}
</style>