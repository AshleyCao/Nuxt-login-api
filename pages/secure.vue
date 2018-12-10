<template>
    <div>
        <h1>Checked</h1>
        <div class="content">
        <p>
          <strong>Username:</strong>
          {{ _currentUser }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ _sessionId }}
        </p>
         <button @click.prevent="logout()">Log out</button>
      </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
const Cookie = process.client ? require('js-cookie') : undefined
export default {
   
   middleware: 'auth',
   methods:{
     logout() {
      // Code will also be required to invalidate the JWT Cookie on external API
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
            this.$router.push('/login');
    }
  }
 
}
</script>

<style lang="sass" scoped>

</style>
