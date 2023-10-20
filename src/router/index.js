import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ReviewView from '../views/ReviewView.vue'
import DiscountView from '../views/DiscountView.vue'
import OfferView from '../views/OfferView.vue'
import InfoClientView from '../views/InfoClientView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/reviews',
    name: 'review',
    component: ReviewView
  },
  {
    path: '/discounts',
    name: 'discount',
    component: DiscountView
  },
  {
    path: '/offer',
    name: 'offer',
    component: OfferView
  },
  {
    path: '/infoclient',
    name: 'infoclient',
    component: InfoClientView
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
