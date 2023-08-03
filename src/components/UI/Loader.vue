<template>
  <div class="loader"></div>
</template>
<script>
export default {
  name: "v-loader",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_varribles.scss";
.loader {
  margin: 20px auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 8px solid $color-black;
  border-top: 8px solid $color-primary;
  animation: 1s rotate linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
