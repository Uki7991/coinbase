import store from "../../store";

export default {
    getUsers(context, users) {
        axios.get('/api/users').then(res => {
            context.commit('setUsers', res.data.users)
        }).catch(err => {
        })
    },
    storeUser(context, data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/users', data).then(res => {
                resolve(res)
                context.dispatch('getUsers')
            }).catch(err => {
                reject(err)
            })
        })
    },
    destroyUser(context, userId) {
        return new Promise((resolve, reject) => {
            axios.delete('/api/users/'+userId).then(res => {
                resolve(res)
                context.dispatch('getUsers')
            }).catch(err => {
                reject(err.response)
            })
        })
    },
    getCurrentUser(context, user) {
        axios.get('/api/current-user')
            .then(res => {
                localStorage.setItem('currentUser', res.data.user)
                context.commit('setCurrentUser', res.data.user)
            })
            .catch(err => {
                console.log(err.response)
            })
    },
    logout(context) {
        axios.post('/api/logout').then(() => {
            localStorage.removeItem('currentUser')
            context.commit('logout')
        }).catch(err => {
            console.log(err.response)
        })
    }
}
