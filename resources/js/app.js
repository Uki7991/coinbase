import { createApp } from "vue";
import App from "./Pages/App";

const app = createApp(App);

app.mount('#app')

require('./bootstrap');

