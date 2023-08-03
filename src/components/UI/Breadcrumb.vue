<template>
  <div class="breadcrumb">
    <h4 class="breadcrumb__title">Browse by alphabet</h4>
    <div class="breadcrumb__btns">
      <RouterLink
        @click="onChangeLetter(letter)"
        :to="{ query: { letter: letter } }"
        v-for="letter in letters"
        :key="letter"
        class="breadcrumb__btns_item"
        :class="{ activeBtn: currentLetter === letter }"
      >
        <p>{{ letter }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-breadcrumb",
  data() {
    return {
      letters: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      currentLetter: this.$route.query.letter || "A",
    };
  },

  methods: {
    onChangeLetter(letter) {
      this.currentLetter = letter;
    },
  },

  watch: {
    currentLetter(state) {
      this.$store.dispatch("getAllMeals", state);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/_mixins.scss";
.breadcrumb {
  margin: 25px auto;
  @include flex;
  flex-direction: column;

  &__title {
    @include headlineText;
    margin-bottom: 10px;
  }

  &__btns {
    @include flex;
    flex-wrap: wrap;
    &_item {
      @include btn(100%, 0);
      margin-right: 8px;
      margin-top: 15px;

      &:hover,
      &.activeBtn {
        transform: translateX(0);
      }
    }
  }
}
</style>
