<template>
    <q-expansion-item expand-separator label="차시관리" default-opened>
        <q-list>
            <q-item clickable @click="goTo('/backOffice/lessons')">
                <q-item-section avatar>
                    <q-icon name="list" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>차시 목록</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable @click="goTo('/backOffice/create/lesson')">
                <q-item-section avatar>
                    <q-icon name="add_circle_outline" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>차시 생성</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </q-expansion-item>
</template>

<script>
import VueBase from "@/VueBase";

export default {
    mixins: [VueBase],
};
</script>