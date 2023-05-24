import type { Component } from "vue"
import type { ActiveData } from "@/types/schema"
// import type { CompsMap } from './index'

export default {
  compsMap: {},
  activeData: {}
}

export interface State {
  compsMap: CompsMap
  activeData: ActiveData
}

export interface CompsMap {
  [props: string]: () => Promise<Component>
}

export type CompInviter = () => Promise<Component>
