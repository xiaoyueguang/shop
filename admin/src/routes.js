const routes = [
  {
    name: 'index',
    path: '/',
    component: require('./views/index.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: require('./components/login.vue')
  },
  {
    name: 'user_list',
    path: '/user/list',
    component: require('./views/user/list.vue')
  },
  {
    name: 'user_add',
    path: '/user/add',
    component: require('./views/user/add.vue')
  },
  {
    name: 'user_edit',
    path: '/user/edit/:id',
    component: require('./views/user/add.vue')
  },
];

export default routes;
