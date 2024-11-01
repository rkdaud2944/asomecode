<template>
    <div style="position: relative;">
        <img src="@/assets/images/simulation/cannon/back.png" style="position: absolute;">

        <div id="info" style="position: absolute; left: 10px; top: 10px;"></div>

        <img id="cannon" src="@/assets/images/simulation/cannon/cannon.png" style="position: absolute; top: 220px;">
        <img id="target" src="@/assets/images/simulation/cannon/target.png" style="position: absolute; left: 315px; top:235px;">
        <img id="bullet" src="@/assets/images/simulation/cannon/bullet.png" style="position: absolute; left: -100px;">
    </div>
</template>

<script>
import simulationImg from "@/assets/simulationImages";

export default {

    data() {
        return {
            angle: 0,
            power: 0,
            target: simulationImg.target,
            boom: simulationImg.boom,
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

        
		String.format = function() {
			var s = arguments[0];
			for (var i = 0; i < arguments.length - 1; i++) {
				var reg = new RegExp("\\{" + i + "\\}", "gm");
				s = s.replace(reg, arguments[i + 1]);
			}
			return s;
		}

    },

    methods: {
        
		cannon_angle(a) {
			this.angle = a;
            document.querySelector("#cannon").style.transform = `rotate(${a}deg)`;
            document.querySelector("#info").innerHTML = String.format("Angle: {0} <br>Power: {1}", this.angle, this.power);
		},

		cannon_power(p) {
			this.power = p;
            document.querySelector("#info").innerHTML = String.format("Angle: {0} <br>Power: {1}", this.angle, this.power);
		},

		bullet_moveto(x, y) {
            document.getElementById("bullet").style.left = x + 37 - 8 + 'px';
            document.getElementById("bullet").style.top = - y + (220 + 45) - 8 + 'px';
		},

		target_moveto(x) {
            document.getElementById("target").src = this.target;
            document.getElementById("target").style.left = x + 37 - 25 + 'px';
		},

		cannon_fire() {
			this.bullet_moveto(0, 0);
			// var audio = new Audio('../../audio/fire.ogg');
			// audio.play();
		},

		target_explode() {
			this.bullet_moveto(-1000, -1000);
            document.getElementById("target").src = this.boom;
			// var audio = new Audio('../../audio/boom.ogg');
			// audio.play();
		}
    }

}
</script>

<style>

</style>