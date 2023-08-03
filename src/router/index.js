import { createRouter, createWebHistory } from 'vue-router';
// components
import Home from "@/pages/Home.vue";
import Recipes from "@/pages/Recipes.vue";
import Recipe from "@/pages/Recipe.vue";
import Filter from "@/pages/Filter.vue";
import Categories from "@/pages/Categories.vue";
import Category from "@/pages/Category.vue";
import ErrorPage from "@/pages/ErrorPage.vue";

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     scrollBehavior() {
          return { top: 0 }
     },
     linkActiveClass: "active",
     routes: [
          {
               path: "/",
               name: "home",
               component: Home,
          },

          {
               path: "/recipes",
               name: "recipes",
               component: Recipes,
          },

          {
               path: "/recipe/:id",
               name: "recipe",
               component: Recipe,
          },

          {
               path: "/filter",
               name: "filter",
               component: Filter,
          },

          {
               path: "/categories",
               name: "categories",
               component: Categories,
          },
          {
               path: "/category/:name",
               name: "category",
               component: Category,
          },
          {
               // path: "*",
               path: "/:catchAll(.*)",
               name: "NotFound",
               component: ErrorPage,
              
          }
     ]
});

export default router;