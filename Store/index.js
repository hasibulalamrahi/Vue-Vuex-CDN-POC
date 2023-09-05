
// import { createStore } from 'vuex';
const {createStore} = window.Vuex
const  store = new Vuex.Store ({
    state: {
      count: 0,
    },
    mutations: {
      increment(state) {
        state.count++;
      },
    },
    actions: {
      incrementAsync(context) {
        context.commit('increment');
      },
    },
    getters: {
      getCount: (state) => state.count,
    },
  });

 export default store