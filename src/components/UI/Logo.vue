<template>
  <div class="logo" @click="$router.push({ name: 'home' })">
    <h4 class="logo__title">Let’sFood</h4>
    <img src="/logo.svg" alt="Logo" />
  </div>
</template>
<script>
export default {
  name: "v-logo",
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/_mixins.scss";

.logo {
  cursor: pointer;
  @include flex(center, start);

  &__title {
    @include title1Text;
    margin-right: 5px;
  }

  img {
    width: 47px;
    height: 47px;
  }
}
</style>
