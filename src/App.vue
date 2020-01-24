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

    <v-content dark> 
      <v-card>
        <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Last Backup Time</v-list-item-title>
                <v-list-item-subtitle>
                  {{ Date() }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  Number of Records Backed Up
                </v-list-item-title>
                <v-list-item-subtitle>
                  100,000
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  Number of records pending
                </v-list-item-title>
                <v-list-item-subtitle>
                  5,000
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      </v-card>
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
