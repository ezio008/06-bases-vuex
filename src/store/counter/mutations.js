
export default {
    increment(state) {
        state.count++
        state.lastMutation= 'increment +1'
    },
    incrementBy(state, value) {
        state.count += value
        state.lastMutation= `incrementBy +${value}`
    },
    setLoading(state, value) {
        state.loading = value
        state.lastMutation= `setLoading ${value}`
    }
}