import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import Result from '../components/Result.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
  ]
})

export default router
