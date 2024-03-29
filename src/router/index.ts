import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path : "/",
    redirect : "/index"
  },
  {
    path : "/index",
    component : import("@/components/index/index.vue"),
    children : [
      {
        path : "follow",
        component : import("@/components/index/follow/follow.vue")
      },
      {
        // 推荐页
        path : "recommend",
        component : import("@/components/index/recommend/recommend.vue")
      },
      {
        // 推荐页
        path : "info",
        component : import("@/components/index/info/info.vue")
      }
    ]
  },
  {
    path : "/submit",
    component : import("@/components/Submit/Submit.vue")
  },
  {
    path : "/content",
    component : import("@/components/content/V/content.vue")
  },
  {
    path : "/wechat",
    component : import("@/components/wechat/wechat.vue")
  },
  {
    path : "/register",
    component : import("@/components/register/register.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
 