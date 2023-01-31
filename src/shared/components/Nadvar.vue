<template>
    <div>
        <router-link to="/">Pokemon List</router-link>
        <router-link to="/id">Pokemon por Id</router-link>
        <router-link to="/about">About</router-link>

    </div>
</template>

<style scoped>
div {
    padding: 0 30px;
}
div a {
    font-weight: bold;
    color: cadetblue;
    margin: 0 10px;
}
a.router-link-exact-active{
    color:aqua;
}
</style>