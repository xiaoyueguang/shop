import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    header: {
      title: '首页',
      right: {
        text: '',
        show: false,
        fn () {}
      }
    },
  },
  getters: {
  },
  mutations: {
    setTitle (state, title) {
      state.header.title = title
    },
    setRight (state, {
      text = '',
      show = false,
      fn = () => {}
    }) {
      state.header.right.text = text
      state.header.right.show = show
      state.header.right.fn = fn
    }
  }
})

export default store
