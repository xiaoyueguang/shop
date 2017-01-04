import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import ajax from './libs/ajax.js';
import native from './libs/native.js';
import store from './store';

Vue.use(ajax)

Vue.use(ElementUI);
Vue.use(VueRouter);

import routes from './routes.js';
const router = new VueRouter({
  routes
});

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
window.vm = app;