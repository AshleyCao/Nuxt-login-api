<template>
<div>
    <el-container>
        <el-header>
            <logo />
        </el-header>
        <el-main class="main">
            <login />
        </el-main>
    </el-container>
</div>
</template>

<script>
import Vue from "vue";
import Logo from "~/components/Logo.vue";
import Login from "~/components/Login.vue";
import {
    mapGetters
} from 'vuex';

export default {
    components: {
        Logo,
        Login
    },
     middleware: 'notauth'
}
</script>

<style lang="scss">
@import "@/assets/global.scss";
</style>
