<template>

    <div class="shadow">
        <div class="container mx-auto flex justify-between">
            <ul class="inline-flex">
                <li>
                    <router-link :to="{name: 'home'}"><p class="py-3 px-5">Home</p></router-link>
                </li>
                <li>
                    <router-link :to="{name: 'users'}"><p class="py-3 px-5">Users</p></router-link>
                </li>
            </ul>
            <ul class="inline-flex">
                <li>
                    <router-link :to="{name: 'register'}"><p class="py-3 px-5">Register</p></router-link>
                </li>
                <li>
                    <router-link :to="{name: 'login'}"><p class="py-3 px-5">Login</p></router-link>
                </li>
            </ul>
        </div>
    </div>

    <main class="bg-gray-100">
        <router-view></router-view>
    </main>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
