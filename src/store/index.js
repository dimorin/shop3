import Vue from 'vue'
import Vuex from 'vuex'

import banner from './banner/index.js'
import product from './product/index.js'
import cart from './cart/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    banner,
    product,
    cart
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
