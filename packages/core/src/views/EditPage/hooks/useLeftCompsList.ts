import { useMapState } from "@/hooks/useMap"; 

export function useLeftCompsList() {
  const { compsMap } = useMapState(['compsMap'])

  // ...左侧组件列表相关逻辑封装

  return { compsMap }
}
