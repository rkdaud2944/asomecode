import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import errorLog from "@/utils/errorLog";
import ElementPlus from "element-plus";
import ko from "element-plus/es/locale/lang/ko";
import WaveUI from 'wave-ui'
import "element-plus/dist/index.css";
import 'wave-ui/dist/wave-ui.css'

const app = createApp(App)
    .use(router)
    .use(createPinia())
    .use(ElementPlus, { locale: ko });

new WaveUI(app, {
    // Some Wave UI options.
})

app.config.errorHandler = (e) => {
    console.log("------->", e);
    errorLog.sendMessage(JSON.stringify(e));
};

app.mount('#app');