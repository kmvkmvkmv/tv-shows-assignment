<template>
  <v-container v-if="Object.keys(detailedData).length != 0" class="black lighten-5" fluid>
    <v-btn color="blue-grey" class="ma-2 white--text" @click="$router.go(-1)">
      <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
    </v-btn>
    <v-row justify="space-around">
      <v-col cols="12" md="4">
        <image-component :imageUrlProp="detailedData.image" />
      </v-col>
      <v-col class="dark" cols="12" md="4">
        <summary-component :detailedData="detailedData" />
      </v-col>
      <v-col class="pa-2" cols="12" md="4">
        <characters-component :casts="detailedData._embedded.cast" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getShowById } from "../services/tv-show-service";
import ImageComponent from "@/components/details-components/ImageComponent";
import CharactersComponent from "@/components/details-components/CharactersComponent";
import SummaryComponent from "@/components/details-components/SummaryComponent";

export default {
  name: "Details",
  data() {
    return {
      detailedData: {}
    };
  },
  components: {
    ImageComponent,
    CharactersComponent,
    SummaryComponent
  },
  mounted() {
    if (this.id) {
      this.fetchDetailedData();
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    fetchDetailedData() {
      getShowById(this.id).then(response => {
        this.detailedData = response;
      });
    }
  }
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