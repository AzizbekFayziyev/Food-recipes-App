<template>
  <div class="cards">
    <template v-if="!isLoading">
      <MealCardItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </template>
    <v-loader v-else />
    <v-alert v-if="!meals?.length && !isLoading">No Meals Found!</v-alert>
  </div>
</template>
<script>
export default {
  name: "MealCard",
  props: {
    meals: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";

.cards {
  @include flex(start, center);
  flex-wrap: wrap;
}
</style>
