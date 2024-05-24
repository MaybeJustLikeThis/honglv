import { createRouter, createWebHashHistory } from "vue-router";

import Routes from "../components/Home_routes(xjb)/routes.vue";
import Home_routes from "../components/Home_routes(xjb)/routes.vue";
import Home_routes_news from "../view/News.vue";
import home_show_hotel from "../view/Rank_2.vue";
import AdminCenter from "../view/AdminCenter.vue";
// import PersonalCenter from "../view/PersonalCenter.vue"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/honglv/home",
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/view/Alert.vue"),
    },
    {
      path: "/honglv",
      redirect: "/honglv/home",
      component: () => import("@/view/Home.vue"),
      name: "首页",
      children: [
        {
          path: "blog",
          name: "上传博客",
          component: () => import("@/view/BlogEdit/BlogEdit.vue"),
          redirect: "/honglv/blog/spot",
          children: [
            {
              path: "spot",
              name: "景点",
              component: () =>
                import("@/view/BlogEdit/UploadingViews/spot.vue"),
            },
            {
              path: "CulturalArt",
              name: "文创",
              component: () =>
                import("@/view/BlogEdit/UploadingViews/CulturalArt.vue"),
            },
            {
              path: "hotel",
              name: "酒店",
              component: () =>
                import("@/view/BlogEdit/UploadingViews/hotel.vue"),
            },
            // {
            //   path: "food",
            //   name: "美食",
            //   component: () =>
            //     import("@/view/BlogEdit/UploadingViews/food.vue"),
            // },
            {
              path: "path",
              name: "路线",
              component: () =>
                import("@/view/BlogEdit/UploadingViews/path.vue"),
            },
            {
              path: "strategy",
              name: "攻略",
              component: () =>
                import("@/view/BlogEdit/UploadingViews/strategy.vue"),
            },
          ],
        },
        {
          path: "home",
          name: "首页",
          component: () => import("@/components/Home/Home_content.vue"),
        },
        {
          path: "search",
          name: "搜索",
          component: () => import("@/view/Search.vue"),
        },
        {
          path: "search/hotel",
          component:() => import("@/view/Hotel.vue")
        },
        {
          path: "data",
          name: "数据中心",
          component: () => import("@/view/DataCenter.vue"),
        },
        {
          path: "foodSearch",
          component: () => import("@/view/foodSearch.vue"),
        },
        {
          path: "PersonalCenter",
          component: () => import("@/view/PersonalCenter.vue"),
          redirect: "/honglv/PersonalCenter/info",
          children: [
            {
              path: "info",
              component: () => import("@/components/PersonalCenter/CenterEdit/Info.vue")
            },
            {
              path: "changePassword",
              component: () => import("@/components/PersonalCenter/CenterEdit/ChangePassword.vue")
            },
            {
              path: "logout",
              component: () => import("@/components/PersonalCenter/logout.vue")
            },
          ]
        }
      ],
    },
    {
      path: "/routes",
      component: Routes,
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
      path: "/home_show_hotel",
      component: home_show_hotel,
    },
    {
      path: "/AdminCenter",
      component: AdminCenter,
      children: [
        {
          path: "",
          redirect: "/AdminCenter/AllAttractions",
        },
        {
          path: "AllAttractions",
          component: () =>
            import("../components/Admin/ContentComponents/AdminMessage.vue"),
        },
        {
          path: ":title",
          component: () =>
            import("../components/Admin/ContentComponents/AdminMessage.vue"),
        },
      ],
    },
    // {
    //   path: "/PersonalCenter",
    //   component: PersonalCenter,
    //   children: [
    //     {
    //       path: "Info",
    //       component: () => {
    //         import("../components/PersonalCenter/CenterEdit/Info.vue")
    //       }
    //     }
    //   ]
    // }
  ],
});

//判断是否登录动态添加登录路由
let isLogin = false;
if (isLogin) {
} else {
  router.addRoute("/login", {
    path: "/login",
    component: () => import("@/view/Login.vue"),
  });
}

//前置导航守卫(部分地方用)
router.beforeEach((to, from) => {
  const token = localStorage.getItem("token");
  // if (!token && to.path == "/xxx") {
  //   return "/login";
  // }
});

export default router;
