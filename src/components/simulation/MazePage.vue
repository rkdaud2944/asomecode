<template>
	<div style="position: relative;">
		<img src="@/assets/images/simulation/maze/back.png" style="position: absolute;">
		<img id="robot" src="@/assets/images/simulation/maze/down.png"  style="position: absolute;">
	</div>
</template>

<script>
export default {
    data() {
        return {

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

        this.start();
    },

    methods: {
        move_xy(x, y) {
            document.getElementById("robot").style.left = 34 * x + 18 +"px";
            document.getElementById("robot").style.top = 34 * y + 18 + "px";
        },

        start() {
            this.move_xy(0, 0)
        }
    }
}
</script>