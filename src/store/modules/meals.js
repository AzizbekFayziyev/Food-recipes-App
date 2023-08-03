import ApiMethods from "../../api/methods";

const state = {
     data: [],
     singleMeal: {},
     isLoading: false,
};

const mutations = {
     getDataStart(state) {
          state.isLoading = true;
          state.data = [];
     },
     getDataEnd(state, payload) {
          state.isLoading = false;
          state.data = payload;
     },
     getMealStart(state) {
          state.isLoading = true;
          state.singleMeal = {};
     },
     getMealEnd(state,payload) {
          state.isLoading = false;
          state.singleMeal = payload;
     }
};

const actions = {
     getAllMeals(context, letter) {
          return new Promise(() => {
               context.commit("getDataStart");
               ApiMethods.all(letter)
                    .then((res) => {
                         context.commit("getDataEnd", res.data);
                    })
                    .catch((err) => {
                         alert(err.message);
                         context.commit("getDataEnd", []);
                    })
          })
     },
     getMeal(context, id) {
          return new Promise((response) => {
               context.commit("getMealStart");
               ApiMethods.byId(id)
                    .then((res) => {
                         context.commit("getMealEnd", res.data.meals[0]);
                         response();
                    })
                    .catch((err) => {
                         alert(err.message);
                         context.commit("getMealEnd", {});
                    })
          })
     }
};

export default { state, mutations, actions };