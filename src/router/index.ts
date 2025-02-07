import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userData = localStorage.getItem('userData')

  const dataObject = JSON.parse(userData)

  if (to.path === '/' && dataObject?.isLogged === 'true') {
    next('/about')
  } else if (to.path === '/about' && !dataObject?.isLogged) {
    next('/')
  } else {
    next()
  }
})

export default router
