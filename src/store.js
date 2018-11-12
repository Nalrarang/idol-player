import Vue from 'vue'
import Vuex from 'vuex'
import * as albumService from './services/album'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    releaseData: [],
  },
  getters: {
    getReleaseData: function(state) {
      return state.releaseData      
    } 
  },
  mutations: {
    fetch_release_data(state, payload) {
        console.log('fetch_release_data', payload)
        state.releaseData = payload.data
    }
  },
  actions: {
    async getNewRelease(context) {
      const res = await albumService.getRelease()
      console.log(res)
      context.commit('fetch_release_data', res)
    }
  }
})
