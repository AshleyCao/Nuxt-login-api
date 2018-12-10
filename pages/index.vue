<template>
<el-container>
    <el-header>
        <logo />
        <submenu />
    </el-header>
</el-container>
</template>

<script>
import Vue from "vue";
import Logo from "~/components/Logo.vue";
import Submenu from "~/components/Submenu.vue";
import {
    mapMutations
} from 'vuex'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
    components: {
        Logo,
        Submenu
    },
    middleware: 'auth',
    methods: {
        logout() {
            // Code will also be required to invalidate the JWT Cookie on external API
            Cookie.remove('auth')
            this.$store.commit('setAuth', null)
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/global.scss";
</style>
