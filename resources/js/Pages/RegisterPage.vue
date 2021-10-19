<template>
    <div class="bg-gray-100 py-32">
        <form class="p-4 rounded bg-white w-96 mx-auto" @submit.prevent="register">
            <h1 class="font-bold mb-4">Register</h1>
            <div class="mb-4">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="form.name" class="border rounded mt-2 w-full bg-white focus:ring focus:ring-gray-300 focus:ring-1">
                <small v-if="errors && errors.name" class="text-red-600 mt-1">{{ errors.name[0] }}</small>
            </div>
            <div class="mb-4">
                <label for="email">Email</label>
                <input type="text" id="email" v-model="form.email" class="border rounded mt-2 w-full bg-white focus:ring focus:ring-gray-300 focus:ring-1">
                <small v-if="errors && errors.email" class="text-red-600 mt-1">{{ errors.email[0] }}</small>
            </div>
            <div class="mb-4">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="form.password" class="border rounded mt-2 w-full bg-white focus:ring focus:ring-gray-300 focus:ring-1">
                <small v-if="errors && errors.password" class="text-red-600 mt-1">{{ errors.password[0] }}</small>
            </div>
            <div class="mb-4">
                <label for="password_confirmation">Confirm password</label>
                <input type="password" id="password_confirmation" v-model="form.password_confirmation" class="border rounded mt-2 w-full bg-white focus:ring focus:ring-gray-300 focus:ring-1">
            </div>

            <button type="submit" class="p-4 rounded-lg bg-blue-600 text-white">Register</button>
        </form>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
import useUsers from "../composables/users";
import router from "../router";

export default {
    setup() {
        const form = reactive({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        })

        const errors = ref(null);

        const { storeToken } = useUsers()

        const register = async () => {
            await axios.post('/api/register', form).then(res => {
                storeToken(res.data.token)
                router.push({ name: 'home' })
            }).catch(error => {
                errors.value = error.response.data.errors
            })
        }

        return {
            form,
            errors,
            register,
        }
    }
}
</script>

<style scoped>

</style>
