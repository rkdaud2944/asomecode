import { Notify } from 'quasar'
import router from "@/router";
import bridgeOut from "../globals/bridge-out";
import windows from "@/globals/windows";

let simulator = [];
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

        openRouterPath(path, code) {            
            let route = this.$router.resolve({ path: path });
            

            switch (path) {
                case '/simulation/dice' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=420,height=360'); // 400 300;
                    break;
                case '/editor' : 
                    localStorage.setItem("code", code);
                    break;
                default:
                    window.open(route.href);
                    break;

            }

            // 시뮬레이션 창 사이즈 조절
            // if (path === '/simulation/dice') {
            //     simulator['simulator'] = window.open(route.href, 'simulator', 'width=420,height=360'); // 400 300
            //     console.log("simulator['simulator'] 오픈라우터 안에 : "+simulator['simulator'])
            // }else{
            //     window.open(route.href);
            // }
        },

        simulJS(params){
            console.log("simulJS 오픈라우터 밑에 : "+JSON.stringify(simulator['simulator']));
            simulator['simulator'].postMessage(JSON.stringify(params), "*");
        },

        
        // simulJS(message) {
        //     if (this.simulatorWindow && !this.simulatorWindow.closed) {
        //         // simulatorWindow는 window.open으로 생성된 창의 참조입니다.
        //         this.simulatorWindow.postMessage(message, "*"); // "*"는 모든 출처를 허용합니다. 실제 사용시 더 안전한 출처 지정을 고려하세요.
        //     } else {
        //         console.error("창이 정의되지 않았거나 이미 닫혔습니다.");
        //     }
        // },

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