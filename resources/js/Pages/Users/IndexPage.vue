<template>

    <modal-component classNames="p-4 rounded" v-if="showModal" @close="showModal = false">
        <template v-slot:header>
            <h2>Create new user</h2>
        </template>
        <template v-slot:body>
            <form class="p-4 rounded bg-white w-96 mx-auto" @submit.prevent="createUser">
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

                <button type="submit" class="p-4 rounded-lg bg-blue-600 text-white">Create</button>
            </form>
        </template>
    </modal-component>

    <div class="bg-gray-100">
        <div class="container mx-auto bg-white py-32 px-4">
            <div class="flex justify-between items-center mb-10">
                <h1 class="text-xl font-bold">Users</h1>
                <button @click="showModal = true" class="bg-green-500 text-white px-5 py-3 rounded">Add</button>
            </div>

            <table v-if="users.length" class="table-auto w-full border-collapse border border-gray-500">
                <thead>
                <tr class="bg-green-50">
                    <td class="p-2 border border-gray-500">#</td>
                    <td class="p-2 border border-gray-500">Name</td>
                    <td class="p-2 border border-gray-500">Email</td>
                    <td class="p-2 border border-gray-500">Actions</td>
                </tr>
                </thead>
                <tbody>
                <template v-for="(user, userIndex) in users" :key="userIndex">
                    <tr class="hover:bg-gray-50">
                        <td class="p-2 border border-gray-500">{{ user.id }}</td>
                        <td class="p-2 border border-gray-500">{{ user.name }}</td>
                        <td class="p-2 border border-gray-500">{{ user.email }}</td>
                        <td class="p-2 border border-gray-500">
                            <div class="flex space-x-3">
                                <button class="py-2 px-4 bg-blue-500 text-white rounded" @click="pay(user.id)">
                                    Pay
                                </button>
                                <button class="py-2 px-4 bg-red-600 text-white rounded" @click="deleteUser(user.id)">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <div v-for="(payment, paymentIndex) in user.payments" :key="paymentIndex">
                            <p>{{payment.title}} - {{payment.amount + payment.currency}}</p>
                        </div>
                    </tr>
                </template>
                </tbody>
            </table>

            <div v-else class="text-center">
                <h1 class="text-xl font-bold">
                    No users
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
import useUsers from "../../composables/users";
import {onMounted, reactive, ref} from "vue";
import ModalComponent from "../../Components/ModalComponent";

export default {
    components: {ModalComponent},
    setup() {
        onMounted(() => {
            getUsers()
        })

        const showModal = ref(false)
        const errors = ref([])
        const form = reactive({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        })

        const { users, getUsers, storeUser, destroyUser } = useUsers()
        const pay = (user_id) => {
            axios.post('/api/pay', {
                user_id: user_id
            }).then(res => {
                window.open(res.data.payment.hosted_url, '_blank');
            }).catch(err => {
                console.log(err.response.data)
            })
        }

        const deleteUser = (userId) => {
            if (window.confirm('Are you sure?')) {
                destroyUser(userId).then(res => {
                    alert('deleted')
                }).catch(err => {
                    alert(err)
                })
            }
        }

        const createUser = () => {
            storeUser(form).then(res => {
                alert('created')
                showModal.value = false
                errors.value = []
            }).catch(err => {
                errors.value = err.response.data.errors
            })
        }

        return {
            users,
            form,
            errors,
            showModal,
            pay,
            createUser,
            deleteUser,
        }
    }
}
</script>

<style scoped>

</style>
