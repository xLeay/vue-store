// // Composables
// import { createRouter, createWebHistory } from 'vue-router'

// const routes = [
//   {
//     path: '/',
//     component: () => import('@/layouts/default/Default.vue'),
//     children: [
//       {
//         path: '',
//         name: 'Home',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
//       },
//     ],
//   },
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// })

// export default router


import { createRouter, createWebHistory } from 'vue-router'
import ProductsComp from '../components/ProductsComp.vue'
import HelloWord from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'ProductsComp',
    component: ProductsComp
  },
  {
    path: '/hello',
    name: 'HelloWord',
    component: HelloWord
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router