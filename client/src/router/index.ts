import { createRouter, createWebHistory } from 'vue-router';
import defaultLayout from '@/layouts/default-layout.vue';
import authLayout from '@/layouts/auth-layout.vue';
import defaultRoutes from './routes/default-routes';
import authRoutes from './routes/auth.routes';


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
      path: '/',
      name: 'auth',
      component: authLayout,
      children: authRoutes
    }
  ],
})

export default router;
