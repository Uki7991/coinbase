<template>
    <div class="bg-gray-100 py-32">
        <form class="p-4 rounded bg-white w-96 mx-auto" @submit.prevent="login(form)">
            <h1 class="font-bold mb-4">Login</h1>
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

            <button type="submit" class="p-4 rounded-lg bg-blue-600 text-white">Login</button>
        </form>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
import useUsers from '../composables/users';
import router from "../router";

export default {
    setup() {
        const form = reactive({
            email: '',
            password: '',
        })
        const errors = ref(null)
        const { login } = useUsers()

        return {
            form,
            errors,
            login,
        }
    }
}
</script>

<style scoped>

</style>
