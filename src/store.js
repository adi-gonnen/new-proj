import Vue from 'vue'
import Vuex from 'vuex'
import ItemService from '@/services/ItemService.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    setItems(state, {items}) {
      state.items = items;
    },
  },
  getters: {
    ItemsDisplay(state) {
      console.log('getters', state.items);
      return state.items
    },
  },
  actions: {
    loadItems(context, payload) {
      return ItemService.getItems()
          .then( (items) => {
            console.log('actions', items);
              context.commit({type: 'setItems', items})
          })
    },
  }
})
