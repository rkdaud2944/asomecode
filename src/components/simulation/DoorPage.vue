<template>
    <div style="position: relative;">
		<img src="@/assets/images/simulation/door/back2.png" style="position: absolute;">
		<img id="door" src="@/assets/images/simulation/door/door.png" style="position: absolute; left: 200px; top: 50px;">
		<img src="@/assets/images/simulation/door/back1.png" style="position: absolute;">
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
        door_close() {
            document.getElementById("door").style.left = "200px";
        },

        door_open() {
            document.getElementById("door").style.left = "280px";
        }

    }

}
</script>
