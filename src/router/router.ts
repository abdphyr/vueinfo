import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { HomePage, VuetifyPage, TestPage } from "../pages";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/vuetify",
    name: "vuetify",
    component: VuetifyPage,
  },
  {
    path: "/test",
    name: "test",
    component: TestPage,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
