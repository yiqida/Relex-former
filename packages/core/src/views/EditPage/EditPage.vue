<template>
  <div class="editor-page-wrapper">
    <div class="nav-header flex justify-end items-center h-[42px] !pr-5">
      <el-button :icon="Finished" type="text">
        保存
      </el-button>
      <el-button class="delete-btn" :icon="Delete" type="text" @click="handleEmpty">
        清空
      </el-button>
    </div>
    <div class="body">
      <div class="left-boader">
        <div v-for="(item, listIndex) in lib.libs" :key="listIndex">
          <div class="text-base text-[#333] !mx-1 !my-[2px]">
            {{ item.title }}
          </div>
          <draggable class="pb-5" :list="item.list" :group="{
            name: dragableGroup,
            pull: 'clone',
            put: false
          }" item-key="__config__.label" :sort="false">
            <template #item="{ element }">
              <div class="components-item" @click="clickComps(element)">
                {{ element.__config__.label }}
              </div>
            </template>
          </draggable>
        </div>
      </div>
      <div class="center-board">
        <draggable class="drawing-board" :list="drawingList" :animation="340" group="componentsGroup">
          <template #item="{ element, index }">
            <DraggableItem :list="drawingList" :current-item="element" :active-id="activeId" :index="index"
              @copyItem="copyItem" @deleteItem="deleteItem" @handleActiveItem="activeFormItem" />
          </template>
        </draggable>
      </div>
      <AttributePannel class="w-[360px]" :active-data="activeData" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { ElMessageBox } from "element-plus";
import { Delete, Finished } from '@element-plus/icons-vue'
import draggable from 'vuedraggable'
import lib from '@relax-former/components'
import DraggableItem from './components/DraggableItem.vue'
import AttributePannel from './components/AttributePannel.vue';
import { deepClone } from '@/utils';
import { useMapMutations, useMapState } from '@/hooks/useMap';
import { SET_ACTIVE_DATA } from '@/store'

const drawingList = ref<any[]>([])
const dragableGroup = ref('componentsGroup')
let idGlobal = 100

function clickComps(element: any) {
  drawingList.value.push(element)
}

const createIdAndKey = (item: any) => {
  const config = item.__config__;
  config.formId = ++idGlobal;
  // 注：componentName仅为大纲树显示用
  if (config.layout === 'formItem') {
    item.__vModel__ = `field${idGlobal}`;
  } else if (config.layout === 'rowItem') {
    config.componentName = `row${idGlobal}`;
    !Array.isArray(config.children) && (config.children = []);
  } else if (config.layout === 'colTableItem') {
    item.__vModel__ = `table${idGlobal}`;
  } else {
    config.componentName = `myVar${idGlobal}`;
  }
  if (Array.isArray(config.children)) {
    config.children = config.children.map((childItem: any) => createIdAndKey(childItem));
  }
  return item;
}

const copyItem = (item: any, list: any[]) => {
  let clone = deepClone(item);
  clone = createIdAndKey(clone);
  list.push(clone);
  activeFormItem(clone);
}
const deleteItem = (index: number, list: any[]) => {
  list.splice(index, 1);
  nextTick(() => {
    const len = drawingList.value.length;
    if (len) {
      activeFormItem(drawingList.value[len - 1]);
    }
  });
}

const { activeData } = useMapState(['activeData'])
const { setActiveData } = useMapMutations({
  setActiveData: SET_ACTIVE_DATA
})

const activeId = ref(-1)

const activeFormItem = (currentItem: any) => {
  if (currentItem) {
    setActiveData(currentItem)
    activeId.value = currentItem.__config__.formId;
  } else {
    setActiveData({})
    activeId.value = -1;
  }
}

/**
 * 临时写，方便右侧编辑器开发
 */
setActiveData({
  "__config__": {
    "tag": "el-demo-block",
    "tagIcon": "list-view",
    "label": "标题面板",
    "needBorder": true,
    "children": [

    ],
    "draggGroup": "blockGroup",
    "header": [

    ],
    "visibleOn": "",
    "tip": "",
    "formId": 101,
    "renderKey": "1011684720877373",
    "componentName": "myVar101"
  },
  "title": "一级页面不需要面包屑",
  "id": 101,
  "__children__": [

  ],
})

watch(activeData, () => {
  console.log('activeData changed!')
}, {
  deep: true,
  flush: 'sync'
})


const handleEmpty = async () => {
  await ElMessageBox.alert('确定要清空所有组件吗？', '提示', {
    callback: () => {
      drawingList.value = [];
    }
  })
}
</script>

<style lang="scss" scoped>
$selectedColor: #f6f7ff;
$lighterBlue: #409eff;

.editor-page-wrapper {
  .nav-header {
    box-sizing: border-box;
    border-bottom: 1px solid #f1e8e8;
  }

  .body {
    display: flex;
    height: calc(100vh - 42px);

    .left-boader {
      width: 260px;
      overflow-y: scroll;
    }

    .center-board {
      border-left: 1px solid #f1e8e8;
      border-right: 1px solid #f1e8e8;
      flex: 1;
      box-sizing: border-box;
    }
  }
}

.components-item {
  display: inline-block;
  width: 48%;
  margin: 1%;
  height: 50px;
  font-size: 14px;
  line-height: 50px;
  text-align: center;
  background: $selectedColor;
  cursor: move;
  border: 1px dashed $selectedColor;
  border-radius: 3px;

  &:hover {
    border: 1px dashed #787be8;
    color: #787be8;
  }
}


.drawing-board {
  height: 100%;
  position: relative;
  overflow: scroll;
  padding: 0 10px;
  padding-bottom: 200px;

  &:first-child {
    margin-top: 10px;
  }

  .active-from-item {
    &>.el-form-item {
      background: $selectedColor;
      border-radius: 6px;
    }

    &>.drawing-item-copy,
    &>.drawing-item-delete {
      display: initial;
    }

    &>.component-name {
      color: $lighterBlue;
    }
  }
}
</style>