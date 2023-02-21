import { createStore } from "vuex";
import { getRandomInt } from "@/helpers/getRandom";

export default createStore({
  state: {
    count: 1,
    lastMutation: "none",
    isLoading: true,
    lastRandom: 0,
  },

  mutations: {
    increment(state) {
      state.count++;
      state.lastMutation = "increment";
    },
    incrementBy(state, val) {
      state.count += val;
      state.lastMutation = "incrementBy" + val;
      state.lastRandom = val;
    },
    setLoading(state,val){
      state.isLoading = val
      state.lastMutation = 'setLoding'+ val

    }
  },
  actions: {
    async incrementRandomInt({ commit }) {
      commit('setLoading', true)
      const randomInt = await getRandomInt();
      commit("incrementBy", randomInt);
      commit('setLoading',false )

    },
  },
});
