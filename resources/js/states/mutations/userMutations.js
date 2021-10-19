export default {
    setUsers(state, payload) {
        state.users = payload
    },
    setCurrentUser(state, payload) {
        state.currentUser = payload
    },
    logout(state) {
        state.currentUser = null
    }
}
