<template>
  <div class="logoHeader">
    <b-row>
        <b-col class="left"><img src="~/assets/images/logo.png" /> </b-col>
        <b-col class="right"><h1>ToolBox</h1>   </b-col>
    </b-row>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>


<style lang="scss" scoped>
@import "~/assets/global.scss";
.logoHeader{
  background-color: $headerbgc;
}
 img{
   width:20%;
   height: 100%;
   margin-left: 0;
 }
.row{
   padding: 2% 0px;
 }
 h1{
   margin-right: 0;
   font-family: $header-font
 }
 .left{
   text-align: right;
   margin:auto;
 }
.right{
   text-align: left;
   margin:auto;
}

</style>

