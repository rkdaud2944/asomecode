import router from "@/router";
import bridgeOut from "./bridge-out";

export default {
    methods: {
        goBack() {
            router.go(-1);
        },

        goTo(path) {
            router.push({path: path});
        },

        sendCode(code) {
            bridgeOut.sendCode(code);
        }
    }
}