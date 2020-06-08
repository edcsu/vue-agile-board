<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title> AgileBoard </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-tooltip bottom nudge-left="70">
        <template v-slot:activator="{ on }">
          <v-btn
            href="https://www.linkedin.com/in/ssewannonda-keith-edwin-443303129"
            target="_blank"
            icon
            v-on="on"
          >
            <v-icon class="svg-icon" v-text="'$vuetify.icons.linkedin'"></v-icon>
          </v-btn>
        </template>
        <span>
          Find on LinkedIn
          <v-icon class="">mdi-hand-pointing-up</v-icon>
        </span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            href="https://twitter.com/skeith696"
            target="_blank"
            icon
            v-on="on"
          >
            <v-icon class="svg-icon" v-text="'$vuetify.icons.twitter'"></v-icon>
          </v-btn>
        </template>
        <span>
          Follow on twitter
          <v-icon class="">mdi-hand-pointing-up</v-icon>
        </span>
      </v-tooltip>
    </v-app-bar>

    <v-content dark> 
      <AgileBoard />
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
