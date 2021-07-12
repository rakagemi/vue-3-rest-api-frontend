import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path:'/',
        name: 'Home',
        component: () => import("../views/Home.vue")
    },
    {
        path:'/transaction',
        name: 'transaction.index',
        component: () => import("../views/transaction/Index.vue")
    },
    {
        path:'/transaction/create',
        name: 'transaction.create',
        component: () => import("../views/transaction/Create.vue")
    },
    {
        path:'/transaction/edit/:id',
        name: 'transaction.edit',
        component: () => import("../views/transaction/Edit.vue")
    },
    {
        path:'/product',
        name: 'product.index',
        component: () => import("../views/product/Index.vue")
    },
    {
        path:'/product/create',
        name: 'product.create',
        component: () => import("../views/product/Create.vue")
    },
    {
        path:'/product/edit/:id',
        name: 'product.edit',
        component: () => import("../views/product/Edit.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;