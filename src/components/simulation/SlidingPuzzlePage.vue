<template>    
	<div style="position: relative;">
		<img src="@/assets/images/simulation/sliding_puzzle2/back.png" style="position: absolute;">
		<img id="img_1"  src="@/assets/images/simulation/sliding_puzzle2/1.png"  style="position: absolute;">
		<img id="img_2"  src="@/assets/images/simulation/sliding_puzzle2/2.png"  style="position: absolute;">
		<img id="img_3"  src="@/assets/images/simulation/sliding_puzzle2/3.png"  style="position: absolute;">
		<img id="img_4"  src="@/assets/images/simulation/sliding_puzzle2/4.png"  style="position: absolute;">
		<img id="img_5"  src="@/assets/images/simulation/sliding_puzzle2/5.png"  style="position: absolute;">
		<img id="img_6"  src="@/assets/images/simulation/sliding_puzzle2/6.png"  style="position: absolute;">
		<img id="img_7"  src="@/assets/images/simulation/sliding_puzzle2/7.png"  style="position: absolute;">
		<img id="img_8"  src="@/assets/images/simulation/sliding_puzzle2/8.png"  style="position: absolute;">
		<img id="img_9"  src="@/assets/images/simulation/sliding_puzzle2/9.png"  style="position: absolute;">
		<img id="img_10" src="@/assets/images/simulation/sliding_puzzle2/10.png" style="position: absolute;">
		<img id="img_11" src="@/assets/images/simulation/sliding_puzzle2/11.png" style="position: absolute;">
	</div>
</template>

<script>

export default {
    data() {
        return {
            blank_x: 3,
            blank_y: 2,
            cells: []
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
        
		for (var i=0; i<11; i++) {
			this.cells.push(document.getElementById(`img_${(i+1)}`));
            this.cells[i].style.left = (i % 4) * 100 + 'px';
            this.cells[i].style.top = parseInt(i / 4) * 100 + 'px';
		}
    },

    methods: {        
		blank_left() {
			var old_x = this.blank_x;
			this.blank_x = this.blank_x - 1;
			if (this.blank_x < 0) {
				this.blank_x = 0;
				return;
			}

			var a = this.blank_x + (this.blank_y * 4);
			var b = old_x + (this.blank_y * 4);
			this.cells[b] = this.cells[a];
			this.cells[a] = null;
            
            this.cells[b].style.left = (b % 4) * 100 + 'px';
            this.cells[b].style.top = parseInt(b / 4) * 100 + 'px';
		},

		blank_right() {
			var old_x = this.blank_x;
			this.blank_x = this.blank_x + 1;
			if (this.blank_x > 3) {
				this.blank_x = 3;
				return;
			}

			var a = this.blank_x + (this.blank_y * 4);
			var b = old_x + (this.blank_y * 4);
			this.cells[b] = this.cells[a];
			this.cells[a] = null;
            
            this.cells[b].style.left = (b % 4) * 100 + 'px';
            this.cells[b].style.top = parseInt(b / 4) * 100 + 'px';
		},

		blank_up() {
			var old_y = this.blank_y;
			this.blank_y = this.blank_y - 1;
			if (this.blank_y < 0) {
				this.blank_y = 0;
				return;
			}

			var a = this.blank_x + (this.blank_y * 4);
			var b = this.blank_x + (old_y * 4);
			this.cells[b] = this.cells[a];
			this.cells[a] = null;
            
            this.cells[b].style.left = (b % 4) * 100 + 'px';
            this.cells[b].style.top = parseInt(b / 4) * 100 + 'px';
		},

		blank_down() {
			var old_y = this.blank_y;
			this.blank_y = this.blank_y + 1;
			if (this.blank_y > 2) {
				this.blank_y = 2;
				return;
			}

			var a = this.blank_x + (this.blank_y * 4);
			var b = this.blank_x + (old_y * 4);
			this.cells[b] = this.cells[a];
			this.cells[a] = null;
            
            this.cells[b].style.left = (b % 4) * 100 + 'px';
            this.cells[b].style.top = parseInt(b / 4) * 100 + 'px';
		}


    }
}
</script>
