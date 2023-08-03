<template>
  <section class="menu container">
    <div class="title">
      <span data-aos-duration="800" data-aos="fade-up">Our menu</span>
      <h3 data-aos-duration="1000" data-aos="fade-up">Our Popular Menu</h3>
      <p data-aos-duration="1200" data-aos="fade-up">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
      </p>
    </div>

    <MealCard :isLoading="isLoading" :meals="meals" />

    <div class="menu__btn">
      <button @click="this.$router.push({ name: 'recipes' })">
        <p>More Meals</p>
        <i
          style="margin: 0; margin-left: 5px"
          class="fa-solid fa-arrow-right"
        ></i>
      </button>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeMenu",

  computed: {
    ...mapState({
      isLoading: (state) => state.meals.isLoading,
      meals: (state) => state.meals.data.meals,
    }),
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";

.menu {
  margin-top: 50px;

  .title {
    @include title;
  }

  &__btn {
    @include flex;

    button {
      margin-top: 20px;
      @include btn(0, 100%);
    }
  }
}
</style>
