import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/vuetify",
    name: "vuetify",
    component: () => import("../pages/VuetifyPage.vue"),
  },
  {
    path: "/props",
    name: "props",
    component: () => import("../pages/propspage/PropsPage.vue"),
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("../pages/todopage/TodoPage.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
