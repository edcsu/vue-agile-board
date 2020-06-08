// src/plugins/vuetify.js

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import GithubComponent from "../Icons/GithubComponent";
import LinkedinComponent from "../Icons/LinkedinComponent";
import TwitterComponent from "../Icons/TwitterComponent";

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
    values: {
        github: {
          component: GithubComponent
        },
        twitter: {
          component: TwitterComponent
        },
        linkedin: {
          component: LinkedinComponent
        }
      }
  },
})