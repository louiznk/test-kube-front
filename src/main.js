// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.$serviceUrl = 'http://whoami.192.168.39.154.xip.io/api' // TODO charger cela depuis le serveur

/* eslint-disable no-new */
new Vue({
  beforeCreate: function() {
    console.log(this.$serviceUrl)
  },
  el: '#app',
  components: { App },
  template: '<App/>'
})
