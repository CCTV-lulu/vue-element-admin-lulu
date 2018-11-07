/**
 * axios 路由拦截
 * 使用vuex来存储token的状态
 * 拦截之后使用router跳转页面
 **/

import axios from 'axios'
import router from './router'
import store from './store/store'
import {Message} from 'element-ui' //用于错误消息弹框

//axios配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://47.75.248.68:8080/' //是不是统一路径可以配置到这里
//确实可以，但是不能很好的解决跨域问题

//http request 拦截器
axios.interceptors.request.use(
    config => {
        if(store.state.token){
            config.headers.Authorization = store.state.token
        }else {
            config.headers.Authorization = 'Basic dnVlOnZ1ZQ=='; // 增加客户端认证
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

//http response 拦截器
axios.interceptors.response.use(
    response =>{
        return response.data
    },
    error => {
        if(error.response){
            switch (error.response.status) {
                case 401:
                    //错误消息提示
                    Message({
                        message: '登录失效请重新登录！',
                        type: 'error',
                        duration: 5 * 1000
                    })
                    //401没有权限，可能是权限过期或者没有token,清除token
                    store.commit(clearToken)
                    /**如果当前登录路由不是登录页面就跳转到登录页面
                     *todo
                     * 登出
                    **/
                    router.currentRoute.path !== 'login' &&
                        router.replace({
                            path:'login',
                            // query:{redirect: router.currentRoute.path }
                            //todo
                            //部分页面需要登录
                        });
                    break;
                case 404:
                    Message({
                        message: error.response.request.responseURL + '  该接口找不到！',
                        type: 'error',
                        duration: 5 * 1000
                    });
                    break;
                case 500:
                    Message({
                        message: '后端接口异常，请联系管理员',
                        type: 'error',
                        duration: 5 * 1000
                    });
                    break;
            }
        }
        return Promise.reject(error.response)
    }
)
export default axios
