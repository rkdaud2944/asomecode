<template>
    <el-row>
        <el-col :span="8">
            목차
        </el-col>

        <el-col :span="16">
            <div v-html="content"></div>
        </el-col>
    </el-row>
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
