import ApiMethods from "@/api/methods";

const state = {
     data: [],
     isLoading: false,
};

const mutations = {
     getCategoryStart(state) {
          state.isLoading = true;
          state.data = [];
     },
     getCategoryEnd(state, payload) {
          state.isLoading = false;
          state.data = payload;
     }
};

const actions = {
     getCategories(context) {
          return new Promise(() => {
               context.commit("getCategoryStart");
               ApiMethods.allMealCategories()
                    .then((res) => {
                         context.commit("getCategoryEnd", res.data);
                    })
                    .catch((err) => {
                         alert(err.message);
                         context.commit("getCategoryEnd", []);
                    })
          })
     },
     byCategory(context, name) {
          return new Promise(() => {
               context.commit("getCategoryStart");
               ApiMethods.byCategory(name)
                    .then((res) => {
                         context.commit("getCategoryEnd", res.data);
                    })
                    .catch((err) => {
                         alert(err.message);
                         context.commit("getCategoryEnd", []);
                    })
          })
     }
};

export default { state, actions, mutations };