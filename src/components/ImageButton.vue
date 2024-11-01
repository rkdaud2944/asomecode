<template>
    <q-img class="image-button" :src="imageSource" />
</template>

<script>
export default {
    props: ["src"],

    data() {
        return {
            isMouseOver: false,
        }
    },

    computed: {
        imageSource() {
            if (this.isMouseOver) {
                return this.src + ".over.png";
            } else {
                return this.src;
            }
        },
    },
}
</script>

<style scoped>

.image-button {
    max-width: 82px;
    cursor: pointer;
}
</style>