<template>
  <div data-aos="zoom-in" class="ingredients-cnt">
    <div class="title">
      <h3>Popular Ingredients</h3>
    </div>
    <div
      ref="ingredients"
      class="ingredients"
    >
      <div
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        :class="{ active: isActive == ingredient.name }"
        class="ingredient"
        @click="$emit('onChoose', ingredient.name)"
      >
        <img
          class="ingredient__img"
          :src="ingredient.img"
          :alt="ingredient.name"
        />
        <h4 class="ingredient__text">{{ ingredient.name }}</h4>
      </div>

      <i @click="scrollX(false)" class="fa-solid fa-arrow-right scroll-item"></i>
      <i @click="scrollX(true)" class="fa-solid fa-arrow-left scroll-item"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ingredients",
  data() {
    return {
      ingredients: [
        {
          id: 1,
          img: "/src/assets/img/category/1.png",
          name: "Chicken",
        },
        {
          id: 2,
          img: "/src/assets/img/category/2.png",
          name: "Salmon",
        },
        {
          id: 3,
          img: "/src/assets/img/category/3.png",
          name: "Beef",
        },
        {
          id: 4,
          img: "/src/assets/img/category/4.png",
          name: "Pork",
        },
        {
          id: 5,
          img: "/src/assets/img/category/5.png",
          name: "Onions",
        },
        {
          id: 6,
          img: "/src/assets/img/category/6.png",
          name: "Lamb Shoulder",
        },
        {
          id: 7,
          img: "/src/assets/img/category/7.png",
          name: "Leek",
        },
        {
          id: 8,
          img: "/src/assets/img/category/8.png",
          name: "Potatoes",
        },
        {
          id: 9,
          img: "/src/assets/img/category/9.png",
          name: "Sugar",
        },
        {
          id: 10,
          img: "/src/assets/img/category/10.png",
          name: "Tomatoes",
        },
      ],
    };
  },
  methods: {
    scrollX(bool) {
      this.$refs.ingredients.scrollBy({
        top: 0,
        left: bool ? -180 : +180,
        behavior: "smooth",
      });
    },
  },
  computed: {
    isActive() {
      return this.$route.query.ingredient;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";

.ingredients-cnt {
  position: relative;

  .title {
    @include title;
  }
}
.ingredients {
  @include flex(center, start);
  overflow-x: hidden;
  margin-bottom: 20px;

  .ingredient {
    cursor: pointer;
    padding-bottom: 15px;
    margin: 0 30px;

    &__img {
      transition: 0.5s all ease;
      width: 150px;
      height: 150px;
      filter: drop-shadow(1px 1px 5px $color-black-50);
    }

    &__text {
      transition: 0.3s all ease;
      @include bodyText;
      text-align: center;
      margin-top: 5px;
    }

    &:hover,
    &.active {
      .ingredient__img {
        filter: drop-shadow(1px 1px 10px $color-black-50);
        transform: scale(1.1);
      }

      .ingredient__text {
        color: $color-primary;
      }
    }
  }

  .scroll-item {
    cursor: pointer;
    z-index: 2;
    background: $color-light;
    border-radius: 50%;
    position: absolute;
    color: $color-black;
    font-size: 1.5rem;
    padding: 8px;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .fa-arrow-right {
    right: -35px;
  }

  .fa-arrow-left {
    left: 0;
  }
}

@media (max-width: 480px) {
  .ingredients .ingredient {
    margin: 0 10px;
  }
}
</style>
