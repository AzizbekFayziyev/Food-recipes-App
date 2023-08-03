import ApiMethods from "../../api/methods";

const state = {
     data: [],
     isLoading: false,
};

const mutations = {
     filterDataStart(state) {
          state.isLoading = true;
          state.data = [];
     },
     filterDataEnd(state, payload) {
          state.isLoading = false;
          state.data = payload;
     }
};

const actions = {
     searchByName(context, query) {
          return new Promise(() => {
               context.commit("filterDataStart");
               ApiMethods.byName(query)
                    .then((res) => {
                         context.commit("filterDataEnd", res.data);
                    })
                    .catch((err) => {
                         alert(err.message);
                         context.commit("filterDataEnd", []);
                    })
          })
     },
     byIngredient(context, ingredient) {
          return new Promise(() => {
               context.commit("filterDataStart");
               ApiMethods.byIngredient(ingredient)
                    .then((res) => {
                         context.commit("filterDataEnd", res.data);
                    })
                    .catch((err) => {
                         alert(err.message);
                         context.commit("filterDataEnd", []);
                    })
          });
     },
     randomMeal(context) {
          return new Promise(() => {
               context.commit("filterDataStart");
               ApiMethods.random()
                    .then((res) => {
                         context.commit("filterDataEnd", res.data);
                    })
                    .catch((err) => {
                         alert(err.message);
                         context.commit("filterDataEnd", []);
                    })
          });
     },
};

export default { state, mutations, actions };