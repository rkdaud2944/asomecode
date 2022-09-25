<template>
    <div :class="getClass" :style="getStyle">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: ["text", "color", "width", "height"],

    computed: {
        getClass() {
            // TODO: 텍스트 색상 처리, 자동으로? 어두우면 흰색으로?
            return `bg-${this.color} q-ml-xs q-mr-xs text-white rounded-borders text-center`;
        },

        getStyle() {
            let width = this.width;
            let height = this.height;
            if (!this.width) width = "64px";
            if (!this.height) height = "24px";
            return {
                display: "inline-block",
                width: width,
                height: height,
                lineHeight: `calc(${height} + 0.1em)`,
            };
        },
    },
}
</script>