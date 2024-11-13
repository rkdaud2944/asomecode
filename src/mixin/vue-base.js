import { Notify } from 'quasar'
import router from "@/router";
import bridgeOut from "../globals/bridge-out";
import windows from "@/globals/windows";

let simulator = [];
let ai_contents = [];
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
            console.log("path : "+path);
            switch (path) {
                case '/editor' :  
                    localStorage.setItem("code", code);
                    break;             
                case '/blockCoding' : 
                    window.open(route.href,'blockCoding', 'width=1024,height=900');
                    break;        
                case '/simulation/dice' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break; 
                case '/simulation/dht_screen' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break;
                case '/simulation/door' :  // 사이즈 조절 필요
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break;                    
                case '/simulation/flag_game' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break;
                case '/simulation/spacecraft' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break;
                case '/simulation/maze' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break;
                case '/simulation/lunar_lander' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break;
                case '/simulation/cannon' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break;
                case '/simulation/soil_sensor' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break;
                case '/simulation/stove' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break;
                case '/simulation/water_sensor' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break;                    
                case '/simulation/car_race' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break;
                case '/simulation/sliding_puzzle1' : 
                    simulator['simulator'] = window.open(route.href, 'simulator', 'width=400,height=335'); // 400 300;
                    break;
                case '/ai/selfDriving' : 
                    ai_contents['selfDriving'] = window.open(route.href, 'ai-contents', 'width=1024,height=900'); // 400 300;
                    break;
                default:
                    window.open(route.href);
                    break;
            }
        },

        simulJS(params){
            simulator['simulator'].postMessage(JSON.stringify(params), "*");
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