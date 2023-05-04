<template>
    <span class="drawing-item-copy" title="复制" @click="copyItem">
        <el-icon>
            <CopyDocument />
        </el-icon>
    </span>
    <span class="drawing-item-delete" title="删除" @click="deleteItem">
        <el-icon>
            <Delete />
        </el-icon>
    </span>
</template>

<script setup lang="ts">
import { ElIcon } from 'element-plus'
import { CopyDocument, Delete } from '@element-plus/icons-vue'
const emit = defineEmits(['copyItem', 'deleteItem'])
const copyItem = () => {
    emit('copyItem')
}
const deleteItem = () => {
    emit('deleteItem')
}
</script>

<style lang="scss" scoped>
$lighterBlue: #409eff;

.drawing-item-copy,
.drawing-item-delete {
    /* display: none; */
    position: absolute;
    top: -10px;
    width: 22px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    border-radius: 50%;
    font-size: 12px;
    border: 1px solid;
    cursor: pointer;
    z-index: 1;
}

.drawing-item-copy {
    right: 32px;
    border-color: $lighterBlue;
    color: $lighterBlue;
    background: #fff;

    &:hover {
        background: $lighterBlue;
        color: #fff;
    }
}

.drawing-item-delete {
    right: 0px;
    border-color: #f56c6c;
    color: #f56c6c;
    background: #fff;

    &:hover {
        background: #f56c6c;
        color: #fff;
    }
}
</style>