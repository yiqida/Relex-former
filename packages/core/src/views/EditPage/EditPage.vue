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
    <div class="editor-container">
      <div class="left-comps-container">
        <div v-for="(item, listIndex) in lib.libs" :key="listIndex">
          <div class="components-title">
            {{ item.title }}
          </div>
          <draggable class="components-draggable" :list="item.list" :group="{
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
      <div class="center-editor">
        <el-row :gutter="formConf.gutter" class="h-full">
          <el-form class="w-full h-full" :size="formConf.size" :label-position="formConf.labelPosition"
            :label-width="formConf.labelWidth + 'px'">
            <draggable class="drawing-board h-full" :list="drawingList" :animation="340" group="componentsGroup">
              <template #item="{ element, index }">
                <DraggableItem :list="drawingList" :current-item="element" :active-id="activeId" :index="index"
                  @copyItem="copyItem" @deleteItem="deleteItem" @handleActiveItem="activeFormItem" />
              </template>
            </draggable>
          </el-form>
        </el-row>
      </div>
      <div class="right-edited-container">
        <AttributePannel :active-data="activeData"></AttributePannel>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { ElRow, ElForm, ElMessageBox } from "element-plus";
import { Delete, Finished } from '@element-plus/icons-vue'
import { formConf } from "../../common/rootFormConfig";
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
    "__config__":{
        "tag":"el-demo-block",
        "tagIcon":"list-view",
        "label":"标题面板",
        "needBorder":true,
        "children":[

        ],
        "draggGroup":"blockGroup",
        "header":[

        ],
        "visibleOn":"",
        "tip":"",
        "formId":101,
        "renderKey":"1011684720877373",
        "componentName":"myVar101"
    },
    "title":"一级页面不需要面包屑",
    "id":101,
    "__children__":[

    ],
})

watch(activeData, () => {
  console.log('activeData changed!')
},{
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
$nav-height: 1rem;

.editor-page-wrapper {

  .nav-header {
    box-sizing: border-box;
    border-bottom: 1px solid #f1e8e8;
  }

  .editor-container {
    display: flex;
    min-height: calc(100vh - $nav-height);

    .left-comps-container {
      border: 1px blueviolet solid;
      width: 2.6rem;

      .comp-button {
        @include flex-center;
        width: 1.15rem;
        height: 0.28rem;
        font-size: 0.13rem;
        color: rgb(48, 49, 51);
        background: rgb(241, 242, 243);
        cursor: pointer;
      }
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

.components-draggable {
  padding-bottom: 20px;
}

.components-item {
  display: inline-block;
  width: 48%;
  height: 50px;
  font-size: 14px;
  transition: transform 0ms !important;
}

.components-title {
  font-size: 16px;
}
</style>