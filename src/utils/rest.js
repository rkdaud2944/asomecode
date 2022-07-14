import axios from 'axios'
import {useEtcStore} from '@/store/etc'
import errorLog from './errorLog'

const etc = useEtcStore();

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASEURL,
});
/*
instance.interceptors.request.use(function (config) {  
    if (config["method"] === "get") {
        etc.loading = true;
    }

    if (store.state.main.token !== null) {
        config["headers"] = {
            Authorization: `Bearer ${store.state.main.token}`,
        };
    }
    return config;
});
*/
instance.interceptors.response.use(
    function (response) {
        etc.loading = false;
        return Promise.resolve(response);
    },

    function (error) {
        etc.loading = false;
        errorLog.sendMessage(JSON.stringify(error));
        return Promise.reject(error);
    }
);

export default instance;
