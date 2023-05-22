import type { PlainObj } from './common'

import type { Component } from 'vue'

export interface LibExported {
  name?: string
  libs: CompGroupItem[]
}

export interface CompGroupItem {
  title: string
  list?: ComponentSchema[]
}

export interface EditItem extends PlainObj {
  type: string
  name?: string
  label?: string
}

export interface ComponentSchema { // 组件库导出的单个组件应有的schema标准格式
  __config__: Config
  domProps?: DomProps
  type?: string
  size?: string
  style?: Style
  edit: EditItem[]
}

export interface Config {
  def: () => Promise<Component>
  label: string
  tag: string
  tagIcon: string
  grid: boolean
  action: any[]
}

export interface DomProps {
  innerHTML: string
}

export interface Style {
  marginLeft?: string
  marginTop?: string
  marginBottom?: string
}


export type SchemaChildren = PlainObj

export interface SchemaConfig extends PlainObj {
  tag: string;
  tagIcon?: string;
  label?: string;
  needBorder?: boolean;
  children?: SchemaChildren;
  visibleOn?: string; // string类型的表达式
  formId?: number;
  renderKey?: string;
}

export interface BaseSchema extends PlainObj {
  __config__: SchemaConfig;
  __children__?: SchemaChildren;
  id?: number;
}

export interface ActiveData extends BaseSchema {
}
