<template>
    <div style="position: relative;">
        <img src="@/assets/images/simulation/soil_sensor/back.png" style="position: absolute;">
        <img id="sun" src="@/assets/images/simulation/soil_sensor/sun.png" @click="this.write_value(0)" style="position: absolute; left: 100px; top: 20px;">
        <img id="rain" src="@/assets/images/simulation/soil_sensor/rain.png" @click="this.write_value(100)" style="position: absolute; left: 200px; top: 20px;">
        <img id="dry" src="@/assets/images/simulation/soil_sensor/dry.png" style="position: absolute; left: 150px; top: 150px; display: none;">
        <img id="wet" src="@/assets/images/simulation/soil_sensor/wet.png" style="position: absolute; left: 150px; top: 150px; display: block;">
    </div>
</template>

<script>
import remoteSerial from "@/globals/remote-serial";

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
        ...remoteSerial,

        write_value(value) {
            document.getElementById("dry").style.display = "none";
            document.getElementById("wet").style.display = "none";

            switch (value) {
                case 0:  document.getElementById("dry").style.display = "block"; break;
                default: document.getElementById("wet").style.display = "block"; break;
            }

            var text = `Code=Input/Text=${value}/`;
            // this.run_cmd(String.format(text, value));
            this.runCode(text);
        }
    }
}
</script>

<style>

</style>