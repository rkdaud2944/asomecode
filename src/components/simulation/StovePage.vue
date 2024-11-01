<template>
    <div style="position: relative;">
		<img src="@/assets/images/simulation/stove/back.png" style="position: absolute;">
		<img id="img_stove" src="@/assets/images/simulation/stove/stove_off.png" @click="this.stove_on()" style="position: absolute;">
	</div>	
</template>


<script>
import simulationImg from "@/assets/simulationImages";

export default {

	data() {
		return {
            stoveOff: simulationImg.stoveOff,
            stoveOn: simulationImg.stoveOn,
		}
	},
    
    mounted() {
		window.addEventListener('message', (msg) => {
			let message = {};
			
			// 데이터가 문자열인지 체크하여 JSON.parse()를 조건적으로 사용합니다.
			if (typeof msg.data === 'string') {
				try {
					message = JSON.parse(msg.data);
				} catch (error) {
					console.error('Error parsing message data as JSON:', error);
					return; // 에러 발생 시 함수 실행을 중단합니다.
				}
			}

			if (message.type === 'simulationJS') {
				eval("this."+message.func)
			}
		});
    },

// 난로 시뮬레이션 이해 못함,, 멈춰두기
    methods: {
        stove_off() {
            document.getElementById("img_stove").src = this.stoveOff;
        },

        stove_on() {
            document.getElementById("img_stove").src = this.stoveOn;
        }

    }
}
</script>