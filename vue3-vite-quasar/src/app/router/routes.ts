// Helpers
import { defineRoutes } from "./utils/define";
// Constants
import { Route } from "@/shared/constants/routes";

export default defineRoutes([
  {
    path: "/",
    component: () => import("@/screen/layout/MainLayout.vue"),
    children: [
      {
        path: "",
        name: Route.Index,
        component: () => import("@/screen/pages/Index.vue"),
      },
    ],
  },
]);
