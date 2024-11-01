import axios from 'axios'
import {useEtcStore} from '@/store/etc'
import errorLog from './error-log'
import { Notify } from 'quasar'

const etcStore = useEtcStore();

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASEURL,
});

instance.interceptors.request.use(function (config) {
    if (config["method"] === "get") {
        etcStore.loading = true;
    }

    // if (store.state.main.token !== null) {
    //     config["headers"] = {
    //         Authorization: `Bearer ${store.state.main.token}`,
    //     };
    // }
    return config;
});

instance.interceptors.response.use(
    function (response) {
        etcStore.loading = false;
        return Promise.resolve(response);
    },

    function (error) {
        etcStore.loading = false;
        errorLog.sendMessage(0, JSON.stringify(error));
        Notify.create({
            color: "deep-orange",
            textColor: "white",
            message: error.message,
        });
        return Promise.reject(error);
    }
);

export default instance;
