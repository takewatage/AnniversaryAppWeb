import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue"
import Second from "@/pages/Second.vue"
import LoginPage from "@/pages/auth/LoginPage.vue"



const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/second', name: 'Second', component: Second },
    { path: '/login', name: 'Login', component: LoginPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from) => {
    const isAuthenticated = false
    if (!isAuthenticated && to.name !== 'Login') {
        return { name: 'Login' }
    }
})


export default router
