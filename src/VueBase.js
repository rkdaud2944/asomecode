import { Notify } from 'quasar'
import router from "@/router";
import bridgeOut from "./bridge-out";
import windows from "@/utils/windows";

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
                router.push({path: path, query: params});
            } else {
                router.push({path: path});
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