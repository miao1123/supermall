import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import("../views/home/Home")
const Guide = () => import("../views/guide/Guide")
const Lesson = () => import("../views/lesson/Lesson")
const Community = () => import("../views/community/Community")
const User = () => import("../views/user/User")
const HomeMain = () => import("../views/home/HomeMain")
const HomeGuess = () => import("../views/home/HomeGuess")
const HomeMuying = () => import("../views/home/HomeMuying")
const HomeFoods = () => import("../views/home/HomeFoods")
const DetaildsItem = () => import("../components/goods/DetaildsItem")

Vue.use(VueRouter)

const routes = [
  // 默认路由为首页
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: "首页"
    },
    children: [
      {
        path: '',
        redirect: '/home/homemain'
      },
      {
        path: 'homemain',
        component: HomeMain
      },
      {
        path: 'homeguess',
        component: HomeGuess
      },
      {
        path: '母婴',
        component: HomeMuying
      }
    ]
  },
  {
    path: '/guide',
    component: Guide,
    meta: {
      title: "导航"
    }
  },
  {
    path: '/lesson',
    component: Lesson,
    meta: {
      title: "悦课堂"
    }
  },
  {
    path: '/community',
    component: Community,
    meta: {
      title: "分享"
    }
  },
  {
    path: '/user',
    component: User,
    meta: {
      title: "我的"
    }
  },
  {
    path: '/details',
    component: DetaildsItem,
    meta: {
      title: "details"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫
router.afterEach((from,to) => {
  document.title = from.meta.title
})

export default router
