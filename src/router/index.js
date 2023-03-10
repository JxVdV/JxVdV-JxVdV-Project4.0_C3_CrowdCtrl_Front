import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ApiDetailsView from '../views/ApiDetails.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admin/home',
    name: 'AdminHome',
    component: () => import('../views/ApiView.vue')
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    component: () => import('../views/ApiDetails.vue'),
    props: true,
  },
  {
    path: '/shouldRedirectToApi',
    redirect: '/api',
  },
  // catchAll 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
});

export default router;
