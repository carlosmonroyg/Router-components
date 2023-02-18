import * as Vue from "vue";
import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/*WebPack*/ "@/Pokemon/pages/ListPages"),
  },
  {
    path: "/counter",
    name: "counter",
    component: () => import(/*WebPack*/ "@/Pokemon/pages/Counter"),
  },

  {
    path: "/about",
    name:"about",
    component: () => import(/*WebPack*/ "@/Pokemon/pages/AboutPages"),
  },

  {
    path: "/pokemonid/:id",
    name: "pokemon-id",
    component: () => import(/*WebPack*/ "@/Pokemon/pages/PokemonPages"),
    props: (route) => {
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 1 } : { id };
    },
  },

  {
    path: "/:pathMatch(.*)*",
    component: () => import(/*WebPack*/ "@/shared/components/NoPagesFound"),
    // redirect:'/home'
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
