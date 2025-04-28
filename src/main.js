import './assets/main.css'// 全局文件样式
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 确保导入路由
import ElementPlus from 'element-plus'// 导入element-plus
import 'element-plus/dist/index.css'// 导入element-plus样式
const app = createApp(App)// 创建vue实例
app.use(ElementPlus)
app.use(router) // 确保使用路由插件
app.mount('#app')