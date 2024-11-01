<template>
    <div style="position: relative;">
        <img src="@/assets/images/simulation/water_sensor/back.png" style="position: absolute;">
        <img id="water_1" src="@/assets/images/simulation/water_sensor/water_1.png" style="position: absolute; left: 0px; top: 0px; display: none;">
        <img id="water_2" src="@/assets/images/simulation/water_sensor/water_2.png" style="position: absolute; left: 0px; top: 0px; display: none;">
        <img id="water_3" src="@/assets/images/simulation/water_sensor/water_3.png" style="position: absolute; left: 0px; top: 0px; display: none;">
        <img id="water_4" src="@/assets/images/simulation/water_sensor/water_4.png" style="position: absolute; left: 0px; top: 0px; display: none;">
        <img id="level_0" src="@/assets/images/simulation/water_sensor/level_0.png" @click="this.write_value(0)"  style="position: absolute; left: 220px; top: 260px;">
        <img id="level_1" src="@/assets/images/simulation/water_sensor/level_1.png" @click="this.write_value(10)" style="position: absolute; left: 220px; top: 230px;">
        <img id="level_2" src="@/assets/images/simulation/water_sensor/level_2.png" @click="this.write_value(20)" style="position: absolute; left: 220px; top: 200px;">
        <img id="level_3" src="@/assets/images/simulation/water_sensor/level_3.png" @click="this.write_value(30)" style="position: absolute; left: 220px; top: 170px;">
        <img id="level_4" src="@/assets/images/simulation/water_sensor/level_4.png" @click="this.write_value(40)" style="position: absolute; left: 220px; top: 140px;">
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
            document.getElementById("water_1").style.display = "none";
            document.getElementById("water_2").style.display = "none";
            document.getElementById("water_3").style.display = "none";
            document.getElementById("water_4").style.display = "none";

            switch (value) {
                case 10: document.getElementById("water_1").style.display = "block"; break;
                case 20: document.getElementById("water_2").style.display = "block"; break;
                case 30: document.getElementById("water_3").style.display = "block"; break;
                case 40: document.getElementById("water_4").style.display = "block"; break;
            }

            this.writeInput(value);
        }


    }

}
</script>

<style>

</style>