<template>

<nav class="header-nav">
    <div class="logo_box">
        <img src="../../public/images/common/logom.png" class="main-logo">
    </div>

    <div class="menulist">
        <ul class="ui-left">
            <li class="ui-left-bt" @click="sendCode('connect')">
                <img src="../../public/images/common/connect.png" class="ui-img">
                <p class="ui-left-font" id="fs-four">연결하기</p>
            </li>
            <li class="ui-left-bt" @click="goTo('/')">
                <img src="../../public/images/common/home.png" class="ui-img">
                <p class="ui-left-font" id="fs-one">홈</p>
            </li>
            <li class="ui-left-bt" @click="openUrl('/editor')">
                <img src="../../public/images/common/editor.png" class="ui-img">
                <p class="ui-left-font" id="fs-four">소스편집</p>
            </li>
            <li class="ui-left-bt" @click="sendCode('stop')">
                <img src="../../public/images/common/stop.png" class="ui-img">
                <p class="ui-left-font" id="fs-three">멈추기</p>
            </li>
        </ul>

        <ul class="ui-right">
            <li class="ui-right-bt" @click="sendCode('reboot')">
                <img src="../../public/images/common/reboot.png" class="ui-img">
                <p class="ui-right-font" id="fs-three">재부팅</p>
            </li>
            <li class="ui-right-bt" @click="sendCode('format')">
                <img src="../../public/images/common/format.png" class="ui-img">
                <p class="ui-right-font" id="fs-two">포맷</p>
            </li>
            <li class="ui-right-bt" @click="sendCode('update')">
                <img src="../../public/images/common/update.png" class="ui-img">
                <p class="ui-right-font" id="fs-four">업데이트</p>
            </li>
            <li class="ui-right-bt" @click="openUrl('/help')">
                <img src="../../public/images/common/help.png" class="ui-img">
                <p class="ui-right-font" id="fs-three">HELP</p>
            </li>
        </ul>
    </div>

    <a class="toggle">
        <img src="../../public/images/common/mobile_m.png" class="toggle-img">
    </a>
</nav>
</template>



<script>
import VueBase from "@/VueBase";

export default {
    mixins: [VueBase],
    data(){
        return{

        }
    },
    mounted() {
        const toggleBtn = document.querySelector('.toggle');
        const menu = document.querySelector('.menulist');

        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
        }) 
    },

}


</script>



<style>

/* 공용 */

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');

ul li {
    list-style-type: none;
    float: left;
}
.header-nav{
    display : flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    background: #353543;
    width: 100%;
    height: auto;
    position: fixed;
    z-index: 200;

}
.menulist{
    list-style:none;
    font-size:18px;
    color:white;
    display : flex;
    padding-left:0px;
}
.menulist li{
    padding:8px 12px;   
} 
.toggle {
    display: none;
}
.toggle-img{
    position:relative;
    top: 27px;
    right:10px;
    width: 30px;
}
.ui-img{
    width:20px;
    right:4px;
    bottom:3px;
    position:relative;
}

/* 데스크탑 버전 */

@media screen and (min-width: 883px){

.ui-left{
    float: left;
}
.ui-right{
    position: absolute;
    right: 50px;
}
.logo_box{
    display: none;
}
.main-logo{
    display: none;
}

.ui-left-bt{
    width: 90px;
    height: 32.5px;
    border: 1px solid white !important;
    background: #353543;
    border-radius: 15px;
    margin: 5px;
    cursor: pointer;
}
.ui-right-bt{
    width: 90px;
    height: 32.5px;
    border: 1px solid black !important;
    background-color: white;
    border-radius: 15px;
    margin: 5px;
    cursor: pointer;
}
.ui-left-font{
    color: white;
    line-height: 15px;
    font-size :11.9px;
    margin: 0%;
    float: right;
    font-family:'Noto Sans KR', sans-serif;

}
.ui-right-font{
    color: black;
    line-height: 15px;
    font-size :11.9px;;
    float: right;
    font-family:'Noto Sans KR', sans-serif;
}
#fs-one{
    position:relative;
    right: 19px;
    font-size: 11.9px;
}
#fs-two{
    position:relative;
    right:11px;
    font-size: 11.9px;
}
#fs-three{
    position:relative;
    right: 6px;
    font-size: 11.9px;
}

}

/* 태블릿 버전 */

@media screen and (max-width: 883px){

.header-nav{
    flex-direction:column;
    align-items: flex-start;
    min-height: 100px;
}
.menulist{
    display:none;
    flex-direction:column;
    align-items: center;
    width:100%;
}
.toggle {
    display:block;
    font-size:28px;
    position:absolute;
    right:18px;
    cursor: pointer;
}
.menulist.active,
.iconlist.active{
    display:flex;
}

.ui-left-bt{
    width: 90px;
    height: 32.5px;
    border: 1px solid white !important;
    background: #353543;
    border-radius: 15px;
    margin: 5px;
    margin-top: 50px;
    cursor: pointer;
}
.ui-right-bt{
    width: 90px;
    height: 32.5px;
    border: 1px solid black !important;
    background-color: white;
    border-radius: 15px;
    margin: 5px;
    cursor: pointer;
}
.ui-left-font{
    color: white;
    float: right;
    font-family:'Noto Sans KR', sans-serif;
}
.ui-right-font{
    color: black;
    line-height: 15px;
    font-size: 11.9px;;
    float: right;
    font-family:'Noto Sans KR', sans-serif;
}
.ui-left{
    padding: 0px;
    margin: 0px;
}
.ui-right{
    margin-left: auto;
    margin-right:auto;
    display: block;
    padding: 0px;
}
.logo_box{
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.main-logo{
    width: 139px;
    height: 53px;
    margin: 15px;
}
#fs-one{
    position:relative;
    right: 19px;
    font-size: 11.9px;
}
#fs-two{
    position:relative;
    right:11px;
    font-size: 11.9px;
}
#fs-three{
    position:relative;
    right: 6px;
    font-size: 11.9px;
}
#fs-four{

    position:relative;
    right: 0px;
    font-size: 11.9px;
    line-height: 17px;
    text-align: center;
}
}
</style>
