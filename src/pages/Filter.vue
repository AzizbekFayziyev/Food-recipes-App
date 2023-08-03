<template>
  <section class="filter container">
    <Ingredients @onChoose="onChooseingredient" />

    <div class="title">
      <h3 data-aos-duration="1000" data-aos="fade-up">Search by name</h3>
    </div>

    <form @submit.prevent class="filter__search">
      <v-input
        v-model="searchQuery"
        v-focus
        data-aos="fade-right"
        data-aos-duration="1200"
        placeholder="Meal name"
      />
      <button
        type="submit"
        @click="onSearch"
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <p>Search</p>
      </button>
    </form>

    <MealCard :isLoading="isLoading" :meals="meals" />

    <button @click="onRandom" :disabled="isLoading" class="filter__random">
      <p>Random Meal</p>
    </button>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Filter",
  data() {
    return {
      searchQuery: this.$route.query.search,
      ingredientQuery: this.$route.query.ingredient,
    };
  },

  methods: {
    onSearch() {
      if (this.searchQuery.trim()) {
        this.$store.dispatch("searchByName", this.searchQuery);
        this.$router.push({ query: { search: this.searchQuery } });
      }
    },
    onChooseingredient(name) {
      this.$store.dispatch("byIngredient", name);
      this.ingredientQuery = name;
      this.$router.push({ query: { ingredient: name } });
    },
    onRandom() {
      this.$store.dispatch("randomMeal");
      this.$router.push("/filter");
    },
  },
  mounted() {
    if (this.searchQuery) {
      this.$store.dispatch("searchByName", this.searchQuery);
    } else if (this.ingredientQuery) {
      this.$store.dispatch("byIngredient", this.ingredientQuery);
    } else {
      this.onRandom();
    }
  },

  computed: {
    ...mapState({
      isLoading: (state) => state.filter.isLoading,
      meals: (state) => state.filter.data.meals,
    }),
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";

.filter {
  margin-top: 20px;
  .title {
    @include title;
  }

  &__search {
    @include flex;
    margin-bottom: 30px;

    button {
      margin-left: 8px;
      @include btn(0, 100%);
      padding: 15px 5px;
      width: 80px;
      border-radius: 8px;
    }
  }

  &__random {
    @include btn(100%, 0);
    display: block;
    margin: 0 auto;
    margin-top: 26px;
  }
}
</style>
