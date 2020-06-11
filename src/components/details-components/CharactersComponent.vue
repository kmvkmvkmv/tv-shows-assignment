<template>
  <v-card dark class="mx-auto">
    <v-card-title class="justify-center">Casts</v-card-title>
    <v-list height="490px" class="custom-scroll" three-line v-if="Object.keys(casts).length != 0">
      <template v-for="(cast, index) in casts">
        <v-divider v-if="index != 0" :key="index" :inset="true"></v-divider>

        <v-list-item :key="cast.character.id">
          <v-list-item-avatar>
            <v-img :src="cast.person.image.medium"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="`${cast.person.name} as ${cast.character.name}`"></v-list-item-title>
            <v-list-item-subtitle
              v-if="cast.person && cast.person.country"
            >From: {{cast.person.country.name}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "CharactersComponent",
  data: () => ({
    //
  }),
  props: {
    casts: Array
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