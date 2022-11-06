<template>
    <div>
        <q-layout view="lHh Lpr lFf">
            <q-header elevated class="glossy">
                <q-toolbar>
                    <q-btn @click="showSideMenu = !showSideMenu" flat dense round aria-label="Menu" icon="menu" />
                    <q-toolbar-title> Asome IT</q-toolbar-title>
                    <q-space></q-space>
                </q-toolbar>
            </q-header>

            <q-drawer v-model="showSideMenu" show-if-above bordered class="bg-grey-2">
                <q-list>
                    <q-item-label header class="bg-blue-grey text-white">Menu</q-item-label>
                    <SideMenu />
                </q-list>
            </q-drawer>

            <q-page-container>
                <router-view />
            </q-page-container>
        </q-layout>
    </div>
</template>

<script>
import VueBase from "@/globals/vue-base";
import SideMenu from "@/components/backOffice/SideMenu";``

export default {
    mixins: [VueBase],

    components: {
        SideMenu
    },

    data() {
        return {
            showSideMenu: false,
        };
    },
};
</script>