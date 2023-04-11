import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieOverview from "../views/MovieOverview.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
 {
  path: "/overview/:movie_id",
  name: 'overview',
  component: MovieOverview
 }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
