<template>
  <!-- Header Section -->
  <HomeHeader />
  <!-- Services Section -->
  <HomeServices />
  <!-- Menu Section -->
  <HomeMenu />
  <!-- About Section -->
  <HomeAbout />
  <!-- Adds section -->
  <AddsBlock />
</template>

<script>
export default {
  mounted() {
    // Getting meals
    this.$store.dispatch("getAllMeals", "d");
  },
};
</script>
