import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import AboutPages from "@/Pokemon/pages/AboutPages";
import ListPages from "@/Pokemon/pages/ListPages";
import PokemonPages from "@/Pokemon/pages/PokemonPages";
import NoPagesFound from "@/shared/components/page/NoPagesFound";

const routes = [
  { path: '/', component: ListPages },
  { path: '/about', component: AboutPages },
  { path: '/id', component: PokemonPages },
  { path: '/:pathMatch(.*)*', component: NoPageFound },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router