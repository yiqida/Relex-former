<template>
  <el-form-item :label="desc.label">
    <component :is="desc.type" :desc="desc" v-model:value="value"></component>
  </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'
import type { EditItem, ActiveData } from '@/types/schema'
interface Props {
  desc: EditItem
  model: ActiveData
}

const props = withDefaults(defineProps<Props>(), {
  desc: () => ({} as EditItem),
  model: () => ({} as ActiveData)
})

function parsePath(path?: string) {
  if (!path) return function () { }

  if (/[^\w.\-$]/.test(path)) {
    return function () { };
  }

  const segments = path.split('.'); // __config__  visibleOn

  return (obj: ActiveData) => {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      const key = segments[i];

      if (obj[key] === undefined) {
        if (key === 'disabled') {
          obj[key] = false
        } else {
          obj[key] = ''
        }
      }
      // obj = obj[key];
      obj = Reflect.get(obj, key);
    }
    return obj;
  };
}


const value = computed({
  get() {
    return parsePath(props.desc.model)(props.model);
  },
  set(val: any) {
    let model = props.model;
    try {
      if (props.desc.model) {
        // 支持带横杠的show-password赋值
        const arr = props.desc.model.toString().split('.');
        const newArr = arr.map((item: any) => {
          let hasBar = item.indexOf('-');
          if (hasBar >= 0) {
            item = `['${item}']`;
          }
          return item;
        });
        let descModel = newArr.join('.');
        descModel.replace(/.(?=\[)/, '');
        const firstBraces = descModel.indexOf('[');
        if (firstBraces !== 0) {
          descModel = `.${descModel}`;
        }
        eval(`model${descModel}=val`);
      } else {
        model = val;
      }
    } catch (err) {
      console.error(err, 'error');
    }
  }
})
</script>

<script lang="ts">
import divider from '@/components/editor/divider.vue'
import edString from '@/components/editor/edString.vue'

export default {
  components: {
    divider,
    edString
  }
}
</script>
