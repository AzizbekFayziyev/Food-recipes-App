<template>
  <div class="bg">
    <section v-if="!isLoading" class="recipe container">
      <button @click="$router.back()" class="recipe__back">
        <i class="fas fa-arrow-left"></i>
        <p>Go Back</p>
      </button>

      <img class="recipe__img" :src="meal.strMealThumb" :alt="meal.strMeal" />

      <div class="recipe__title">
        <h1>{{ meal.strMeal }}</h1>

        <div class="actions">
          <i @click="onShare" class="fa-solid fa-share-nodes"></i>
          <i
            :class="{ 'fa-solid': isLiked, 'fa-regular': !isLiked, liked: isLiked }"
            @click="toggleLike"
            class="fa-heart"
          ></i>
        </div>
      </div>

      <iframe
        v-if="meal.strYoutube"
        class="recipe__video"
        :src="`https://www.youtube.com/embed/${meal?.strYoutube?.slice(-11)}`"
        frameborder="0"
        allowfullscreen
        :title="meal.strMeal"
      ></iframe>

      <div class="recipe__tags">
        <div class="recipe__tags_tag">
          <i class="fa-solid fa-list"></i>
          <p>{{ meal.strCategory }}</p>
        </div>

        <div class="recipe__tags_tag">
          <i class="fa-solid fa-location-dot"></i>
          <p>{{ meal.strArea }}</p>
        </div>

        <template v-if="meal.strTags != null">
          <div v-for="tag in meal.strTags.split(',')" class="recipe__tags_tag">
            <i class="fa-solid fa-tag"></i>
            <p>{{ tag }}</p>
          </div>
        </template>
      </div>

      <div class="recipe__instructions">
        <h2>Instructions</h2>
        <p>{{ meal.strInstructions }}</p>
        <a
          target="_blank"
          :href="`https://www.youtube.com/results?search_query=${meal.strMeal}`"
          >SEARCH OTHER VIDEO RECIPE</a
        >
      </div>

      <ul class="recipe__ingredients">
        <h2>Ingredients</h2>
        <template v-for="(el, index) of new Array(20)" :key="index">
          <li v-if="meal[`strIngredient${index + 1}`]">
            {{ meal[`strIngredient${index + 1}`] }}
            {{ meal[`strMeasure${index + 1}`] }}
          </li>
        </template>
      </ul>
    </section>

    <v-loader style="margin: 200px auto" v-else></v-loader>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      routerId: this.$route.params.id,
    };
  },
  methods: {
    onShare() {
      const shareData = {
        title: this.meal?.strMeal,
        text: this.meal?.strInstructions,
        url: window.location.href,
      };

      if (window.navigator.canShare(shareData)) {
        window.navigator.share(shareData);
      } else {
        alert("Your browser not support navigator.share()");
      }
    },
    fetchSingleMeal() {
      this.$store.dispatch("getMeal", this.routerId);
    },

    toggleLike() {
      this.$store.commit("toggleLike", this.meal);
    },
  },

  mounted() {
    this.fetchSingleMeal();
  },

  computed: {
    ...mapState({
      isLoading: (state) => state.meals.isLoading,
      meal: (state) => state.meals.singleMeal,
      likedMeals: (state) => state.liked.likedMeals,
    }),
    isLiked() {
      return this.likedMeals.find((s) => s.id === this.meal.idMeal);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";

h1,
i,
p,
h2,
a,
li {
  color: $color-light !important;
}

i {
  text-shadow: 0 0 3px $color-black;
}

h1,
h2 {
  text-shadow: 3px 3px 5px $color-black;
}

p {
  text-shadow: 2px 2px 5px $color-black;
}

.bg {
  position: relative;
}
.recipe {
  padding: 10px 5px;

  &__back {
    @include btn(0, 100%);
    margin-bottom: 20px;
  }

  &__title {
    @include flex(center, space-between);

    h1 {
      @include headerText;
      max-width: 600px;
      margin-right: 25px;
    }

    .actions {
      @include flex;

      i {
        cursor: pointer;
        font-size: $font-md;

        &:nth-child(1) {
          margin-right: 18px;
        }

        &.liked {
          color: $color-secondary !important;
        }
      }
    }
  }

  &__img {
    z-index: -1;
    position: absolute;
    object-fit: cover;
    filter: blur(5px);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  &__video {
    border: 1px solid $color-primary;
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    height: 600px;
    margin: 10px 0;
  }

  &__tags {
    @include flex(center, flex-start);
    flex-wrap: wrap;

    &_tag {
      margin-top: 10px;
      @include flex;
      background: $color-black-50;
      padding: 8px;
      border-radius: 10px;
      margin-right: 12px;

      p {
        @include bodyText;
      }

      i {
        margin-right: 8px;
      }
    }
  }

  &__instructions {
    margin-top: 25px;

    p {
      letter-spacing: 2px;
      line-height: 20px;
      @include bodyText;
      background: $color-black-50;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 20px;
    }

    h2 {
      @include headerText;
      margin-bottom: 10px;
    }

    a {
      background: $color-secondary;
      padding: 8px;
      border-radius: 8px;
      text-decoration: none;
    }
  }

  &__ingredients {
    margin-top: 20px;
    list-style-type: none;

    h2 {
      @include headerText;
      margin-bottom: 10px;
    }

    li {
      @include bodyText;
      cursor: pointer;
      transition: 0.3s all linear;
      padding: 10px 8px;
      border-bottom: 1px solid $color-light;
      background: $color-black-50;

      &:hover {
        background: $color-secondary;
        color: $color-black;
      }
    }
  }
}

@media (max-width: 620px) {
  .recipe__video {
    height: 350px;
  }
}

@media (max-width: 360px) {
  .recipe__video {
    height: 250px;
  }
}
</style>
