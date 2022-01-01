import Vue from 'vue' 
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/404.vue'
import User from '../pages/user.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        name: 'About',
        path: '/about',
        component: About,
    },
    {
        name: 'User',
        path: '/user/:name?',
        component: User,
        props: true,
    },






    {
        path: '*',
        component: NotFound,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router