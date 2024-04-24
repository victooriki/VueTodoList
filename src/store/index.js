import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    StoreTodos(state, data) {
      state.todos = data
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
