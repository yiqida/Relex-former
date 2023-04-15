import type { Component } from 'vue'

export interface LibExported {
  name?: string
  libs: CompGroupItem[]
}

export interface CompGroupItem {
  title: string
  list?: ComponentSchema[]
}

export interface ComponentSchema { // 组件库导出的单个组件应有的schema标准格式
  __config__: Config
  domProps?: DomProps
  type?: string
  size?: string
  style?: Style
  edit: any[]
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
