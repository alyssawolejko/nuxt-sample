import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    index: 0,
    type: 'question',
    status: ''
  },
  mutations: {
    nextSlide (state) {
      state.index++
    },
    reset (state) {
      state.index = 0
      state.type = 'question'
      state.status = ''
    },
    updateType (state, payload) {
      state.type = payload
    },
    updateStatus (state, payload) {
      state.status = payload
    }
  }
})

export default store
