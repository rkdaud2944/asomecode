<template>
  <BlockCodingHeader/>
  <div id="content-1area">
      <div id="block-source-editor-controller-div">
        <div class="js--toggle-source-editor cursor-pointer" onclick="toggleSourceEditor()">
          <img :src="sourceView" style="width: 43px; height: 33px; margin-right: 0;"/>
        </div>
      </div>
    <BlockContents/>
    <CodeView/>
  </div>

</template>

<script>
import images from "@/assets/images";
import BlockCodingHeader from "@/components/blockCoding/BlockCodingHeader.vue";
import BlockContents from "@/components/blockCoding/BlockContents.vue";
import CodeView from "@/components/blockCoding/CodeView.vue";


export default {
    components: {
      BlockCodingHeader,BlockContents,CodeView
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

</style>