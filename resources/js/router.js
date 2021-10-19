import WelcomePage from "./Pages/WelcomePage";
import UsersPage from "./Pages/Users/IndexPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import { createRouter, createWebHistory } from "vue-router";

const router = [
    { path: '/', component: WelcomePage, name: 'home' },
    { path: '/users', component: UsersPage, name: 'users' },
    { path: '/register', component: RegisterPage, name: 'register' },
    { path: '/login', component: LoginPage, name: 'login' },
]

export default createRouter({
    history: createWebHistory(),
    routes: router
})
