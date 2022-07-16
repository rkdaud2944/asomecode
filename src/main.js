import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import errorLog from "@/utils/errorLog";
import ElementPlus from "element-plus";
import ko from "element-plus/es/locale/lang/ko";
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import "element-plus/dist/index.css";

const app = createApp(App).use(Quasar, quasarUserOptions).use(Quasar, quasarUserOptions)
    .use(router)
    .use(createPinia())
    .use(ElementPlus, { locale: ko })
    .use(Quasar, quasarUserOptions);

app.config.errorHandler = (e) => {
    console.log("------->", e);
    errorLog.sendMessage(JSON.stringify(e));
};

app.mount('#app');