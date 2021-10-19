import { ref, reactive } from "vue";


export default function useUsers() {
    const users = ref([])
    const currentUser = reactive(null)

    const storeToken = (token) => {
        axios.defaults.headers.common['Authorization'] = "Bearer " + token
    }

    return {
        users,
        currentUser,
        storeToken,
    }
}
