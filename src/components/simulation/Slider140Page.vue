<template>
    <br>
    <div class="col-sm-12">
        <div class="col-sm-12" v-for="(value, index) in sliderValues" :key="index">
            <div class="col-sm-2">
                <span>Motor {{ index }}</span>
            </div>
            <div class="col-sm-8">
                <div>
                    <input type="range" v-model="sliderValues[index]" :max="maxValue" ref="sliders">
                </div>
            </div>
            <div class="col-sm-2" style="text-align: right;">
                <button class="btn btn-danger" @click="stop_motor(index)">STOP</button>
            </div>
        </div>
    </div>

</template>


<script>
import remoteSerial from "@/globals/remote-serial";

export default {
    data() {
        return {
            sliderValues: [0, 0, 0, 0],
            oldValues: [0, 0, 0, 0],
            maxValue: 140
        };
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

        this.refreshSlider()
    },

    methods: {
        ...remoteSerial,

        refreshSlider() {
            var values = []

            for(let i=0; i<4; i++){
                const slider = this.$refs.sliders[i].value;
                values[i] = slider

                if (this.oldValues[i] != this.sliderValues[i]){
                    let text = `${i},${slider}`
                    console.log("refreshSlider : "+text)
                    this.writeInput(text);
                }
                
            }
        },

        stop_motor(no) {
            let text = `${no},0`
            console.log("stop : "+text)
            this.writeInput(text);
        },
    },

    watch: {
        sliderValues: {
            deep: true,
            handler() {
                this.refreshSlider();
            }
        }
    }
};
</script>

<style scoped>
.ui-widget.ui-widget-content { background-color: #f1f1f1; border: 0;}
.ui-slider .ui-slider-range { background-color: #64b7ff }

.ui-state-default, .ui-widget-content, .ui-state-default {
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 30px;
    cursor: pointer;
} 

.ui-slider-horizontal { height: .6em; }

.col-sm-2 { margin-bottom: 3px; }
.col-sm-12 { 
    font-family: noto sans-serif;
    color: #818b94;
    font-weight: 600;
    background-color:#fff;
        padding:5px;
}

button.btn.btn-danger { 
    padding: 2px 4px;
    font-size: 10px;
    margin-top: 6px;
    text-shadow: 0px 2px 3px #ac2925;
    color: #ddd !important;
}

.btn-danger { background-color: #e64e1c; }
.btn-danger:hover { 
    background-color: #ff6633;
    /* border: 1px solid #e23f09; */
    color: #ddd !important;
}
.btn-danger:active {
    background-color: #b3360d;
    /* border: 1px solid #8e2604; */
    color: #ddd !important;
}

.ui-state-default, .ui-widget-content .ui-state-default { 
    cursor: pointer; 
    border: 2px solid #1b89e8;
}

.ui-state-default:hover { background-color: #e4f4ff;}
.ui-state-default:active { background-color: lightskyblue;}
.ui-state-default:focus, .ui-widget-content .ul-state-default:focus { border: 2px soild #ff8123; }
.ui-state-focus { border: 2px solid #ff8123; }

.col-sm-12 span { 
    background-color: #fff8e6; 
    padding-left: 2px; 
    padding-right: 2px;
    color: #77675a;
}

/* .col-sm-12:nth-of-type(even) { 
    height: 1px;
    border-top: 1px dashed #d7edff; 
    margin: 10px auto;
    width: 87%;
} */

.col-sm-12:last-child { margin-bottom: 20px; }
body { border-bottom: 38px solid #f7f7f7; }
</style>