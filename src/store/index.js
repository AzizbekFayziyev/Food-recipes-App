import { createStore } from "vuex";
import meals from "@/store/modules/meals";
import category from "@/store/modules/category";
import filter from "@/store/modules/filter";
import liked from "@/store/modules/liked";

const store = createStore({
     state: {},
     actions: {},
     mutations: {},
     getters: {},
     modules: { meals, category, filter, liked },
});

export default store;