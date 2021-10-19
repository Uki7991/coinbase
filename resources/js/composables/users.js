import {ref, reactive, computed } from "vue";
import store from "../store";

export default function useUsers() {
    const users = ref([])
    const currentUser = computed(() => store.state.currentUser)

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
        store.dispatch('getCurrentUser').then(res => {
            currentUser.value = res
        }).catch(err => {
            console.log(err)
        })
    }

    const logout = () => {
        store.dispatch('logout')
    }

    return {
        users,
        currentUser,
        storeToken,
        getCurrentUser,
        logout
    }
}
