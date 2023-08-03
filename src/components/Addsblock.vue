<template>
  <div style="padding: 10px">
    <div data-aos-duration="1000" data-aos="zoom-in" class="add container">
      <h3 class="add__title">Join our member and get discount up to 50%</h3>
      <button class="add__btn"><p>Sign Up</p></button>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddsBlock",
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";

.add {
  @include flex;
  flex-direction: column;
  border-radius: 20px;
  background: url("/src/assets/img/foodbg.png") no-repeat;
  background-size: cover;
  height: 380px;
  text-align: center;

  &__title {
    margin-bottom: 20px;
    @include headerText;
    max-width: 600px;
    color: $color-light;
  }

  &__btn {
    @include btn(100%, 0);
    padding: 12px 35px;
  }
}
</style>
