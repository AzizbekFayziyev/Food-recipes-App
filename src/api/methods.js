import axios from "@/api/axios";

const ApiMethods = {
     all(letter = "a") {
          return axios.get(`search.php?f=${letter}`)
     },
     random() {
          return axios.get("/random.php");
     },
     allMealCategories() {
          return axios.get("/categories.php");
     },
     byIngredient(ingredient) {
          return axios.get(`/filter.php?i=${ingredient}`)
     },
     byCategory(category) {
          return axios.get(`/filter.php?c=${category}`)
     },
     byId(id) {
          return axios.get(`/lookup.php?i=${id}`);
     },
     byName(name) {
          return axios.get(`/search.php?s=${name}`);
     }
};

export default ApiMethods;