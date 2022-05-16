<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct acces: {{ $store.state.counter.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="incrementRandomInt" :disabled="loading">Random</button>

    <h1>MapState</h1>
    <h2>MapState: {{ count }}</h2>
    <h2>MapState: {{ lastMutation }}</h2>

    <h2>Direct Getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>

import { mapState, mapActions } from "vuex";

export default {

    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count', 'lastMutation', 'loading'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
    },

    methods: {
        increment() {
            this.$store.commit('counter/increment')            
        },
        incrementBy(value) {
            this.$store.commit('counter/incrementBy', value)            
            // this.randomInt()
        },        
        ...mapActions('counter', ['incrementRandomInt'])
        // ...mapActions('counter', {
        //     randomInt: 'incrementRandomInt'
        // })
    }

}
</script>

<style>
</style>