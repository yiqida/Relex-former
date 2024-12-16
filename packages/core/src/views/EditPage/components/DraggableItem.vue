<template>
    <div @click="handleActiveItem" class="drawing-item"
        :class="[activeId === formId ? 'active-item' : '', needBorder ? 'drawing-row-item' : '']">
        <component :is="def" :current-item="currentItem" layout="editor" :index="index"></component>
        <CopyAndDelete @copyItem="copyItem" @deleteItem="deleteItem" />
    </div>
</template>
<script setup lang="ts">
import CopyAndDelete from './CopyAndDelete.vue'
const props = defineProps<{
    currentItem: any
    activeId: string
    index: number
    list: any[]
}>()

const emit = defineEmits(['activeItem', 'copyItem', 'deleteItem'])

const config = props.currentItem.__config__ as any
const { needBorder, formId, def } = config

const handleActiveItem = () => {
    emit('activeItem', props.currentItem)
}
const copyItem = () => {
    emit('copyItem', props.currentItem, props.list)
}

const deleteItem = () => {
    emit('deleteItem', props.index, props.list)
}
</script>

<style lang="scss" scoped>
.drawing-item {
    position: relative;
    margin-top: 10px;
}

.drawing-row-item {
    cursor: move;
    box-sizing: border-box;
    border: 1px dashed rgba(0, 0, 0, 0.12);
    border-radius: 3px;
}

.active-item {
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