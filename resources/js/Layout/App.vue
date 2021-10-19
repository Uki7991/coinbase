<template>
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'users'}">Users</router-link>

    <router-view></router-view>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
