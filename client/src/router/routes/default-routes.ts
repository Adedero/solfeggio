import { type Component } from "vue";

interface Route {
  path: string;
  name: string;
  component: () => Promise<{ default: Component }>;
}

const defaultRoutes: Route[] = [
  {
    path: "",
    name: "home",
    component: () => import("@/views/default/HomeView.vue")
  }
]


export default defaultRoutes;