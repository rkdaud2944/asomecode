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
            console.log('Pinia mode 변경됨:', this.mode); // 변경될 때 로그
        },
        scanning() {
            this.connectionState = 'scanning';
        },
        connecting() {
            this.connectionState = 'connecting';
        }, 
        connected() {
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