<template>
  <div class="dark-background">
    <v-btn color="blue-grey" class="ma-2 white--text" @click="$router.go(-1)">
      <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
    </v-btn>
    <v-card class="justify-space-around d-flex flex-wrap" tile dark>
      <show-card class="ma-4" v-for="(item, idx) in searchResult" :key="idx" :show="item.show" />
    </v-card>
  </div>
</template>

<script>
import { getShowByName } from "../services/tv-show-service";
import ShowCard from "@/components/shared-components/ShowCard";

export default {
  name: "Search",
  components: {
    ShowCard
  },
  data: () => {
    return {
      searchResult: []
    };
  },
  created() {},
  mounted() {
    if (this.searchQuery) {
      this.bringSearchResultFromStore();
    }
  },
  computed: {
    searchQuery() {
      return this.$store.getters.getSearchQuery;
    }
  },
  watch: {
    searchQuery() {
      this.setSearchData();
    }
  },
  methods: {
    setSearchData() {
      getShowByName(this.searchQuery).then(response => {
        this.searchResult = response;
        this.$store.dispatch("changeSearchResult", response);
      });
    },
    bringSearchResultFromStore() {
      this.searchResult = this.$store.getters.getSearchResult;
    }
  }
};
</script>

<style scoped>
.dark-background {
  background-color: #1e1e1e;
}
</style>
