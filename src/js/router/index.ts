import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Second from '@/pages/Second.vue'
import WelcomePage from '@/pages/Welcome.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/second', name: 'Second', component: Second },
  { path: '/welcome', name: 'Welcome', component: WelcomePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to) => {
  const isAuthenticated = false
  if (!isAuthenticated && to.name !== 'Welcome') {
    return { name: 'Welcome' }
  }
})

export default router
