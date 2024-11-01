<template>
    <div style="position: relative;">
		<img :src="spacecraftBack" style="position: absolute;">
		<img id="ship" :src="spaceship" style="position: absolute; display: none; left: 189px; top: 240px;">

		<img id="asteroid_1" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_2" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_3" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_4" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_5" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_6" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_7" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_8" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_9" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_10" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_11" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_12" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_13" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_14" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_15" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_16" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_17" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_18" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_19" :src="asteroidImg" style="position: absolute; display: none;">
		<img id="asteroid_20" :src="asteroidImg" style="position: absolute; display: none;">
	</div>
</template>

<script>
import simulationImg from "@/assets/simulationImages";

export default {
    data() {
        return{
            x: null,
            speed: 1,
            asteroids: [],

            spacecraftBack: simulationImg.spacecraftBack,
            asteroidImg: simulationImg.asteroid,
            spaceship: simulationImg.spaceship,
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

        const ship = document.querySelector('#ship');
        if (ship) {
            const leftValue = window.getComputedStyle(ship).getPropertyValue('left');
            this.x = parseFloat(leftValue);
        }

        for (let i = 1; i <= 30; i++) {
            const asteroid = document.querySelector(`#asteroid_${i}`);
            if (asteroid) {
                this.asteroids.push(asteroid);
            }
        }
        
        this.randomAsteroids()
        this.startAsteroids();
    },
    
    beforeUnmount() {
        clearInterval(this.interval);
        clearInterval(this.interval2);
    },

    
	methods: {
        start() {
            document.querySelector('#ship').style.display = "block";
        },

        move_left() {
            this.x -= 1;
            document.querySelector('#ship').style.left = `${this.x}px`;
        },

        move_right() {
            this.x += 1;
            document.querySelector('#ship').style.left = `${this.x}px`;
        },

        set_speed(value) {
            this.speed = value;
        },

        ship_explode() {
            document.querySelector('#ship').style.display = "none";

            // let audio = new Audio('../../audio/boom.ogg');
            // audio.play();
        },

        check_collision(ax, ay) {
            if (document.querySelector('#ship').style.display === "none") {
                return false;
            }

            let shipRect = document.querySelector('#ship').getBoundingClientRect();
            let left = shipRect.left + 11;
            let top = shipRect.top + 11;

            ax += 16;
            ay += 12;

            this.distance = (left - ax) ** 2 + (top - ay) ** 2;
            return this.distance <= (23 * 23);
        },
        startAsteroids() {
            this.interval = setInterval(() => {
                for (let i = 0; i < this.asteroids.length; i++) {
                    let asteroid = this.asteroids[i];
                    if (asteroid.style.display === "block") {
                        let left = parseFloat(asteroid.style.left);
                        let top = parseFloat(asteroid.style.top);

                        asteroid.style.top = `${top + this.speed}px`;

                        if (this.check_collision(left, top)) {
                            this.ship_explode();
                            asteroid.style.display = "none";
                        }

                        if (parseFloat(asteroid.style.top) > 300) {
                            asteroid.style.display = "none";
                        }
                    }
                }
            }, 10);
        },

        randomAsteroids() {
            this.interval2 = setInterval(() => {
                var index = Math.floor(Math.random() * 30);
                var ax = Math.floor(Math.random() * (400-23));

                if (this.asteroids[index].style.display == "none") {
                    this.asteroids[index].style.left = `${ax}px`;
                    this.asteroids[index].style.top = 0;
                    this.asteroids[index].style.display = "block";
                }
            }, 250);
        },

    }
}

</script>
