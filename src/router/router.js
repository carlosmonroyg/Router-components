import * as Vue from "vue";
import * as VueRouter from "vue-router";

const routes = [
  { path: "/", component: () => import(/*WebPack*/"@/Pokemon/pages/ListPages") },

  { path: "/about", component: () => import(/*WebPack*/"@/Pokemon/pages/AboutPages") },

  { path: "/id", component: () => import(/*WebPack*/"@/Pokemon/pages/PokemonPages") },

  {
    path: "/:pathMatch(.*)*",
    component: () => import(/*WebPack*/"@/shared/components/NoPagesFound"),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
