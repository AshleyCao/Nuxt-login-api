const parseArgs = require("minimist");

const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
});

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000";
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "localhost";
export const env = {
  baseUrl: process.env.BASE_URL || `http://${host}:${port}`
};
export const head = {
  title: "toolbox",
  meta: [
    { charset: "utf-8" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      hid: "description",
      name: "description",
      content: "Nuxt.js project"
    }
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }
  ]
};
/*
** Customize the progress-bar color
*/
export const loading = { color: "#3B8070" };
/*
** Build configuration
*/
export const css = ["~/assets/global.scss"];
export const plugins = ["~/plugins/vuelidate.js", "~/plugins/element-ui.js",{src: '~/plugins/localstorage.js', ssr: false} ];
export const build = {};
export const modules = ["@nuxtjs/axios", "~/modules/typescript.js", "bootstrap-vue/nuxt"];
export const axios = { baseURL:"https://tom.pfdfoods.com.au/WDFFS/rest/WDFFSService" };
// export const serverMiddleware = ['~/api/logger'];
