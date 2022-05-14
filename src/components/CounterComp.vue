<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct acces: {{ $store.state.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="incrementRandom">Random</button>

    <h1>MapState</h1>
    <h2>MapState: {{ count }}</h2>
    <h2>MapState: {{ lastMutation }}</h2>
</template>

<script>

import { mapState } from "vuex";

export default {

    computed: {
        countComputed() {
            return this.$store.state.count
        },
        ...mapState(['count', 'lastMutation'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
    },

    methods: {
        increment() {
            this.$store.commit('increment')            
        },
        incrementBy(value) {
            this.$store.commit('incrementBy', value)
        },
        incrementRandom() {
            this.$store.dispatch('incrementRandomInt')
        }
    }

}
</script>

<style>
</style>