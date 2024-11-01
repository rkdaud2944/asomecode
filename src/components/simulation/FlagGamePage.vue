<template>
    <div style="position: relative;">
		<img src="@/assets/images/simulation/flag_game/back.png" style="position: absolute;">
		<img id="img_gunman" src="@/assets/images/simulation/flag_game/ready.png" style="position: absolute;">
	</div>
</template>

<script>
import simulationImg from "@/assets/simulationImages";

export default {	
	data() {
		return {
			flag: [simulationImg.flag0, simulationImg.flag1, simulationImg.flag2, simulationImg.flag3],
			win: [simulationImg.flagWin1, simulationImg.flagWin2]
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

	methods: {

		// 실행안됨 확인 필요
		gunman_ready(count) {
			document.getElementById("img_gunman").src = this.flag[count];
		},

		gunman_win(player) {
			document.getElementById("img_gunman").src = this.win[player-1];

			var audio = new Audio('@/assets/audio/applause.ogg');
			audio.play();
		}

	}


}
</script>

<style scoped>
</style>