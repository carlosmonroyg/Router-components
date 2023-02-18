<template>
  <div>
    <!-- <router-link :to="{name:'home'}">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }"
      >Pokemon por Id</router-link
    >
    <router-link :to="{name:'about'}">About</router-link> -->
    <custon-link
    v-for="link in links"
    :key="link.to"
    :link="link"
     />
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
  data() {
    return{
      links:  [
        {to: '/home', name: 'home'},
        {to: '/pokemonid/50', name: 'pokemon-id'},
        {to: '/About', name: 'About'},
        {to: 'https://google.com', name: 'Google'},
        {to: '/counter', name: 'Counter'},
        ]

    }
  },
  components:{
    CustonLink: defineAsyncComponent(() => import('./CustonLink.vue'))

  },
}
</script>

<style scoped>
div {
  padding: 0 30px;
}
div a {
  font-weight: bold;
  color: cadetblue;
  margin: 0 10px;
}
/* a.router-link-exact-active {
  color: aqua;
} */
</style>
