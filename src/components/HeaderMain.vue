<template>
    <div class="row" style="background: #353543; width: 100%; height: auto; padding: 10px;">
    <img src="../../public/images/common/logom.png" class="logo">
    <input id="check-btn" type="checkbox"/>
    <label for="check-btn" class="test" style="margin-left: auto;"><img src="../../public/images/common/mobile_m.png" style="width: 70%; margin: 12px;"></label>
       
        <div class="col menubars">
            <q-btn @click="sendCode('connect')" class="button" style="min-width: 0px; min-height: 0px; box-shadow: 0em; padding: 0px;"><img src="../../public/images/common/mobile_02.png" style="width: 100px; padding: 0; margin:0px"></q-btn>
            <q-btn @click="goTo('/')" color="black" label="home" class="q-ml-md" />
            <q-btn @click="openUrl('/editor')" color="secondary" label="editor" class="q-ml-md" />
            <q-btn @click="sendCode('stop')" color="deep-orange" label="stop" class="q-ml-md" />
        </div>
        <div class="on-right menubars">
            <q-btn @click="sendCode('reboot')" color="secondary" label="reboot" class="q-ml-md" />
            <q-btn @click="sendCode('format')" color="deep-orange" label="format" class="q-ml-md" />
            <q-btn @click="sendCode('update')" color="brown" label="update" class="q-ml-md" />
            <q-btn @click="openUrl('/help')" color="purple" label="HELP" class="q-ml-md" />
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
@media (min-width: 883px){
#check-btn{
    display: none
    }

.test{
    display: none
}
.logo{
    display: none;
}
.button{
    min-width: 0px; min-height: 0px; box-shadow: 0em; padding: 0px;
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
}
.menubars{
    display: none;
}
.logo{
    margin-left:auto;
    width: 30%;
}
}
</style>
