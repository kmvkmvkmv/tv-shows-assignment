<template>
  <v-carousel
    interval="3000"
    cycle
    hide-delimiter-background
    vertical
    show-arrows-on-hover
    vertical-delimiters
    delimiter-icon="mdi-hexagon-outline"
  >
    <v-carousel-item v-for="(show, idx) in topFive" :key="idx">
      <v-sheet color="black lighten-3" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <carousel-item :show="show" />
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import CarouselItem from "./CarouselItem";
import { getTopFiveShows } from "@/shared/utilities/get-top-five-shows";

export default {
  name: "HomepageCarousel",
  components: {
    CarouselItem
  },
  created() {},
  mounted() {
    if (this.dataAvailable) {
      this.bringTopFiveShows();
    }
  },
  data: () => {
    return {
      topFive: []
    };
  },
  computed: {
    dataAvailable() {
      return this.$store.getters.getDataAvailability;
    }
  },
  watch: {
    dataAvailable(newValue) {
      if (newValue) {
        this.bringTopFiveShows();
      }
    }
  },
  methods: {
    bringTopFiveShows() {
      this.topFive = getTopFiveShows(this.$store.getters.getShowList);
    }
  }
};
</script>