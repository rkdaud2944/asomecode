<template>
    
    <div id="header-area">
        <div class="top-menu-div">
            <div href="/blockeditor" class="top-menu-logo cursor-pointer">
                <img :src="logom" />
            </div>
            <div class="menu-item-div">
                <div class="btn btn-image" @click="send($store.state.viewcode)" style="margin-top: -7px;">
                    <img :src="playBlock" style="width: 35px; height: 35px; margin-right: 15px;" />
                    <img :src="playBlockHover" style="width: 35px; height: 35px; margin-right: 15px;" />
                </div>
                <span class="delimiter"></span>
                <div class="btn btn-image" @click="stopCode()" style="margin-top: -7px;">
                    <img :src="stopBlock" style="width: 35px; height: 35px;" />
                    <img :src="stopBlockHover" style="width: 35px; height: 35px;" />
                </div>
                <span class="delimiter">|</span>
                <div class="btn btn-image" @click="connect()">
                    <img :src="connectBlock" style="width: 96px; height: 17px;" />
                    <img :src="connectBlockHover" style="width: 96px; height: 17px;" />
                </div>
                <span class="delimiter">|</span>
                <div class="btn btn-image" @click="exportBlocksToFile()">
                    <img :src="saveBlock" style="width: 65px; height: 17px;"/>
                    <img :src="saveBlockHover" style="width: 65px; height: 17px;"/>
                </div>
                <span class="delimiter">|</span>
                <div class="btn btn-image" @click="importBlocksFromFile()">
                    <img :src="loadBlock" style="width: 66px; height: 17px;"/>
                    <img :src="loadBlockHover" style="width: 66px; height: 17px;"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import images from "@/assets/images";
// import serial from "@/globals/serial";

export default {
    components: {
        ...mapState([
            'viewcode'
        ])
    },
    
    data() {
        return {
            logom: images.logom,
            connectBlock: images.connectBlock,
            connectBlockHover: images.connectBlockHover,
            customBlock: images.customBlock,
            loadBlock: images.loadBlock,
            loadBlockHover: images.loadBlockHover,
            playBlock: images.playBlock,
            playBlockHover: images.playBlockHover,
            saveBlock: images.saveBlock,
            saveBlockHover: images.saveBlockHover,
            stopBlock: images.stopBlock,
            stopBlockHover: images.stopBlockHover,
        }
    },

    methods:{
        send(){
            const codes = this.$store.state.viewcode; // $store.state.viewcode를 직접 참조

            // codes 변수를 확인하기 위해 로그를 출력


            // 이후 코드를 수행
            window.opener.postMessage(codes);
            // this.setViewCode(''); // viewcode 상태를 초기화합니다
            // serial.runCode(code)
            // window.opener.runCode(code)
            // opener.runCode()
            // let code = generateCode(codes);
            // const msg = {
            //     type: "runCode",
            //     params: code,
            // };
            // window.opener.postMessage(JSON.stringify(msg));
            console.log(codes);
        }

    }
}
</script>

<style lang="scss">

#header-area {
    width: 100%;
    height: 70px;
    background: $as-color-blue;
}
.top-menu-div {
    height: 100%;
    margin: 0 20px;
    position: relative;
}
.top-menu-logo {
    margin-top: -22px;
    position: absolute;
    top: 50%;

    img{
        width: 109px;
        height: 41px;
        display: block;
    }
}

.cursor-pointer {
    cursor: pointer;
}

.menu-item-div {
    right: 0; 
    position: absolute; 
    top: 50%;
    margin-top: -10px; 
    width: inherit; 
    text-align: right;

    .btn-image {
        float: left;
        padding-top: 0;
        img {
            width: 85px;
            height: 30px;
            margin-right: 10px;
            &:nth-child(odd){
                display: block;
            }
            &:nth-child(even){
                display: none;
            }
        }
        &:active{
            img{
                &:nth-child(odd){
                    display: none;
                }
                &:nth-child(even){
                    display: block;
                }
            }
        }
    }
    .btn-icon-text {
        float: left;
        font-size: 13px;
        padding: 7px 0;
        color: #fff;
    }
    .btn-icon-text img {
        height: 13px;
        margin-right: 5px;
    }
    .delimiter {
        float: left;
        margin: 0 8px;
        color: $as-color-skyblue;
    }
}

</style>