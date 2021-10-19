import {ref, reactive, computed } from "vue";
import store from "../store";
import router from "../router";

export default function useUsers() {
    const users = computed(() => store.state.users)
    const currentUser = computed(() => store.state.currentUser)

    const login = (data) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/login', data).then(res => {
                resolve(res)
                storeToken(res.data.token)
                getCurrentUser()
                router.push({ name: 'home' })
            }).catch(res => {
                reject(res.response)
            })
        })
    }

    const register = (data) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/register', data).then(res => {
                resolve(res)
                storeToken(res.data.token)
                login(data)
                getCurrentUser()
                router.push({ name: 'home' })
            }).catch(error => {
                reject(error.response)
            })
        })
    }

    const storeToken = (token) => {
        localStorage.setItem('token', token)
        token = localStorage.getItem('token') || token
        axios.defaults.headers.common['Authorization'] = "Bearer " + token
    }

    const deleteToken = () => {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
    }

    const getCurrentUser = () => {
        store.dispatch('getCurrentUser')
    }

    const getUsers = () => {
        return store.dispatch('getUsers')
    }

    const storeUser = (data) => {
        return store.dispatch('storeUser', data)
    }

    const destroyUser = (userId) => {
        return store.dispatch('destroyUser', userId)
    }

    const logout = () => {
        store.dispatch('logout')
        router.push({ name: 'home' })
    }

    return {
        users,
        currentUser,
        login,
        register,
        getUsers,
        storeUser,
        destroyUser,
        getCurrentUser,
        logout
    }
}
