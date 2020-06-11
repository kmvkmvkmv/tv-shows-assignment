<template>
  <v-app>
    <Header />
    <v-content class="grey darken-4">
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { getAllShows } from "./services/tv-show-service";
import Header from "@/components/shared-components/Header";
import Footer from "@/components/shared-components/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getAllShows().then(response => {
        this.$store.dispatch("changeshowList", response);
        this.$store.dispatch("changeDataAvailability", true);
      });
    }
  },
  data: () => ({
    //
  })
};
</script>
