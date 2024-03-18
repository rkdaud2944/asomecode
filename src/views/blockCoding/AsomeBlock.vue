<template>
  <BlockCodingHeader/>

  <div id="content-1area">

    <BlockContents/>
  </div>

</template>

<script setup>



</script>


<script>



import images from "@/assets/images";
import BlockCodingHeader from "@/components/blockCoding/BlockCodingHeader.vue";
import BlockContents from "@/components/blockCoding/BlockContents.vue";
export default {
    components: {
      BlockCodingHeader,BlockContents
    },
    data() {
        return {
            asomebotIcon: images.asomebotIcon,
            asomebotIconClick: images.asomebotIconClick,
            asomekitIcon: images.asomekitIcon,
            asomekitIconClick: images.asomekitIconClick,
            asomecarIcon: images.asomecarIcon,
            asomecarIconClick: images.asomecarIconClick,
            sourceView: images.sourceView,
        }
    },

}

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>