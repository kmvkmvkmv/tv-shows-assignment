<template>
  <v-card dark height="550px" class="text-center custom-scroll">
    <v-card-title class="headline justify-center" v-text="detailedData.name"></v-card-title>
    <v-card-subtitle v-text="detailedData.language"></v-card-subtitle>
    <h4>{{detailedData.type}}</h4>
    <h5>
      <span v-for="(gen, idx) in detailedData.genres" :key="idx">
        &nbsp;
        <span v-if="idx != 0">|</span>
        {{gen}}
      </span>
    </h5>
    <v-row class="mt-4 mb-4 justify-center">
      <v-icon>mdi-movie</v-icon>
      <div class="grey--text ml-4">{{detailedData.runtime}} minutes</div>
    </v-row>
    <v-rating
      v-if="detailedData.rating.average"
      v-model="detailedData.rating.average"
      background-color="white"
      color="yellow accent-4"
      dense
      hover
      :length="10"
      size="18"
      readonly
    />
    <span
      v-if="detailedData.rating.average"
      class="grey--text text--lighten-2 caption mr-2"
    >({{ detailedData.rating.average }})</span>
    <p class="pa-4" v-html="detailedData.summary"></p>
  </v-card>
</template>

<script>
export default {
  name: "SummaryComponent",
  props: {
    detailedData: Object
  },
  data: () => ({
    //
  })
};
</script>

<style scoped>
.custom-scroll {
  overflow-y: scroll;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}
</style>