<template>
  <template v-if="likedMeals.length">
    <ul class="likedMeals">
      <li
        class="likedMeals__item"
        v-for="likedMeal in likedMeals"
        :key="likedMeal.id"
      >
        <img :src="likedMeal.img" :alt="likedMeal.title" />
        <div>
          <h4>{{ likedMeal.title }}</h4>
          <button @click="onView(likedMeal.id)">
            <p>View</p>
          </button>
        </div>

        <i
          @click="
            onRemoveLike({
              idMeal: likedMeal.id,
            })
          "
          class="fa-solid fa-heart"
        ></i>
      </li>
    </ul>
  </template>

  <v-alert v-else>NO LIKED MEALS!</v-alert>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LikedMealsList",
  methods: {
    onView(id) {
      this.$router.push({ name: "recipe", params: { id } });
      this.$store.dispatch("getMeal", id);
      this.$emit('onPageChange', null);
    },
    onRemoveLike(meal) {
      this.$store.commit("toggleLike", meal);
    },
  },
  computed: {
    ...mapState({
      likedMeals: (state) => state.liked.likedMeals,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";

.likedMeals {
  list-style-type: none;

  &__item {
    padding: 10px 0;
    @include flex(center, start);
    border-bottom: 1px solid $color-black;

    h4 {
      @include headlineText;
      width: 140px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    img {
      margin-right: 10px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    div {
      @include flex(start);
      flex-direction: column;
    }

    i {
      cursor: pointer;
      font-size: 1.5rem;
      margin-left: 20px;
      margin-right: 20px;
      color: $color-secondary;
    }

    button {
      margin-top: 5px;
      @include btn(0, 100%);
    }

    &:nth-last-child(1) {
      border: none;
    }
  }
}
</style>
