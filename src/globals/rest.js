// src/globals/rest.js - 기존 구조 유지하면서 Pinia 에러만 수정

import axios from 'axios'
import errorLog from './error-log'
import { Notify } from 'quasar'

// Pinia store 안전하게 초기화
let etcStore = null

function initEtcStore() {
    if (!etcStore) {
        try {
            const { useEtcStore } = require('@/store/etc')
            etcStore = useEtcStore()
        } catch (error) {
            console.warn('ETC Store 초기화 실패:', error)
            // Fallback 객체 - loading 상태 추적용
            etcStore = {
                loading: false
            }
        }
    }
    return etcStore
}

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASEURL,
})

instance.interceptors.request.use(function (config) {
    if (config["method"] === "get") {
        const store = initEtcStore()
        store.loading = true
    }

    // if (store.state.main.token !== null) {
    //     config["headers"] = {
    //         Authorization: `Bearer ${store.state.main.token}`,
    //     };
    // }
    return config
})

instance.interceptors.response.use(
    function (response) {
        const store = initEtcStore()
        store.loading = false
        return Promise.resolve(response)
    },

    function (error) {
        const store = initEtcStore()
        store.loading = false
        errorLog.sendMessage(0, JSON.stringify(error))
        Notify.create({
            color: "deep-orange",
            textColor: "white",
            message: error.message,
        })
        return Promise.reject(error)
    }
)

export default instance