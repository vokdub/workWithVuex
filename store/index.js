import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    name: '',
    surname: '',
    date: '',
    counter: 0
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    saveName (state, message) {
    	state.name = message
    },
    updateSurname (state, value) {
    	state.surname = value
    },
    updateDate (state, value) {
    	state.date = value
    }
  }
})

export default store