import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Menu from '../pages/Menu.vue'
import FoodDetails from '../pages/FoodDetails.vue'
import Cart from '../pages/Cart.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/menu', name: 'Menu', component: Menu },
    { path: '/food/:id', name: 'FoodDetails', component: FoodDetails, props: true },
    { path: '/cart', name: 'Cart', component: Cart },
  ],
})

export default router

