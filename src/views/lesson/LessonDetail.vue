<template>
    <div class="row">
        <div class="col-3">
            <h4  class="flex flex-center">목차</h4>
        </div>

        <div class="col-9">
            <div v-html="content"></div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

import lesson03 from '@/data/lesson03.js';

export default {
    computed: {
        content() {
            return marked.parse(lesson03);
        },
    },
}
</script>
