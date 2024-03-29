<template>
    <div style="position: relative;">
		<img src="@/assets/images/simulation/stove/back.png" style="position: absolute;">
		<img id="img_stove" src="@/assets/images/simulation/stove/stove_off.png" onclick="stove_on()" style="position: absolute;">
	</div>	
</template>


<script>
export default {

// 난로 시뮬레이션 이해 못함,, 멈춰두기
    methods: {
        stove_off() {
            document.getElementById("img_stove").src = "stove_off.png";
        },

        stove_on() {
            document.getElementById("img_stove").src = "stove_on.png";
        }

    }
}
</script>