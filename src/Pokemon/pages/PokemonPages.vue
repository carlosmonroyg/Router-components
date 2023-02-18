<template>
  <h1>
    Pokemon: <span>#{{ id }}</span>
    <span>
      <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      </div>
    </span>
  </h1>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null, //id: null
    };
  },
  created() {
    //     const { id } = this.$route.params
    //     console.log(id)
    //    // this.id = id
    this.getPokemonId();
  },
  methods: {
    async getPokemonId() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((r) => r.json());
        this.pokemon = this.pokemon;
        console.log(pokemon);
      } catch (error) {
        this.$router.push("/");
        console.log("No hay nada que hacer aqui");
      }
    },
  },
  watch: {
    id() {
      this.getPokemonId();
    },
  },
};
</script>
