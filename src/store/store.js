import { createStore } from 'vuex'

const store = createStore({
  state: {
    boViewTitle : null,
    viewcode : null,
  },
  mutations: {
    setBoViewTitle (state,title) {
      state.boViewTitle = title
    },
    setCode (state,newCode) {
      state.viewcode = newCode
    }
  }
})

export default store
