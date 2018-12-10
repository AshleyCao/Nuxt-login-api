import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
const cookieparser = process.server ? require('cookieparser') : undefined
Vue.use(Vuex)
import * as Cookies from 'js-cookie'

const store = () => new Vuex.Store({

  state: {
    auth:null,
    userName: null
  },
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 3, secure: true }),
      removeItem: key => Cookies.remove(key),
    },
  }),
],
  mutations: {
    setAuth(state, auth) {
      state.auth = auth
    },
    setUserName(state,userName){
      state.userName = userName
    }
  },

  actions: {
    async nuxtServerInit ({ commit }, { req }) {
      let auth = null
      if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie)
        try {
        auth = JSON.parse(parsed.auth)
        } catch (err) {
          console.log("No valid cookie found")
        }
      }
      commit('setAuth', auth)
    }
  }
})

export default store
