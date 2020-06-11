import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showList: [],
    dataAvailability: false,
    searchQuery: null,
    searchResult: []
  },
  mutations: {
    changeshowList: (state, showList) => {
      state.showList = showList
    },
    changeDataAvailability: (state, dataAvailability) => {
      state.dataAvailability = dataAvailability
    },
    changeSearchQuery: (state, searchQuery) => {
      state.searchQuery = searchQuery
    },
    changeSearchResult: (state, searchResult) => {
      state.searchResult = searchResult
    }
  },
  getters: {
    getShowList: state => (state.showList),
    getDataAvailability: state => (state.dataAvailability),
    getSearchQuery: state => (state.searchQuery),
    getSearchResult: state => (state.searchResult)
  },
  actions: {
    changeshowList(context, data) {
      context.commit('changeshowList', data)
    },
    changeDataAvailability(context, data) {
      context.commit('changeDataAvailability', data);
    },
    changeSearchQuery(context, data) {
      context.commit('changeSearchQuery', data);
    },
    changeSearchResult(context, data) {
      context.commit('changeSearchResult', data);
    }
  },
  modules: {
  }
})
