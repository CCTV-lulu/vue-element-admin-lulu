import Vue from 'vue'
import Router from 'vue-router'
import http from 'vue-resource'
import Login from '@/views/Login'
import Test from '@/views/test'
Vue.use(Router)
Vue.use(http)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        }
    ]
})
