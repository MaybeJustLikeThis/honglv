import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../view/Home.vue";
import Data from "../components/Home-Data/data.vue";
import Routes from "../components/Home_routes(xjb)/routes.vue";
import Login from "../view/login.vue";
import Home_routes from "../components/Home_routes(xjb)/routes.vue";
import Home_routes_news from "../view/News.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/routes",
      component: Routes,
    },
    {
      path: "/data",
      component: Data,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/home_routes",
      component: Home_routes,
    },
    {
      path: "/home_routes_news",
      component: Home_routes_news,
    },
  ],
});

export default router;
