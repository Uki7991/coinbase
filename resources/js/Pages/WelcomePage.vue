<template>
    welcome page
    <button @click="">
        click
    </button>
</template>

<script>
import useUsers from "../composables/users";

export default {
    setup() {
        const { currentUser } = useUsers()

        return {
            currentUser,
        }
    }
}
</script>

<style scoped>

</style>
