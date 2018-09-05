import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  server: process.env.VUE_APP_SERVER,
  routes: [
    {
      path: '/',
      name: 'HOME PAGE',
      component: Home,
    },
    {
      path: '/cards/add',
      name: 'ADD CARD',
      component: () => import('./views/AddCard.vue'),
    },
    {
      path: '/card/:id',
      name: 'CARD PAGE',
      component: () => import('./views/VoteCardPage.vue'),
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/NotFound.vue'),
    },
  ],
});

