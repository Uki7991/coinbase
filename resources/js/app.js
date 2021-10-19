import { createApp, h } from "vue";
import { createWebHistory, createRouter } from 'vue-router'
import App from "./Layout/App";
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);

app.use(router)

app.mount('#app')

require('./bootstrap');

