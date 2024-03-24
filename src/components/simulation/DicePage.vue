<template>
	<div style="position: relative;">
		<img src="@/assets/images/simulation/dice/back.png" style="position: absolute;"/>
		<img id="img_dice" src="@/assets/images/simulation/dice/1.png" @click="roll_dice()" style="position: absolute;">
	</div>
</template>

<script>
// import { mapState } from 'vuex'
import images from "@/assets/images";
import remoteSerial from "@/globals/remote-serial";

export default {	
	data() {
		return {
			diceBack: images.diceBack,
			dice: [images.dice1, images.dice2, images.dice3, images.dice4, images.dice5, images.dice6]
		}
	},

	mounted() {		
	},

	methods:{		
        ...remoteSerial,

		roll_dice() {
			console.log("roll_dice")
			var index = Math.floor(Math.random() * 6) + 1;
			document.getElementById("img_dice").src = this.dice[index-1];
		}
	}

}
</script>

<style>

</style>