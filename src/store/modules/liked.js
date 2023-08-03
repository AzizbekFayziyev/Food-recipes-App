const state = {
     likedMeals: [],
};

const mutations = {
     toggleLike(state, payload) {
          const findMeal = state.likedMeals.find(s => s.id === payload.idMeal);

          if (!findMeal) {
               state.likedMeals.push({
                    id: payload.idMeal,
                    title: payload.strMeal,
                    img: payload.strMealThumb,
               });

               localStorage.setItem("likedMeals", JSON.stringify(state.likedMeals));
          } else {
               state.likedMeals = state.likedMeals.filter(s => s.id !== findMeal.id);
               localStorage.setItem("likedMeals", JSON.stringify(state.likedMeals));
          }
     },

     loadLikedMeals(state) {
          const storage = JSON.parse(localStorage.getItem("likedMeals"));

          if (storage) {
               state.likedMeals = storage;
          }
     }
};

export default { state, mutations };