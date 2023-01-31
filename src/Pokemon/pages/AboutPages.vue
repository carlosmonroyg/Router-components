<template>
    <h1>Vue Router Components </h1>
    <hr />
    <h2>{{ name }}</h2>
    <button @click="onchange">Cambiar nombre</button>

</template>


<script>


export default {
    data() {
        return {
            name: 'Carlos'
        }
    },
    methods: {
        onchange() {
            console.log('se cambiara el nombre a Eduardo')
            this.name = 'Eduardo'
            console.log(this.name)
        }
    },
    beforeCreate() { console.log('beforeCreate') },
    created() { console.log('create') },
    beforeMount() { console.log('beforeMount') },
    mounted() { console.log('mounted') },
    beforeUpdate() { console.log('beforeUpdate') },
    updated() { console.log('update') },
    activated() { console.log('activated') },
    deactivated() { console.log('deactivated') },
    beforeUnmount() { console.log('beforeunmount') },
    unmounted() { console.log('unmounted') },
    errorCaptured() { console.log('errorCapture') },
    renderTriggered() { console.log('renderTiggered') },
    renderTracked() { console.log('renderTracked') },
}
</script>
