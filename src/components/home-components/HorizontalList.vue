<template>
  <v-sheet dark tile color="dark" class="mx-auto mt-4">
    <h1 align="center">{{genreName}}</h1>
    <v-slide-group class="pa-4" center-active show-arrows>
      <v-slide-item v-for="(show, idx) in genre" :key="idx">
        <show-card :show="show" class="ma-4" />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import ShowCard from "@/components/shared-components/ShowCard";

export default {
  name: "HorizontalList",
  components: {
    ShowCard
  },
  props: {
    genre: Array,
    genreName: String
  },
  data: () => ({
    //
  })
};
</script>