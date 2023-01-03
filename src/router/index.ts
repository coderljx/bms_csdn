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

    ]
  },
  {
    path : "/Submit",
    component : import("@/components/Submit/Submit.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
 