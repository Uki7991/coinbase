export default {
    setUsers(state, payload) {
        state.users = payload.users
    },
    setCurrentUser(state, payload) {
        state.currentUser = payload
    },
    logout(state) {
        state.currentUser = null
    }
}
