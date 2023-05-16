import { createStore } from 'vuex'

const store = createStore({
  state: {
    boViewTitle: null,
  },
  mutations: {
    setBoViewTitle (state,title) {
        state.boViewTitle = title
    },
  }
})

export default store
