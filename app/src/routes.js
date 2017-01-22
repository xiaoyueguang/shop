const routes = [
  {
    name: 'product',
    path: '/product',
    component: require('./components/product/index')
  },
  {
    name: 'order',
    path: '/order',
    component: resolve => require(['./components/order/index.vue'], resolve)
  },
  {
    path: '/user',
    component: resolve => require(['./components/user/index.vue'], resolve),
    children: [
      {
        name: 'user',
        path: '',
        component: require('./components/user/home')
      },
      {
        name: 'login',
        path: 'login',
        component: require('./components/user/login')
      },
      {
        name: 'register',
        path: 'register',
        component: require('./components/user/register')
      }
    ]
  }
];

export default routes;
