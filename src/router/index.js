import { createRouter, createWebHistory } from 'vue-router'
import SOHT01 from '../views/SOHT01.vue' // 确保路径正确
import HomeView from '../views/HomeView.vue' // 确保路径正确
import BorderQuery from "@/components/BorderQuery.vue";
import BorderResult from "@/components/BorderResult.vue";
const routes = [
    // 如果需要有首页，可以添加如下路由
    {
        path: '/',
        name: 'home',
        component: () => import('../components/login.vue') // 需要创建这个文件或使用已有组件
    },
    {
        path: '/SOHT01',
        name: 'SOHT01',
        component: SOHT01
    },
    {
        path: '/HomeView',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/borderQuery',
        name: 'BORDERQUERY',
        component: BorderQuery
    },
    {
        path: '/borderResult',
        name: 'BORDERRESULT',
        component: BorderResult
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router