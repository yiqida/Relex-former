export const renderChildren = (h, currentItem, getComps, callback, scope = {}) => {
  const config = currentItem.__config__;
  if (!Array.isArray(config.children)) return null;
  return config.children.map((el, i) => {
    // 添加父元素
    if (currentItem.formRef) {
      el.__config__.parentRef = currentItem.formRef;
      el.__config__.parentFormModel = currentItem.formModel;
    }
    if (currentItem.__config__.tag === 'el-row' && currentItem.__config__.parentRef) {
      el.__config__.parentRef = currentItem.__config__.parentRef;
      el.__config__.parentFormModel = currentItem.__config__.parentFormModel;
    }
    if (
      currentItem.__config__.tag === 'el-filter' ||
      currentItem.__config__.parentTag === 'el-filter'
    ) {
      el.__config__.parentTag = 'el-filter';
    }
    if (!el.__config__.draggGroup) {
      el.__config__.draggGroup = config.draggGroup;
    }
    return getComps(h, el, {
      index: i,
      list: config.children,
      callback,
      scope
    });
  });
};

export const renderHeader = (h, currentItem, getComps) => {
  const config = currentItem.__config__;
  if (!Array.isArray(config.header)) return null;
  return config.header.map((el, i) =>
    getComps(h, el, {
      index: i,
      list: config.header
    })
  );
};

// 深拷贝对象
export function deepClone(obj) {
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

  // eslint-disable-next-line no-nested-ternary
  const result = Array.isArray(obj) ? [] : obj.constructor ? new obj.constructor() : {};

  Object.keys(obj).forEach((key) => {
    result[key] = deepClone(obj[key]);
  });
  return result;
}

// 首字母大小
export function titleCase(str) {
  return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

export function formatDate(date, vueType) {
  if (!date) {
    return '';
  }
  return vueType === 'vue3'
    ? date.replace(/(y+|d+)/g, ($1) => {
      return $1.toUpperCase();
    })
    : date;
}

export function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

//处理校验规则数组
export function rulesRender(rules) {
  const realRules = [];
  const pick = (obj, arr) =>
    arr?.reduce((iter, val) => (val in obj && (iter[val] = obj[val]), iter), {});
  rules?.forEach((item) => {
    if (item.checked === true && item.ruleType == 'Required') {
      var result = pick(item, ['required', 'message', 'trigger']);
      realRules.push(result);
    }
    if (item.checked === true && item.ruleType == 'Type') {
      var result = pick(item, ['type', 'message', 'trigger']);
      realRules.push(result);
    }
    if (item.checked === true && item.ruleType == 'validator') {
      var result = pick(item, ['validator', 'message', 'trigger']);
      realRules.push(result);
    }
  });
  return realRules;
}

export const exportDefault = 'export default ';

/**
 *
 * @param {*} data
 * @param {*} tableEditChild
 */
export function convertData(data, tableEditChild) {
  for (let item of data || []) {
    let tmp = findData(tableEditChild, item.id);
    item.label = tmp.label || '';
    item.prop = tmp.prop || '';
    item.width = tmp.width || '';
    item.fixed = tmp.fixed || '';
    item.align = tmp.align || '';
    if (item?.children?.length) {
      convertData(item.children, tableEditChild);
    }
  }
}
/**
 *
 * @param {*} editData
 * @param {*} id
 * @returns
 */
export function findData(editData, id) {
  for (const item of editData || []) {
    if (item.id === id) {
      return item;
    }
  }
  return null;
}
/**
 *
 * @param {*} d
 * @returns
 */
export function fillData(data) {
  let id = 1;
  const __ = (data) => {
    let res = [];
    for (const item of data || []) {
      if (item?.children?.length) {
        let tmp = __(item.children);
        res.push({
          __config__: {
            tag: 'el-table-column',
            type: 'content'
          },
          id: id++,
          label: item.label,
          slotCode: '',
          width: '',
          fixed: '',
          align: '',
          children: tmp
        });
      } else {
        res.push({
          __config__: {
            tag: 'el-table-column',
            type: 'content'
          },
          id: id++,
          prop: item.prop,
          label: item.label,
          slotCode: '',
          width: '',
          fixed: '',
          align: '',
          children: []
        });
      }
    }
    return res;
  };
  return __(data);
}
/**
 *
 * @param {*} data
 * @returns
 */
export const flatData = (data) => {
  let res = [];
  const __ = (data) => {
    for (const item of data || []) {
      res.push(item);
      if (item?.children?.length) __(item.children);
    }
  };
  __(data);
  return res;
};

const bailRE = /[^\w.\-$]/;
export const parsePath = (path) => {
  if (bailRE.test(path)) {
    return function () { };
  }
  const segments = path.split('.');
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]];
    }
    return obj;
  };
};

/**
 * 值转换函数
 * @param {*} code
 * @returns
 */

export function dataPipeParseV2(code) {
  const { content, params } = parseFunction(code?.jsCode);
  let paramsArr = []
  if (params) {
    paramsArr = params.replace(/\s/g, '').split(',');
  }
  return new Function(...paramsArr, content);
}

/**
 * 函数解析
 * @param {*} funcString
 * @returns
 */
export function parseFunction(funcString) {
  if (!funcString) {
    return {};
  }
  const name = funcString
    ?.slice(funcString?.indexOf('function'), funcString?.indexOf('('))
    ?.replace('function ', '');
  // 去除注释
  funcString = funcString.replace(/^\s*\/\/.*/mg, '')
  const params = funcString?.match(/\([^()]*\)/g)?.[0]?.slice(1, -1);
  const content = funcString?.slice(funcString?.indexOf('{') + 1, funcString?.lastIndexOf('}'));
  return {
    params,
    content,
    name
  };
}


export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

export function isNumber(obj) {
  return Object.prototype.toString.call(obj) === '[object Number]'
}

export function isBoolean(obj) {
  return Object.prototype.toString.call(obj) === '[object Boolean]'
}
