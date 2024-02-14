import { defineStore } from "pinia";

export const useConnectStore = defineStore("connect",  {
    // id: "connect", 

    state: () => ({
            mode: 'none', // 'none', 'serial', 'ble'
            connectionState: 'disconnected', // 초기 연결 상태
    }),

    getters: { 
        modeTest: (state)=> {
            return state.mode;
        }
    }, 

    actions: {
        setMode(newMode) {
            this.mode = newMode; 
        },
        scanning() {
            this.connectionState = 'scanning';
        },
        connecting() {
            this.connectionState = 'connecting';
        }, 
        connected() {
            console.log("cont 안임")
            this.connectionState = 'connected';
        }, 
        disconnect() {
            this.setMode('none');
            this.connectionState = 'disconnected';
        }, 
        handleError() {
            this.connectionState = 'error';
        },
    }
}); 