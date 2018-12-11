# Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```
# How this works
There is a awesome plugin [Nuxt auth-module](https://github.com/nuxt-community/auth-module) for session and auth management. However, it is complicated to adopt you existing apis to its logic. So I put my project here for whoever needs to utilize cookies, sessions and user authetications
## In server side 
Use cookie. 
Install [js-cookie](https://www.npmjs.com/package/js-cookie) and [cookieparser](https://www.npmjs.com/package/cookieparser)
In nuxt.config.js
```javascript
...
//typescript format
export const plugins = ["~/plugins/vuelidate.js", "~/plugins/element-ui.js",{src: '~/plugins/localstorage.js', ssr: false} ];

```
store/index.js
```javascript
...
actions: {
    // check cookie
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
```
## In client side
Login and Logout functions are similiar as auth-module
To avoid refresh erase vuex state, use [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate)