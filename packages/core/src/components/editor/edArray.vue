<template>
  <div class="ed-array-wrapper">
    <el-collapse v-model="activeCollapse">
      <el-collapse-item
        class="array-item"
        v-for="(item, index) in edObjectConfigWithLabel"
        :key="index"
        :name="index"
      >
        <!-- <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div> -->
        <!--这里才是Editor，这一层基本上只有edObject-->
        <editor-item :desc="item" :model="modelValue" @update="updateCom"></editor-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, defineProps, withDefaults, computed, defineEmits, onMounted } from 'vue'
import type { EditItem } from '@/types/schema'
import EditorItem from '@/views/EditPage/components/EditorItem.vue' 

interface Props {
  modelValue: any[]
  desc: EditItem
}

const emits = defineEmits<Emits>()

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ([]),
  desc: () => ({} as EditItem)
})

const activeCollapse = ref(['1'])

const edObjectConfigWithLabel = computed(() => {
  let edArrayItem = props.desc.item // edArray 的成员 schema，即 edObject 的 schema。edArray的设定是只能有一种类型的成员，这里成员都是 edObject
  let columnConfigs = props.modelValue // 列schema，数据源头来自 el-table 的 __config__.children
  let res: any[] = []

  columnConfigs.forEach((config, index) => {
    res.push(
      Object.assign({}, edArrayItem, {
        label: edArrayItem.label || '',
        model: index // 主要是创建多个 edObject schema 的浅拷贝，并分配model。因为 Editor 组件必须需要 model 来告知内部的 edObject 修改的是哪个 el-column config
      })
    )
  })

  return res
})

const defaultObj = reactive({} as any)

onMounted(() => {
  const valueTypes = props.desc?.valueType
  
  if (valueTypes) {
    valueTypes.options?.forEach((item: any, index: any) => {
      defaultObj[index] = item.default
    })
  }
})

onMounted(() => {
  console.log('--edArray mounted--')
  console.log('edObjectConfigWithLabel', edObjectConfigWithLabel.value)
  console.log('defaultObj', defaultObj)
  console.log('++++++++++++++++++++')
  console.log()
})

function updateCom() {
  console.log('updateCom')
}
</script>

<style lang="scss" scoped>
.array-editor {
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  border: 1px solid #dcdfe6;
  padding: 10px;
  border-radius: 4px;
}

// .array-item {
//   border-top: 2px solid #595959;
// }
.el-collapse-item__header {
  height: 30px;
  line-height: 30px;
}

.label {
  width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.el-collapse {
  border-top: none;
  border-bottom: none;
}

.array-item-extra {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.array-item-controls {
  display: flex;
}
.btn-control {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #409eff;
}

.btn-add {
  width: 100%;
  margin-top: 10px;
}

/* 控制数组层级样式 */
.array-item-extra {
  background-color: #e4e7ed;
}
:deep() .array-editor .array-item-extra {
  background-color: #ebeef5;
}
:deep() .array-editor .array-editor .array-editor .array-item-extra {
  background-color: #f2f6fc;
}
</style>