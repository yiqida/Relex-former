const routes = [
  {
    path: "/",
    name: "edit",
    component: () => import('../views/EditPage/EditPage.vue')
  },
  {
    path: "/runtime",
    name: "runtime",
    component: () => import('../views/RunTime/RunTime.vue')
  }
];

export default routes;
