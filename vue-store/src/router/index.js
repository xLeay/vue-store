
import { createRouter, createWebHistory } from 'vue-router'
import ProductsComp from '../components/ProductsComp.vue'
import ProductDetails from '../components/ProductDetails.vue'

const routes = [
    {
        path: '/',
        name: 'ProductsComp',
        component: ProductsComp
    },
    {
        path: '/products/:id',
        name: 'ProductDetails',
        component: ProductDetails,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


