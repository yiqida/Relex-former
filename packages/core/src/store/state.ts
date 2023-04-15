import type { Component } from "vue"

export default {
  compsMap: new Map()
}

export interface State {
  compsMap: CompsMap
}

export type CompsMap = Map<string, () => Promise<Component>>
