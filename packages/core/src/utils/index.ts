import { isReactive } from 'vue'

// 深拷贝对象
export function deepClone(obj: any) {
  const _toString = Object.prototype.toString;

  // null, undefined, non-object, function
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  // DOM Node
  if (obj.nodeType && 'cloneNode' in obj) {
    return obj.cloneNode(true);
  }

  // Date
  if (_toString.call(obj) === '[object Date]') {
    return new Date(obj.getTime());
  }

  // 函数
  if (_toString.call(obj) === '[object Function]') {
    //  返回函数
    return obj.prototype.bind({});
  }

  // RegExp
  if (_toString.call(obj) === '[object RegExp]') {
    const flags = [];
    if (obj.global) {
        flags.push('g');
    }
    if (obj.multiline) {
        flags.push('m');
    }
    if (obj.ignoreCase) {
        flags.push('i');
    }

    return new RegExp(obj.source, flags.join(''));
  }

  const result = Array.isArray(obj) ? [] : obj.constructor ? new obj.constructor() : {};

  for (const key in obj) {
    result[key] = deepClone(obj[key]);
  }

  return result;
}

export function isEmpty(val: any) {
  return val === null || val === undefined
}

/**
 * 
 * @param obj 目标对象
 * @param path 基于目标对象的赋值路径 
 * @returns 需要赋的值
 * 
 * obj = { 
 *  msg: { 
 *    name: 'fangxiangming'
 *  }
 * },
 * 
 * path = ‘msg.name’
 * value: 'FDirector'
 * 执行后 obj.msg.name === 'FDirector'
 */
export function setValueByPath(obj: any, { path, val }: { path: string, val: any }) {
  const keys = path.toString().split('.');

  for (let i = 0; i < keys.length; i ++) {
    const key = keys[i]
    const reg = /(\[\w+\])+$/g
    
    if (reg.test(key)) {
      // 如果当前key中携带了中括号语法，拆解开，后面统一使用万能的中括号语法。 eg: __config__.arrProps[0][1][2]
      keys[i] = key.replace(reg, '') // 先将 arrProps[0][1][2] => arrProps
      const matched = key.match(reg)![0] // 匹配出 '[0][1][2]' 的部分
      const splitKeys = matched.split('[').map(item => item.replace(']', '')) // 将 '[0][1][2]' => ['', 0', '1', '2']
      splitKeys.shift() // 将 ['', 0', '1', '2'] => ['0', '1', '2']
      keys.splice(i + 1, 0, ...splitKeys) // 将 ['0', '1', '2'] 中所有成员插入‘arrProps’后 => ['__config__', 'arrProps',  0', '1', '2']
    }
  }

  let currDepthObj = obj

  keys.forEach((item: string, index: number) => {
    if (index === keys.length - 1) {
      // 因为当前item已经是最后一项，没有后续更多key的路径，故可直接赋值val
      currDepthObj[item] = val
    } else {
      if (!isReactive(currDepthObj[item])) {
        // 如果中间路径key遇到了非响应式数据，如：string、boolean、number，就将次key对应的值
        // 复写成空对象，以继续后面key的赋值，同时让当前阶段key对应的空对象具有响应式
        currDepthObj[item] = {}
      }
      currDepthObj = currDepthObj[item]
    }
  })

  return obj
}

/**
 * 
 * @param path 
 * 根据 path 路径从 obj 中取值。如果取不到会变成赋值，赋值固定位空字符串
 * @returns 取值结果
 */
export function parsePath(path?: string) {
  /**
   * 这个if不知道是干什么的
   */
  if (isEmpty(path)) return function() {}

  if (/[^\w.\-$]/.test(path!)) {
    return function() {};
  }

  const segments = `${path}`.split('.'); // __config__  visibleOn

  return (obj: any) => {
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
      obj = obj[key];
    }
    return obj;
  };
}

  