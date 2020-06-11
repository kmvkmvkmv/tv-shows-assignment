<template>
  <v-card @click="details(show.id)" hover elevation="20" max-height="500px" max-width="500px">
    <v-img
      lazy-src="../../assets/square-image.png"
      :src="imageUrl"
      class="white--text align-end"
      aspect-ratio="1"
      height="350"
      width="270"
      :alt="show.name"
      contain
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0 white--text" align="center" justify="center">
          <h2>{{show.name}}</h2>
        </v-row>
      </template>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "ShowCard",
  props: {
    show: Object
  },
  data: () => {
    return {};
  },
  computed: {
    imageUrl() {
      return this.show.image ? this.show.image.medium : "";
    }
  },
  methods: {
    details(id) {
      this.$router.push({ path: `/details/${id}` });
    }
  }
};
</script>