<template>

    <div class="shadow">
        <div class="container mx-auto flex justify-between">
            <ul class="inline-flex">
                <li>
                    <router-link :to="{name: 'home'}"><p class="py-3 px-5">Home</p></router-link>
                </li>
                <li v-if="currentUser">
                    <router-link :to="{name: 'users'}"><p class="py-3 px-5">Users</p></router-link>
                </li>
            </ul>
            <ul v-if="!currentUser" class="inline-flex">
                <li>
                    <router-link :to="{name: 'register'}"><p class="py-3 px-5">Register</p></router-link>
                </li>
                <li>
                    <router-link :to="{name: 'login'}"><p class="py-3 px-5">Login</p></router-link>
                </li>
            </ul>
            <ul v-else class="inline-flex">
                <li>
                    <p @click="logout" class="py-3 px-5 cursor-pointer">Logout</p>
                </li>
            </ul>
        </div>
    </div>

    <main class="bg-gray-100">
        <router-view></router-view>
    </main>
</template>

<script>
import useUsers from "../composables/users";

export default {
    setup() {
        const { logout, currentUser } = useUsers()

        return {
            currentUser,
            logout,
        }
    }
}
</script>

<style scoped>

</style>
