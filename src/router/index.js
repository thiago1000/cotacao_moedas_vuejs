import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cep',
    name: 'cep',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cep.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
