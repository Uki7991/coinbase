import {ref, reactive, computed } from "vue";
import store from "../store";
import router from "../router";

export default function useUsers() {
    const users = computed(() => store.state.users)
    const currentUser = computed(() => store.state.currentUser)

    const login = (data) => {
        axios.post('/api/login', data).then(res => {
            storeToken(res.data.token)
            getCurrentUser()
            router.push({ name: 'home' })
        }).catch(res => {
            errors.value = res.response.data.errors
        })
    }

    const register = (data) => {
        axios.post('/api/register', data).then(res => {
            storeToken(res.data.token)
            login(data)
            getCurrentUser()
            router.push({ name: 'home' })
        }).catch(error => {
            errors.value = error.response.data.errors
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
        getCurrentUser,
        logout
    }
}
