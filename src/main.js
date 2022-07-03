import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import ElementPlus from "element-plus";
import ko from "element-plus/es/locale/lang/ko";
import errorLog from "@/utils/errorLog";

const app = createApp(App)
    .use(router)
    .use(createPinia())
    .use(ElementPlus, { locale: ko });

app.config.errorHandler = (e) => {
    console.log("------->", e);
    errorLog.sendMessage(JSON.stringify(e));
};
    
app.mount('#app');