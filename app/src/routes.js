const routes = [
  {
    name: 'product',
    path: '/',
    component: require('./views/product/index')
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: resolve => require(['./views/product/detail.vue'], resolve)
  },
  {
    name: 'order',
    path: '/order',
    component: resolve => require(['./views/order/index.vue'], resolve)
  },
  {
    name: 'login',
    path: '/login',
    component: require('./views/user/login')
  },
  {
    path: '/user',
    component: resolve => require(['./views/user/index.vue'], resolve),
    children: [
      {
        name: 'user',
        path: '/',
        component: require('./views/user/home')
      }
    ]
  }
];

export default routes;
