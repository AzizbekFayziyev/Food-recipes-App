<template lang="">
  <section class="category container">
    <div class="title">
      <span>By Category</span>
      <h3>Select A Category</h3>
    </div>

    <div class="category__cards">
      <template v-if="!isLoading">
        <div
          v-for="category in categories"
          @click="
            $router.push({ name: 'category', params: { name: category.strCategory } })
          "
          :key="category.idCategory"
          class="category__cards_card"
        >
          <img :src="category.strCategoryThumb" :alt="category.strCategory" />
          <h4>{{ category.strCategory }}</h4>
          <p>{{ category.strCategoryDescription }}</p>
        </div>
      </template>

      <v-loader v-else />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Category",
  computed: {
    ...mapState({
      isLoading: (state) => state.category.isLoading,
      categories: (state) => state.category.data.categories,
    }),
  },
  mounted() {
    this.$store.dispatch("getCategories");
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";

.category {
  .title {
    margin-top: 20px;
    @include title;
  }

  &__cards {
    margin-top: 20px;
    @include flex(start, center);
    flex-wrap: wrap;

    &_card {
      transition: 0.4s all ease;
      cursor: pointer;
      @include flex;
      flex-direction: column;
      padding: 10px;
      border-radius: 8px;
      margin: 20px 10px;
      width: 330px;
      background: $color-light;
      box-shadow: 0 0 8px $color-black;

      img {
        width: 100%;
      }

      h4 {
        @include title2Text;
        margin: 10px 0;
      }

      p {
        @include bodyText;
        padding: 0 10px;
        text-align: justify;
        height: 250px;
        overflow-y: auto;
      }

      &:hover {
        transform: translateY(-15px);
        background: $color-secondary;
      }
    }
  }
}

@media (max-width: 620px) {
  .category__cards_card {
    padding: 8px;
    width: 250px !important;
  }
}
</style>
