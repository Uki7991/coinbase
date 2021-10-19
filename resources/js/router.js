import WelcomePage from "./Pages/WelcomePage";
import UsersPage from "./Pages/Users/IndexPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import {createRouter, createWebHistory, useRouter as router} from "vue-router";
import AuthMiddleware from "./middleware/AuthMiddleware";

const routes = [
    {path: '/', component: WelcomePage, name: 'home'},
    {
        path: '/users',
        component: UsersPage, name: 'users',
        beforeEnter: AuthMiddleware
    },
    {path: '/register', component: RegisterPage, name: 'register'},
    {path: '/login', component: LoginPage, name: 'login'},
]

export default createRouter({
    history: createWebHistory(),
    routes
})
