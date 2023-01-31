<template>
  <Nadvar/>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view />
</template>

<script>
import Nadvar from "@/shared/components/Nadvar";
export default {
  name: "App",
  components: {
    Nadvar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
