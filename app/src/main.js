// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes.js'

import ajax from '../../admin/src/libs/ajax.js';
import native from '../../admin/src/libs/native.js';

import {AlertPlugin} from 'vux'
Vue.use(AlertPlugin)

Vue.use(ajax);
Vue.prototype.$native = native;
Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   component: Home
// }]
Vue.prototype.$baseUrl = 'http://www.shop.com/uploads/';

const router = new VueRouter({
  mode: 'history',
  routes
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
