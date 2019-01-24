import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import bus from 'vue-bus' //添加bus事件
import Alert from '../src/components/Alert/alert'
// import VueWebsocket from "vue-websocket"; //websocket长连接

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css

import './icons' // icon
// import './mockjs'//mock数据

Vue.use(ElementUI);
Vue.use(bus);
// Vue.use(VueWebsocket);
Vue.config.productionTip = false

Vue.prototype.$Alert = Alert

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
