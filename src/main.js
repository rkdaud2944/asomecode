import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import errorLog from "@/globals/error-log";
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import store from "./store/store";


const app = createApp(App)
    .use(router)
    .use(createPinia())
    .use(Quasar, quasarUserOptions)
    .use(store);

app.config.errorHandler = (e) => {
    console.log("------->", e);
    errorLog.sendMessage(JSON.stringify(e));
};

// Vue.config.productionTip = false


app.mount('#app');