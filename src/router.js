import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Test from '@/views/MockAndImgCode'
import Css from '@/views/Css'
import tableInput from '@/views/tableInput/index'
import twoFrom from '@/views/twoForm/index'
import cssTest from '@/views/cssTest/index'

import store from '@/store/store'
import Layout from '@/views/layout/Index'

Vue.use(Router)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Test',
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
        component: Test
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/1111css',
        name: 'Css',
        component: Css
    },
    {
        path: '/tableInput',
        name: 'tableInput',
        component: tableInput
    },
    {
        path: '/twoFrom',
        name: 'twoFrom',
        component: twoFrom
    },
    {
        path: '/cssTest',
        name: 'cssTest',
        component: cssTest
    },
    {
        path: '',
        component: Layout,
        redirect: 'Dash',
        children: [
            {
                path: 'Dash',
                component: () => import('@/views/gojs/test'),
                name: 'Dash',
                meta: { title: 'Dash', icon: 'Dash', noCache: true }
            }
        ]
    },
];

const router = new Router({
    routes
});
//登录验证,未登录不可进入页面
router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        }
        else {
            next({
                path: '/login',
                // query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

export default router;
