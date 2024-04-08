<template>
	<canvas id="track" width="400" height="300" style="display: none;"></canvas>
	<img id="track_image" src="@/assets/images/simulation/car_race/track.png" style="display: none;">

	<div style="position: relative;">
		<img id="background" src="@/assets/images/simulation/car_race/back.png" style="position: absolute;">
		<img id="bullet" src="@/assets/images/simulation/car_race/bullet.png" style="position: absolute; left: -100px;">
		<div id="timeboard" style="position: absolute; left: 180px; top: 137px; font-size: 20px;">0 sec</div>
	</div>
</template>

<script>
import simulationImg from "@/assets/simulationImages";

export default {
    
    data() {
        return {
            x: 196,
            y: 35,
            position: 0,
            blank_image: null,
            end: simulationImg.carRaceEnd,
            back: simulationImg.carRaceBack,
        }
    },

    computed: {
        
        canvas() {
            return document.getElementById("track")
        },

        ctx() {
            return this.canvas.getContext("2d");
        },

        image() {
            return document.getElementById("track_image")
        },

    },

    beforeMount() {
    },

    async mounted() {
		await window.addEventListener('message', (msg) => {
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

        await this.ctx.drawImage(this.image, 0, 0);
        this.blank_image = this.ctx.getImageData(0, 0, 1, 1);
        await this.bullet_move();
    },

    
    methods: {   
        show_time(time_str) {
            document.getElementById("timeboard").innerHTML = time_str + " sec";
        },

        bullet_move() {
            var bullet = document.getElementById("bullet");
            bullet.style.left = (this.x - 27) + 'px';
            bullet.style.top = (this.y - 27) + 'px';
        },

        car_start() {
            document.getElementById("background").src = this.back;

            this.x = 196;
            this.y = 35;
            this.position = 0;
            this.ctx.drawImage(this.image, 0, 0);

            this.bullet_move();
        },

        find_next_pixel() {
            var West  = [255, 255, 255, 255];
            var East  = [255, 255, 255, 255];
            var North = [255, 255, 255, 255];
            var South = [255, 255, 255, 255];

            var NE = [255, 255, 255, 255];
            var ES = [255, 255, 255, 255];
            var SW = [255, 255, 255, 255];
            var WN = [255, 255, 255, 255];

            if (this.x > 0)   West  = this.ctx.getImageData(this.x-1, this.y, 1, 1).data;
            if (this.x < 399) East  = this.ctx.getImageData(this.x+1, this.y, 1, 1).data;
            if (this.y > 0)   North = this.ctx.getImageData(this.x, this.y-1, 1, 1).data;
            if (this.y < 299) South = this.ctx.getImageData(this.x, this.y+1, 1, 1).data;

            if ((this.x < 399) && (this.y > 0))   NE = this.ctx.getImageData(this.x+1, this.y-1, 1, 1).data;
            if ((this.x < 399) && (this.y < 299)) ES = this.ctx.getImageData(this.x+1, this.y+1, 1, 1).data;
            if ((this.x > 0)   && (this.y < 299)) SW = this.ctx.getImageData(this.x-1, this.y+1, 1, 1).data;
            if ((this.x > 0)   && (this.y > 0))   WN = this.ctx.getImageData(this.x-1, this.y-1, 1, 1).data;

            this.ctx.putImageData(this.blank_image, this.x, this.y);

            // 현재 위치에서 흰색이 아닌 픽셀을 찾습니다.
            if (West[0] != 255) {
                // 자동차를 왼쪽으로 이동시킵니다.
                this.x = this.x - 1; 
            } else if (East[0] != 255) {
                // 자동차를 오른쪽으로 이동시킵니다.
                this.x = this.x + 1;
            } else if (North[0] != 255) {
                // 자동차를 위쪽으로 이동시킵니다.
                this.y = this.y - 1; 
            } else if (South[0] != 255) {
                // 자동차를 아래쪽으로 이동시킵니다.
                this.y = this.y + 1;
            } else if (NE[0] != 255) {
                // 자동차를 오른쪽 위 대각선 방향으로 이동시킵니다.
                this.x = this.x + 1;
                this.y = this.y - 1;
            } else if (ES[0] != 255) {
                // 자동차를 오른쪽 아래 대각선 방향으로 이동시킵니다.
                this.x = this.x + 1;
                this.y = this.y + 1;
            } else if (SW[0] != 255) {
                // 자동차를 왼쪽 아래 대각선 방향으로 이동시킵니다.
                this.x = this.x - 1;
                this.y = this.y + 1;
            } else if (WN[0] != 255) {
                // 자동차를 왼쪽 위 대각선 방향으로 이동시킵니다.
                this.x = this.x - 1;
                this.y = this.y - 1;
            } else {
                // 모든 방향이 흰색이면 자동차가 경로 끝에 도달한 것으로 간주하고 중지합니다.
                document.getElementById("background").src = this.end;
                return false;
            }

            this.bullet_move();

            return true;
        },

        car_move(value) {
            var count = value - this.position;
            this.position = value;
            for (var i = 0; i < count; i++) {
                // if (!this.find_next_pixel());
                this.find_next_pixel();
            }
        }

    }
}
</script>

<style>

</style>