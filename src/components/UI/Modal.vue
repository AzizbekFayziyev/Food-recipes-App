<template>
  <div @click.stop="$emit('onClose', isOpen)" v-if="isOpen" class="modal">
    <div data-aos="zoom-in" @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-modal",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isOpen(state) {
      document.documentElement.style.overflow = state ? "hidden" : "auto";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_varribles.scss";
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: $color-black-50;
  z-index: 99999;
  display: grid;
  place-items: center;
  backdrop-filter: blur(5px);

  &__content {
    background: $color-light;
    padding: 10px;
    border-radius: 8px;
    max-width: 90%;
    max-height: 500px;
    overflow-y: auto;
  }
}
</style>
