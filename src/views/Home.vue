<template>
  <div class="dark-background">
    <homepage-carousel />
    <categorywise-list />
  </div>
</template>

<script>
import HomepageCarousel from "@/components/home-components/HomepageCarousel.vue";
import CategorywiseList from "@/components/home-components/CategorywiseList";

export default {
  name: "Home",
  components: {
    CategorywiseList,
    HomepageCarousel
  },
  data: () => ({
    //
  })
};
</script>
<style scoped>
.dark-background {
  background-color: #1e1e1e;
}
</style>