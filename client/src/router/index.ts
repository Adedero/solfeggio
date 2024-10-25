import { createRouter, createWebHistory } from 'vue-router';
import defaultLayout from '@/layouts/default-layout.vue';
import authLayout from '@/layouts/auth-layout.vue';
import appLayout from '@/layouts/app-layout.vue';

import defaultRoutes from './routes/default-routes';
import authRoutes from './routes/auth.routes';
import appRoutes from './routes/app.routes';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultLayout,
      children: defaultRoutes
    },
    {
      path: '/auth',
      name: 'auth',
      component: authLayout,
      redirect: '/auth/sign-in',
      children: authRoutes
    },
    {
      path: '/app',
      component: appLayout,
      children: appRoutes
    }
  ],
})

export default router;
