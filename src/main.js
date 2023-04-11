import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import BaseButton from "./components/BaseButton.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/index.css";

const app = createApp(App);
app.use(store);

app.use(router);
app.component("base-button", BaseButton);

app.mount("#app");
