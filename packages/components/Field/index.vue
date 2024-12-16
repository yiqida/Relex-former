<template>
  <Field :label="config.label" :placeholder="placeholder" :clearable="clearable" :prefixIcon="prefixIcon"
    :suffixIcon="suffixIcon" :showWordLimit="showWordLimit" :showPassword="showPassword" :disabled="disabled"
    :required="required" :type="type" :autosize="autosize" />
</template>

<script setup lang="ts">
import { rulesRender } from '../utils/utils';
import { Field } from 'vant';
import { computed } from "vue";
const props = defineProps(['currentItem', 'layout', 'index', 'groupVModel'])
const {
  __vModel__,
  __config__: config,
  placeholder,
  clearable,
  'prefix-icon': prefixIcon,
  'suffix-icon': suffixIcon,
  maxlength,
  'show-word-limit': showWordLimit,
  'show-password': showPassword,
  disabled,
  readonly,
  required,
  type,
  autosize
} = props.currentItem;
// export default {
//   props: ['currentItem', 'layout', 'index', 'groupVModel'],
//   computed: {
//     realRules() {
//       return rulesRender(this.currentItem?.__config__?.rules?.filter(item => item.checked));
//     }
//   },
//   render() {
//     const {
//       __vModel__,
//       __config__: config,
//       placeholder,
//       clearable,
//       'prefix-icon': prefixIcon,
//       'suffix-icon': suffixIcon,
//       maxlength,
//       'show-word-limit': showWordLimit,
//       'show-password': showPassword,
//       disabled,
//       readonly,
//       required,
//       type,
//       autosize
//     } = this.currentItem;
//     let labelWidth = config.labelWidth ? `${config.labelWidth}px` : null;
//     const name = this.groupVModel ? `${this.groupVModel}.${this.index}.${__vModel__}` : __vModel__;
//     return (
//       <Field
//         style={config.style}
//         label-width={labelWidth}
//         label={config.label}
//         name={name}
//         rules={this.realRules}
//         v-model={config.defaultValue}
//         placeholder={placeholder}
//         clearable={clearable}
//         left-icon={prefixIcon}
//         right-icon={suffixIcon}
//         maxlength={maxlength}
//         show-word-limit={showWordLimit}
//         show-password={showPassword}
//         disabled={disabled}
//         readonly={readonly}
//         type={type}
//         autosize={autosize}
//         required={required}
//       ></Field>
//     );
//   }
// };
</script>
