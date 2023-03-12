import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "edit",
    component: () => import(/* webpackChunkName: "edit" */'../pages/EditPage.vue')
  },
  {
    path: "/runtime",
    name: "runtime",
    component: () => import(/* webpackChunkName: "runtime" */'../pages/RunTime.vue')
  }
];


export const router = createRouter({
    history: createWebHistory(),
    routes
})