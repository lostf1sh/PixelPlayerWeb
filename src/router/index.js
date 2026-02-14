import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ChangelogPage from '../pages/ChangelogPage.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/NotFound.vue'

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
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
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
    if (to.path === from.path) {
      return false
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
