import type { Component } from "vue"
// import type { CompsMap } from './index'

export default {
  compsMap: {}
}

export interface State {
  compsMap: CompsMap
}

export interface CompsMap {
  [props: string]: () => Promise<Component>
}

export type CompInviter = () => Promise<Component>
