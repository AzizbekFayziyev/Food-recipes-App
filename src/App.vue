<template>
  <div>
    <v-navbar />
    <RouterView />
    <v-footer />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.commit("loadLikedMeals");
    // Re:plain
    window.replainSettings = { id: "6167246d-810e-4f20-b6d5-dcc343778f36" };
    (function (u) {
      var s = document.createElement("script");
      s.async = true;
      s.src = u;
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    })("https://widget.replain.cc/dist/client.js");
  },
};
</script>
