import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ChangelogPage from '../pages/ChangelogPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/changelog',
    name: 'Changelog',
    component: ChangelogPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
