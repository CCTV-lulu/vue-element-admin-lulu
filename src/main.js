import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from './http' //axios 路由拦截，可以放到统一的api处理文件中引用

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './icons' // icon

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
