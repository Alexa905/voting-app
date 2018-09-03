import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  server: 'http://localhost:4000',
  routes: [
    {
      path: '/',
      name: 'HOME PAGE',
      component: Home,
    },
    {
      path: '/users/add',
      name: 'ADD USER',
      component: () => import('./views/AddCard.vue'),
    },
    {
      path: '/user/:id',
      name: 'USER PAGE',
      component: () => import('./views/UserPage.vue'),
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/NotFound.vue'),
    },
  ],
});

