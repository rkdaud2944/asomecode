<template>
	<div style="position: relative;">
		<img src="@/assets/images/simulation/dice/back.png" style="position: absolute;"/>
		<img id="img_dice" src="@/assets/images/simulation/dice/1.png" @click="roll_dice()" style="position: absolute;">
	</div>
</template>

<script>
import simulationImg from "@/assets/simulationImages";
import remoteSerial from "@/globals/remote-serial";

export default {	
	data() {
		return {
			diceBack: simulationImg.diceBack,
			dice: [simulationImg.dice1, simulationImg.dice2, simulationImg.dice3, simulationImg.dice4, simulationImg.dice5, simulationImg.dice6]
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
				switch (message.func) {
					case 'roll_dice()': this.roll_dice(); break;
				}
			}
		});
	},

	methods:{		
        ...remoteSerial,

		roll_dice() {
			var index = Math.floor(Math.random() * 6) + 1;
			document.getElementById("img_dice").src = this.dice[index-1];
		},

		runJS(line) { 
			try {
				eval(line);
			} catch (error) {
				console.log(error);
			}    
		}
	}
}
</script>

<style>

</style>