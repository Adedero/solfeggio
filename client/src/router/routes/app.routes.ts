import { type Component } from "vue";

interface Route {
  path: string;
  name: string;
  component: () => Promise<{ default: Component }>;
}

const appRoutes: Route[] = [
  {
    path: "",
    name: "app",
    component: () => import("@/views/app/AppHomeView.vue")
  }
]


export default appRoutes;