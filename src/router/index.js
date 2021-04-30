import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: () => "Home",
    },
    alias: '/pricing'
  },
  {
    path: "/auth/:type",
    name: "AuthApp",
    component: () =>
      import(/* webpackChunkName: "AuthApp" */ "../apps/AuthApp.vue"),
    meta: {
      title: () => "Auth App",
    },
  },
  {
    path: "/dashboard",
    name: "DashboardApp",
    component: () =>
      import(/* webpackChunkName: "DashboardApp" */ "../apps/DashboardApp.vue"),
    meta: {
      title: () => "Dashboard App",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
