<template>
  <input
    v-model="value"
    @input="$emit('update:modelValue', $event.target.value)"
    class="input"
    type="text"
  />
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  name: "v-input",
  data() {
    return {
      value: this.modelValue,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_varribles.scss";
.input {
  transition: 0.3s all ease;
  padding: 12px 8px;
  outline: none;
  border: none;
  background: $color-light;
  box-shadow: 0 5px 5px $color-primary;
  border: 2px solid $color-primary;
  width: 600px;
  font-size: $font-smm;
  border-radius: 8px;

  &:focus {
    border-color: $color-secondary;
    box-shadow: 0 5px 5px $color-secondary;
  }
}

@media (max-width: 640px) {
  .input {
    width: 100%;
  }
}
</style>
