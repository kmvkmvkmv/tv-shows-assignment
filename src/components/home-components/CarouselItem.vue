<template>
  <v-container @click="details(show.id)">
    <v-row justify="space-between">
      <v-col cols="6" md="6">
        <v-card class="black lighten-2">
          <v-card-title class="headline justify-center">
            <h2>{{show.name}}</h2>
          </v-card-title>
          <div class="text-center ma-2">
            <v-chip color="primary" v-for="genre in show.genres" :key="genre" class="ma-2">
              <v-icon left color="yellow">mdi-movie</v-icon>
              {{genre}}
            </v-chip>
          </div>
          <v-card-text class="custom-length" v-html="show.summary"></v-card-text>
          <div class="text-center ma-2">
            <v-chip color="grey">
              <strong>{{show.rating.average}}</strong>
              <v-icon right color="green">mdi-star</v-icon>
            </v-chip>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6" md="6">
        <v-img
          contain
          class="white--text align-end hover"
          :aspect-ratio="1.5"
          :src="show.image.original"
          position="right"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CarouselItem",
  data: () => {
    return {};
  },
  props: {
    show: Object
  },
  methods: {
    details(id) {
      this.$router.push({ path: `/details/${id}` });
    }
  }
};
</script>

<style scoped>
.custom-length {
  overflow: hidden;
  max-height: 230px;
}
</style>

