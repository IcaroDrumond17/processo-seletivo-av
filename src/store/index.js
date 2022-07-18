import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    repositories: [],
    favorites: [],
  },
  getters: {
    getRepositories: state => state.repositories,
    getFavorites: state => state.favorites
  },
  mutations: {
    controlRepositories: (state, rep) => state.repositories = rep,
    controlFavorites: (state, rep) => state.favorites = rep
  },
  actions: {
    getRepositories: context => context.commit('getFavorites'),
    getFavorites: context => context.commit('getFavorites')
  },
  modules: {}
})