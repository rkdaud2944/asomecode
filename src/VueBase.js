import router from "@/router";
import bridgeOut from "./bridge-out";

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

        openUrl(url) {
            window.open(url, "_blank");
        },

        sendCode(code) {
            bridgeOut.sendCode(code);
        }
    }
}