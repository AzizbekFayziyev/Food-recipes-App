<template>
  <div data-aos="zoom-in" data-aos-duration="800" class="card">
    <div
      @click="$router.push({ name: 'recipe', params: { id: meal.idMeal } })"
      class="card__img"
    >
      <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    </div>
    <div class="content">
      <h4 class="card__title">{{ meal.strMeal }}</h4>
      <p class="card__body">{{ meal.strCategory }}</p>
      <div class="card__info">
        <h5 v-if="meal.strArea">{{ meal.strArea }}</h5>
        <button
          @click="$router.push({ name: 'recipe', params: { id: meal.idMeal } })"
          v-else
        >
          <p>More Info</p>
        </button>
        <i
          @click="toggleLike"
          :class="{ 'fa-solid': isLiked, 'fa-regular': !isLiked }"
          class="fa-heart"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MealCardItem",
  props: {
    meal: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapState({
      likedMeals: (state) => state.liked.likedMeals,
    }),

    isLiked() {
      return this.likedMeals.find((s) => s.id === this.meal.idMeal);
    },
  },

  methods: {
    toggleLike() {
      this.$store.commit("toggleLike", this.meal);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/_mixins.scss";
.card {
  @include flex;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 0 12px $color-black-50;
  flex-direction: column;
  text-align: center;
  margin: 10px 15px;

  .content {
    padding: 5px 10px;
    padding-bottom: 20px;
  }

  &__img {
    position: relative;
    cursor: pointer;
    width: 250px;
    height: 250px;

    img {
      width: 100%;
      height: 100%;
    }

    &::before {
      transition: 0.3s all ease;
      content: "VIEW RECIPE";
      color: $color-light;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: #00000034;
      backdrop-filter: blur(8px);
      visibility: hidden;
    }

    &:hover {
      &::before {
        visibility: visible;
        height: 100%;
      }
    }
  }

  &__title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 10px;
    @include headlineText;
    width: 200px;
  }

  &__body {
    @include bodyText;
    color: $color-black-50;
    margin: 8px 0;
  }

  &__info {
    padding-top: 8px;
    border-top: 1px solid $color-black-50;
    margin-top: 15px;
    width: 100%;
    @include flex(center, space-between);

    h5 {
      @include bodyText;
    }

    button {
      @include btn(0, 100%);
    }

    i {
      cursor: pointer;
      font-size: 20px;
      color: $color-black-50;

      &.fa-solid{
        color: $color-secondary;
      }
    }
  }
}
</style>
