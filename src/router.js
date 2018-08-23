import Vue from 'vue'
import Router from 'vue-router'
import http from 'vue-resource'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Route from './views/Route'
import Print from './views/Print'
import Table from './views/ComplexTable'
import TreeTable from './views/TreeTable'
import ZkTable from 'vue-table-with-tree-grid'

Vue.use(ZkTable)
Vue.use(Router)
Vue.use(http)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'treeTable',
            component: TreeTable
        },
        {
            path: '/table',
            name: 'table',
            component: Table
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            childern: [
                {
                    path: '/home/route',
                    name: 'route',
                    component: Route
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: About
            // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
