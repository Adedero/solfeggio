import { type Component } from "vue";

interface Route {
  path: string;
  name: string;
  component: () => Promise<{ default: Component }>;
}

const authRoutes: Route[] = [
  {
    path: "sign-in",
    name: "sign-in",
    component: () => import("@/views/auth/SigninView.vue")
  },
  {
    path: 'sign-up',
    name: 'sign-up',
    component: () => import('@/views/auth/SignUpView.vue')
  }
]


export default authRoutes;