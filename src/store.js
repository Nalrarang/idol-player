import Vue from 'vue'
import Vuex from 'vuex'
import * as albumService from './services/album'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    releaseData: [],
    counter: 0
  },
  getters: {
    getReleaseData: function(state) {
      return state.releaseData      
    } 
  },
  mutations: {


  },
  actions: {
    getNewRelease: function(context) {
      const res = albumService.getRelease()
      console.log(res)
      // context.commit('fetch_release_data')
    }
  }
})
