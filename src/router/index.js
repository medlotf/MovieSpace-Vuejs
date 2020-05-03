import Vue from "vue";
import VueRouter from "vue-router";
import MovieList from "../views/MovieList.vue";
import Categories from "../views/Categories.vue";
import FilmForm from "../views/FilmForm.vue";
import Movie from "../views/Movie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MovieList",
    component: MovieList
  },
  {
    path: "/Categories",
    name: "Categories",
    component: Categories
  },
  {
    path: "/AddMovie",
    name: "AddMovie",
    component: FilmForm
  },
  {
    path: "/Movie/:id",
    name: "Movie",
    component: Movie
  },
  {
    path: "/Movie/:id/Edit",
    name: "EditMovie",
    component: FilmForm
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
