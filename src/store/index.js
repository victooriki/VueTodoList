import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    StoreTodos(state, data) {
      state.todos = data
    },

    StoreTodo(state, data) {
      const index = state.todos.findIndex(todo => todo.id === data.id)

      index >= 0 ? state.todos.splice(index, 1, data) : state.todos.push(data)
    },

    deleteTodo: (state, id) => {
      const index = state.todos.findIndex(todo => todo.id === id)

      if (index >= 0) {
        state.todos.splice(index, 1)
      }
    }
  },
  actions: {
    getTodos({ commit }) {
      return axios.get('http://localhost:3000/todos')
        .then(response => {
          commit('StoreTodos', response.data)
        })
    },

    addTodo({ commit }, data) {
      return axios.post('http://localhost:3000/todos', data).then(response => {
        commit('StoreTodo', response.data)
      })
    },

    updateTodo({ commit }, { id, data }) {
      return axios.put(`http://localhost:3000/todos/${id}`, data).then(response => {
        commit('StoreTodo', response.data)
      })
    },

    deleteTodo({ commit }, id) {
      return axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
        commit('deleteTodo', id)
      })
    },
  },
  getters: {
  },
  modules: {
  }
})
