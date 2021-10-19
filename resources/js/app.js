import { createApp, h } from "vue";
import App from "./Layout/App";
import router from './router'

const app = createApp(App);

app.use(router)

app.mount('#app')

require('./bootstrap');

