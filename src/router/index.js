import { createRouter, createWebHistory } from 'vue-router'
import edit from "../pages/Edit.vue";

const routes = [
  {
    path: "/",
    name: "edit",
    component: edit,
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