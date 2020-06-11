<template>
  <v-img
    lazy-src="../../assets/square-image.png"
    :src="imageUrl"
    class="white--text align-end"
    height="550px"
    position="center center"
    contain
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0 white--text" align="center" justify="center">
        <h2>No Image Available</h2>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    imageUrlProp: Object
  },
  computed: {
    imageUrl() {
      return this.imageUrlProp ? this.imageUrlProp.original : "";
    }
  }
};
</script>

<style scoped>
.border {
  border: 2px solid grey;
}
</style>