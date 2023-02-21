<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <h2>computed: {{ $store.state.count }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randomInt" :disabled="isLoding">Random</button>
  <h2>mapState</h2>
  <h3>mapState{{ count }}</h3>
  <h3>lastMutation:{{ lastMutation }}</h3>
</template>
<script>
import { mapState , mapActions } from "vuex";
export default {

  computed: {
    counterComputed() {
      return this.$store.state.count;
    },
    ...mapState(["count", "lastMutation", "isLoding"]),
    // ...mapState({
    //     count: state => state.count,
    //     lastMutation: state => state.lastMutation
    // }),
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    incrementBy() {
      this.$store.commit("incrementBy",5);
    },
    ...mapActions({
      randomInt: 'incrementRandomInt'
    })
  
  },
};
</script>

<style></style>
