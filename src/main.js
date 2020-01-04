import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.filter('formatMoneyFilter', function (amount) {
  if (!amount) return ''
    // check if its a float and keep only two decimals
    let floatPattern = /^([0-9]+)?[.][0-9]+?$/
    if (floatPattern.test(amount)) {
      return amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
