<template>
    <div class="row" style="background: #353543; width: 100%; padding: 10px">
        <div class="col">
            <q-btn @click="sendCode('connect')" color="primary" label="connect" class="q-ml-md" />
            <q-btn @click="goTo('/')" color="secondary" label="home" class="q-ml-md" />
            <q-btn @click="openUrl('/editor')" color="secondary" label="editor" class="q-ml-md" />
            <q-btn @click="sendCode('stop')" color="deep-orange" label="stop" class="q-ml-md" />
        </div>
        <div class="on-right">
            <q-btn @click="sendCode('reboot')" color="primary" label="reboot" class="q-ml-md" />
            <q-btn @click="sendCode('format')" color="deep-orange" label="format" class="q-ml-md" />
            <q-btn @click="sendCode('update')" color="deep-orange" label="update" class="q-ml-md" />
            <q-btn @click="openUrl('/help')" color="deep-orange" label="HELP" class="q-ml-md" />
        </div>
    </div>
</template>

<script>
import VueBase from "@/VueBase";

export default {
    mixins: [VueBase],
}
</script>