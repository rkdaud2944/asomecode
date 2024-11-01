<template>
    <div style="position: relative;">
		<img id="background" src="@/assets/images/simulation/dht_screen/back.png" style="position: absolute; width: 100%;">
		<img id="thermometer" src="@/assets/images/simulation/dht_screen/thermometer.png" style="position: absolute; width: 100%;">

		<div id="bar"></div>

		<div id="temperature" style="position: absolute; left: 58%; padding-top: 29%; font-size: 1.2em;">
			00 C
		</div>

		<div id="humidity" style="position: absolute; left: 58%; padding-top: 45%; font-size: 1.2em;">
			00 %
		</div>
	</div>
</template>

<script>
export default {

	data() {
		return {
			rate_x: 1.0,
			rate_y: 1.0,
			offset: 5.0,
			bar_left: 165.0,
			bar_top: 196.0,
			bar_width: 4.0,
			bar_height: 50.0,
		}
	},

	mounted() {
		var background = document.getElementById("background");
		var bar = document.getElementById("bar");

		var rate_x = background.offsetWidth / 400;
		var rate_y = background.offsetHeight / 300;

		this.offset = this.offset * rate_y;

		this.bar_width = this.bar_width * rate_x;
		this.bar_height = this.bar_height * rate_y;

		this.bar_left = this.bar_left * rate_x - (this.bar_width / 2);
		this.bar_top = this.bar_top * rate_y;

		bar.style.left = this.bar_left + 'px';

		this.dht_display(0, 0);


		
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
		increaseHeight() {
			var bar = document.getElementById("bar");
			var height = bar.offsetHeight;
			var top = parseFloat(bar.style.top) - this.offset;

			bar.style.height = (height + this.offset) + 'px';
			bar.style.top = top + 'px';
		},

		decreaseHeight() {
			var bar = document.getElementById("bar");
			var height = bar.offsetHeight;
			var top = parseFloat(bar.style.top) + this.offset;

			bar.style.height = (height - this.offset) + 'px';
			bar.style.top = top + 'px';
		},

		dht_display(temperature, humidity) {
			document.getElementById("temperature").textContent = temperature + " C";
			document.getElementById("humidity").textContent = humidity + " %";
		}

	}
}
</script>