<template>
	<div style="position: relative;">
		<img src="@/assets/images/simulation/dice/back.png" style="position: absolute;"/>
		<img id="img_dice" src="@/assets/images/simulation/dice/1.png" @click="roll_dice()" style="position: absolute;">
	</div>
</template>

<script>
// import { mapState } from 'vuex'
import remoteSerial from "@/globals/remote-serial";

export default {	
	data() {
		return {
		}
	},

    // components: {
    //     ...mapState([
    //         'viewcode'
    //     ])
    // },

	mounted() {
		// this.runCode(`
		// print('### Simulation started')`)
		
	},

	methods:{		
        ...remoteSerial,

		roll_dice() {
			console.log("roll_dice")
			var index = Math.floor(Math.random() * 6) + 1;
			document.getElementById("img_dice").src = "@/assets/images/simulation/dice/"+index + ".png";
		}
	}

}
</script>

<style>

</style>