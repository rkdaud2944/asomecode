<template>
	<div style="position: relative;">
		<img src="@/assets/images/simulation/lunar_lander/back.png" style="position: absolute;">
		<img id="ship" src="@/assets/images/simulation/lunar_lander/lander_plain.png" style="position: absolute; left: 162px;">
	</div>
</template>

<script>
export default {

    
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
		lunar_lander_engine_on() {
            document.getElementById("ship").src = "@/assets/images/simulation/lunar_lander/lander_firing.png";
		},

		lunar_lander_engine_off() {
            document.getElementById("ship").src = "@/assets/images/simulation/lunar_lander/lander_plain.png";
		},

		lunar_lander_moveto(x, y) {
            document.getElementById("ship").style.left = x + 'px';
            document.getElementById("ship").style.top = y + 'px';
		},

		lunar_lander_explode() {			
            document.getElementById("ship").src = "@/assets/images/simulation/lunar_lander/lander_crashed.png";

			// var audio = new Audio('../../audio/boom.ogg');
			// audio.play();
		}
    }

}
</script>

<style>

</style>