import WelcomePage from "./Pages/WelcomePage";
import UsersPage from "./Pages/UsersPage";

export default [
    { path: '/', component: WelcomePage, name: 'home' },
    { path: '/users', component: UsersPage, name: 'users' }
];
