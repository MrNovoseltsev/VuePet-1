import { createWebHashHistory, createRouter } from "vue-router";
import MainPage from '@/pages/MainPage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import CartPage from '@/pages/CartPage.vue';
import OrderPage from '@/pages/OrderPage.vue';
import OrderInfoPage from '@/pages/OrderInfoPage.vue';


const routes = [
  {
    path: '/',
    component: MainPage,
    name: 'main'
  },
  {
    path: '/product/:upt',
    component: ProductPage,
    name: 'product'
  },
  {
    path: '/cart',
    component: CartPage,
    name: 'cart'
  },
  {
    path: '/order',
    component: OrderPage,
    name: 'order'
  },
  {
    path: '/order/info',
    component: OrderInfoPage,
    name: 'orderInfo'
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    name: 'notFound'
  },
]

const router = createRouter({

  history: createWebHashHistory(),
  routes,
});

export default router;
