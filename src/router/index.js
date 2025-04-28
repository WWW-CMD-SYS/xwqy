import { createRouter, createWebHistory } from 'vue-router'
import SOHT01 from '../views/SOHT01.vue' // 确保路径正确

const routes = [
    // 如果需要有首页，可以添加如下路由
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue') // 需要创建这个文件或使用已有组件
    },
    {
        path: '/soht01',
        name: 'SOHT01',
        component: SOHT01
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router