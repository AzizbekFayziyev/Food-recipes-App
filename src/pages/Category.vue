<template>
  <div class="category container">
    <button @click="$router.go(-1)" class="goBackBtn"><i class="fas fa-arrow-left"></i> <p>Go Back</p></button>
    <div class="title">
      <h3>Category: {{ categoryName }}</h3>
    </div>
    <MealCard :isLoading="isLoading" :meals="meals" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      isLoading: (state) => state.category.isLoading,
      meals: (state) => state.category.data.meals,
    }),
    categoryName() {
      return this.$route.params.name;
    },
  },
  mounted() {
    this.$store.dispatch("byCategory", this.categoryName);
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";
.goBackBtn {
  @include btn(0,100%);
  margin-top: 20px;
}
</style>
