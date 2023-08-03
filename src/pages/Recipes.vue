<template>
  <section class="recipes container">
    <div class="title">
      <span data-aos-duration="800" data-aos="fade-up">Recipes</span>
      <h3 data-aos-duration="1000" data-aos="fade-up">
        All recipes by alphabet
      </h3>
    </div>

    <MealCard :meals="meals" :isLoading="isLoading" />

    <v-breadcrumb />
  </section>
</template>
<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("getAllMeals", this.$route.query.letter || "A");
  },
  computed: {
    ...mapState({
      meals: (state) => state.meals.data.meals,
      isLoading: (state) => state.meals.isLoading,
    }),
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";

.recipes {
  margin-top: 20px;
  .title {
    @include title;
  }
}
</style>
