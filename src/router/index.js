import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: () => import('../views/AboutView.vue') },
  { path: '/programs/:slug', component: () => import('../views/ProgramView.vue') },
  { path: '/news', component: () => import('../views/NewsView.vue') },
  { path: '/contact', component: () => import('../views/ContactView.vue') },
]

// Faculty and Staff: para sa development lang. Natatanggal sa production build
// ayon sa utos ng instructor na huwag isama sa deployed site.
if (import.meta.env.DEV) {
  routes.push({ path: '/faculty', component: () => import('../components/Faculty.vue') })
}

routes.push({ path: '/:pathMatch(.*)*', redirect: '/' })

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash && document.querySelector(to.hash)) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})