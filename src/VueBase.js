import router from "@/router";
import bridgeOut from "./bridge-out";

export default {
    methods: {
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

        sendCode(code) {
            bridgeOut.sendCode(code);
        }
    }
}