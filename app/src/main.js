import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import mintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import store from './store';
import ajax from './libs/ajax.js';
import native from './libs/native.js';

let {Toast, MessageBox} = mintUi
Vue.prototype.$toast = Toast
Vue.prototype.$message = MessageBox
Vue.prototype.$native = native;

Vue.use(ajax)

Vue.use(mintUi);
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
