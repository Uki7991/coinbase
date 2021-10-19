import store from "../../store";

export default {
    getUsers(context, users) {
        context.commit('setUsers', users)
    },
    getCurrentUser(context, user) {
        return new Promise((resolve, reject) => {
            axios.get('/api/current-user')
                .then(res => {
                    context.commit('setCurrentUser', res.data.user)
                    resolve(context.state.currentUser)
                })
                .catch(err => {
                    console.log(err.response)
                    reject(err.response);
                })
        })
    },
    logout(context) {
        axios.post('/api/logout').then(() => {
            context.commit('logout')
        }).catch(err => {
            console.log(err.response)
        })
    }
}
