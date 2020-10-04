import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta:{ isPublic: true }
  },
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/items/create',
        name: 'ItemEdit',
        component: () => import('../views/ItemEdit.vue'),
      },
      {
        path: '/items/edit',
        name: 'ItemEdit',
        component: () => import('../views/ItemEdit.vue'),
      },
      {
        path: '/items/list',
        name: 'ItemList',
        component: () => import('../views/ItemList.vue'),
      },
      {
        path: '/ads/create',
        name: 'AdEdit',
        component: () => import('../views/AdEdit.vue'),
      },
      {
        path: '/ads/edit',
        name: 'AdEdit',
        component: () => import('../views/AdEdit.vue'),
      },
      {
        path: '/ads/list',
        name: 'AdList',
        component: () => import('../views/AdList.vue'),
      },
      {
        path: '/admin_users/create',
        name: 'AdminUserEdit',
        component: () => import('../views/AdminUserEdit.vue'),
      },
      {
        path: '/admin_users/edit',
        name: 'AdminUserEdit',
        component: () => import('../views/AdminUserEdit.vue'),
      },
      {
        path: '/admin_users/list',
        name: 'AdminUserList',
        component: () => import('../views/AdminUserList.vue'),
      },
      {
        path: '/articles/create',
        name: 'ArticleEdit',
        component: () => import('../views/ArticleEdit.vue'),
      },
      {
        path: '/articles/edit',
        name: 'ArticleEdit',
        component: () => import('../views/ArticleEdit.vue'),
      },
      {
        path: '/articles/list',
        name: 'ArticleList',
        component: () => import('../views/ArticleList.vue'),
      },
      {
        path: '/categories/create',
        name: 'CategoryEdit',
        component: () => import('../views/CategoryEdit.vue'),
      },
      {
        path: '/categories/edit',
        name: 'CategoryEdit',
        component: () => import('../views/CategoryEdit.vue'),
      },
      {
        path: '/categories/list',
        name: 'CategoryList',
        component: () => import('../views/CategoryList.vue'),
      },
      {
        path: '/heroes/create',
        name: 'HeroEdit',
        component: () => import('../views/HeroEdit.vue'),
      },
      {
        path: '/heroes/edit',
        name: 'HeroEdit',
        component: () => import('../views/HeroEdit.vue'),
      },
      {
        path: '/heroes/list',
        name: 'HeroList',
        component: () => import('../views/HeroList.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  routes,
})
router.beforeEach((to, from ,next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router
