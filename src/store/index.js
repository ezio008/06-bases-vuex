import getRandomInt from '@/helpers/getRandomInt'
import { createStore } from 'vuex'

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none'
    },
    mutations: {
        increment(state) {
            state.count++
            state.lastMutation= 'increment +1'
        },
        incrementBy(state, value) {
            state.count += value
            state.lastMutation= `incrementBy +${value}`
        }
    },
    actions: {
        async incrementRandomInt(context) {
            const randomInt = await getRandomInt()
            context.commit('incrementBy', randomInt)
        }
    }
})