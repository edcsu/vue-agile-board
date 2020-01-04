<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title> AgileBoard </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Plan the right way</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <AgileBoard/>
    </v-content>
  </v-app>
</template>

<script>
import AgileBoard from './views/AgileBoard';

export default {
  name: 'App',

  components: {
    AgileBoard,
  },

  data: () => ({
  }),
};
</script>
