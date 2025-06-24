import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/sendSuccessfully',
    name: 'SendSuccessfully',
    component: () => import('../views/SendSuccessfullyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
