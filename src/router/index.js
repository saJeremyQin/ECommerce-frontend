import { createRouter, createWebHistory } from "vue-router";
import ProductsPage from '../pages/ProductsPage.vue';
import ProductDetailPage from '../pages/ProductDetailPage.vue';
import ShoppingCartPage from '../pages/ShoppingCartPage.vue';


const routes = [
    { path: '/products', component: ProductsPage },
    { path: '/products/:productId', component: ProductDetailPage },
    { path: '/cart', component: ShoppingCartPage },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;