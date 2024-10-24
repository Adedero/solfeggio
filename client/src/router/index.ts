import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/default-layout.vue';
import defaultRoutes from './routes/default-routes';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultLayout,
      children: defaultRoutes
    }
  ],
})

export default router;
