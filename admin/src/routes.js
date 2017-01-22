const routes = [
  {
    name: 'index',
    path: '/',
    component: require('./views/index.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: resolve => require(['./components/login.vue'], resolve)
  },
  {
    name: 'user_list',
    path: '/user/list',
    component: resolve => require(['./views/user/list.vue'], resolve)
  },
  {
    name: 'user_add',
    path: '/user/add',
    component: resolve => require(['./views/user/add.vue'], resolve)
  },
  {
    name: 'user_edit',
    path: '/user/edit/:id',
    component: resolve => require(['./views/user/add.vue'], resolve)
  },
  {
    name: 'product_list',
    path: '/product/list',
    component: resolve => require(['./views/product/list.vue'], resolve)
  },
  {
    name: 'product_add',
    path: '/product/add',
    component: resolve => require(['./views/product/add.vue'], resolve)
  },
  {
    name: 'product_edit',
    path: '/product/edit/:id',
    component: resolve => require(['./views/product/add.vue'], resolve)
  },
];

export default routes;
