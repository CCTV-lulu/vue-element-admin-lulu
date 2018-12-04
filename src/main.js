import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
// import VueWebsocket from "vue-websocket";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css

import './icons' // icon
// import './mockjs'//mock数据

Vue.use(ElementUI);
// Vue.use(VueWebsocket);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
