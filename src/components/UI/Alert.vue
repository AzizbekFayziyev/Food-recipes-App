<template lang="">
  <div class="alert">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "v-alert",
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/_mixins.scss";
.alert {
     @include title1Text;
     color: #ff3f3f;
     margin: 40px 0;
}
</style>
