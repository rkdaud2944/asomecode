<template>
  <BlockCodingHeader/>
  <div id="content-1area">
    
    <div id="block-controller-container">
      <div id="block-menu-tab-div">
        <a href="#asomebot" class="menu-tab-item js--tab-asomebot" onclick="changeToolboxCategory('asomebot')">
          <img :src="asomebotIcon"/>
          <img :src="asomebotIconClick" style="display: none;"/>
          Asomebot
        </a>
        <a href="#asomekit" class="menu-tab-item js--tab-asomekit" onclick="changeToolboxCategory('asomekit')">
          <img :src="asomekitIcon"/>
          <img :src="asomekitIconClick" style="display: none;"/>
          Asomekit
        </a>
        <a href="#asomecar" class="menu-tab-item js--tab-asomecar" onclick="changeToolboxCategory('asomecar')">
          <img :src="asomecarIcon"/>
          <img :src="asomecarIconClick" style="display: none;"/>
          Asomecar
        </a>
      </div>
      <div id="block-source-editor-controller-div">
        <div class="js--toggle-source-editor cursor-pointer" onclick="toggleSourceEditor()">
          <img :src="sourceView" style="width: 43px; height: 33px; margin-right: 0;"/>
        </div>
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