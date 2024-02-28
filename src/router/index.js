import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../view/Home.vue";
import Data from "../components/Home-Data/data.vue";
import Routes from "../components/Home_routes(xjb)/routes.vue";
import Login from "../view/login.vue";
import Home_routes from "../components/Home_routes(xjb)/routes.vue";
import Home_routes_news from "../view/News.vue";
import Home_show from "../view/Rank.vue";
import Blog from "../view/Blog.vue";
import home_show_hotel from "../view/Rank_2.vue";
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
    {
      path: "/home_show",
      component: Home_show,
    },
    {
      path: "/blog",
      component: Blog,
    },
    {
      path: "/home_show_hotel",
      component: home_show_hotel,
    },
  ],
});

export default router;
