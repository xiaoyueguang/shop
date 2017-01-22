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

Vue.prototype.$baseUrl = 'http://www.shop.com/uploads/';

import routes from './routes.js';
const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (native.isLogin()) {
    next()
  } else {
    if (to.name === 'login') {
      next()
    } else {
      sessionStorage.returnRouterName = to.name
      next({
        name: 'login'
      })
    }
  }
})

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
window.vm = app;