import { Notify } from 'quasar'
import router from "@/router";
import bridgeOut from "../globals/bridge-out";
import windows from "@/globals/windows";

/**
 * Vue 콤포넌트의 공통 기능을 제공한다.
 */
export default {
    data() {
        return {
            selectedSubjectSetId: null,
        }
    },

    methods: {
        refresh() {
            bridgeOut.refresh();
        },

        goBack() {
            router.go(-1);
        },

        goTo(path, params) {
            if (params) {
                router.push({ path: path, query: params });
            } else {
                router.push({ path: path });
            }
        },

        openRouterPath(path) {
            if (this.boWindow && !this.boWindow.closed) {
                window.alert('창이 이미 열려 있습니다.');
                this.boWindow.focus();
            } else {
                let route = this.$router.resolve({ path: path });
                this.boWindow = window.open(route.href);
            }
        },

        openUrl(name, url) {
            windows.open(name, url);
        },

        sendCode(code) {
            bridgeOut.sendCode(code);
        },

        showSuccess() {
            Notify.create({
                type: "positive",
                color: "blue",
                textColor: "white",
                message: "요청하신 작업이 완료되었습니다."
            });
        },

        showError(response) {
            Notify.create({
                color: "deep-orange",
                textColor: "white",
                message: response.data.message,
            });
        },
    }
}