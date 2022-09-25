<template>
    <div class="row">
        <div :style="styleLeft">
            <div v-if="!showFrame">
                <q-btn @click="showFrame = true" :icon="iconName" class="glossy" round color="secondary"
                    size="sm" />
            </div>

            <q-card v-if="showFrame">
                <q-card-section class="bg-primary text-white">
                    <div class="row">
                        <q-icon :name="icon" size="md"></q-icon>
                        &nbsp;&nbsp;
                        <div class="text-h6">{{ title }}</div>
                        <q-space />
                        <q-btn @click="showFrame = fasle" :icon="iconName" class="glossy" round color="secondary" size="sm" />
                    </div>
                </q-card-section>
                <q-separator />
                <q-card-section>
                    <div class="row">
                        <slot v-if="showFrame" name="filter"></slot>
                    </div>
                </q-card-section>
            </q-card>
        </div>

        <div :style="styleMain" class="q-pl-md">
            <slot name="main"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ["icon", "title", "size"],

    data() {
        return {
            showFrame: true,
        };
    },

    computed: {
        styleLeft() {
            if (this.showFrame) {
                return { width: `${this.size}px` };
            } else {
                return { width: "46px" };
            }
        },
        styleMain() {
            if (this.showFrame) {
                return { width: `calc(100% - ${this.size}px)` };
            } else {
                return { width: "calc(100% - 46px)" };
            }
        },
        iconName() {
            return this.showFrame ? "chevron_left" : "chevron_right";
        },
    }
};
</script>