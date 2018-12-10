<template>
<div class="contain">
    <b-row class="submenu">
        <b-col cols="4">{{'Hello, ' + username}}</b-col>
        <b-col cols="8" class="right">
            <b-button  variant="warning" @click="logout()">
               logout
            </b-button>
            
        </b-col>
    </b-row>
</div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
 computed: {
  username(){ return this.$store.state.userName }
},
  methods:{
     logout() {
      // Code will also be required to invalidate the JWT Cookie on external API
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
        this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.submenu {
   background-color: white;
   padding: 2%;
   width:100%;
   margin: 0%;
}

.col-4{
    font-family: $text-font;
    font-weight: bold;
    text-align: left;
    margin: auto 0;
}
.right{
    text-align: right;
    margin-right: 0; 
    padding-right: 0;
}
</style>
