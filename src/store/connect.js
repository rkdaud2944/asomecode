import { defineStore } from "pinia";

export const useConnectStore = defineStore("connect",  {
    id: "connect", 

    state: () => ({
        mode: 'serial', //'serial', 'ble'
        connectionState: 'disconnected', // 초기 연결 상태
    }),
 
    actions: {
        setMode(newMode) {
            this.mode = newMode; 
        },
        connect() {
            this.connectionState = 'connecting';
            this.connectionState = 'connected';
        }, 
        disconnect() {
            this.connectionState = 'disconnected';
        }, 
        handleError() {
            this.connectionState = 'error';
        }
    }
}); 