import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { HomePage, VuetifyPage, TestPage, CrudPage } from "../pages";

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
  {
    path: "/crud",
    name: "crud",
    component: CrudPage,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
