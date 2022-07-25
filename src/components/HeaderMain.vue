<template>
    <div class="row" style="background: #353543; width: 100%; height: auto; padding: 10px;">
    <img src="../../public/images/common/logom.png" class="main-logo">
    <input id="check-btn" type="checkbox"/>
    <label for="check-btn" class="test" style="margin-left: auto;  "><img src="../../public/images/common/mobile_m.png" style="width: 70%; margin: 12px;"></label>
       
        <div class="menubars">
            <q-btn class="connect" @click="sendCode('connect')" style="min-width: 0px; min-height: 0px; box-shadow: 0em; padding: 0px;"><img src="../../public/images/common/mobile_02.png" style="width: 100px; padding: 0; margin:0px; margin-right:5px;"></q-btn>
            <q-btn class="home" @click="goTo('/')"  style="min-width: 0px; min-height: 0px; box-shadow: 0em; padding: 0px;"><img src="../../public/images/common/mobile_01.png" style="width: 100px; padding: 0; margin:0px; margin-right:5px;"></q-btn>
            <q-btn @click="openUrl('/editor')"  style="min-width: 0px; min-height: 0px; box-shadow: 0em; padding: 0px;"><img src="../../public/images/common/mobile_03.png" style="width: 100px; padding: 0; margin:0px; margin-right:5px;"></q-btn>
            <q-btn @click="sendCode('stop')"  style="min-width: 0px; min-height: 0px; box-shadow: 0em; padding: 0px;"><img src="../../public/images/common/mobile_04.png" style="width: 100px; padding: 0; margin:0px; margin-right:5px;"></q-btn>
        </div>
        <div class="menubars right-align">
            <q-btn @click="sendCode('reboot')" style="min-width: 0px; min-height: 0px; box-shadow: 0em; padding: 0px;"><img src="../../public/images/common/mobile_05.png" style="width: 100px; padding: 0; margin:0px; margin-right:5px;"></q-btn>
            <q-btn @click="sendCode('format')" style="min-width: 0px; min-height: 0px; box-shadow: 0em; padding: 0px;"><img src="../../public/images/common/mobile_06.png" style="width: 100px; padding: 0; margin:0px; margin-right:5px;"></q-btn>
            <q-btn @click="sendCode('update')" style="min-width: 0px; min-height: 0px; box-shadow: 0em; padding: 0px;"><img src="../../public/images/common/mobile_07.png" style="width: 100px; padding: 0; margin:0px; margin-right:5px;"></q-btn>
            <q-btn @click="openUrl('/help')" style="min-width: 0px; min-height: 0px; box-shadow: 0em; padding: 0px;"><img src="../../public/images/common/mobile_08.png" style="width: 100px; padding: 0; margin:0px; margin-right:5px;"></q-btn>
        </div>
    </div>
</template>

<script>
import VueBase from "@/VueBase";

export default {
    mixins: [VueBase],
}

</script>
<style>
.home:hover{
    background: url(../../public/images/common/mobile_01.png.over.png) no-repeat;
    background-size:cover ;
    margin-right:5px;
}

@media (min-width: 884px){
#check-btn{
    display: none
}
.test{
    display: none
}
.main-logo{
    display: none;
}
.button{
    min-width: 0px; min-height: 0px; box-shadow: 0em; padding: 0px;
}
.right-align{
    display: block;
    margin-left: auto;
}
}
@media (min-width: 100px) and (max-width: 883px){
#check-btn{
    display: none;
    
}
#check-btn:checked ~ .menubars{
    display: block;
}
.test{
    width: 50px;
    text-align: right;
    
}
.menubars{
    display: none;
    width: 1000px;
    height: 40px;
    margin-top: 20px;
    top: 120px;
    text-align: center;
    
}
.main-logo{
    margin-left:auto;
    width: 30%;
    height: 96px;
}
.right-align{
    text-align: center;
}

}
</style>
