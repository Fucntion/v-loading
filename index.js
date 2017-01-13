/**
 * v-loading
 * @author function
 */


const loadingComponent = require('./loading.vue')

const Loading = {
  install: function(Vue) {
    Vue.component('loading', loadingComponent)
  }
}

module.exports = Loading