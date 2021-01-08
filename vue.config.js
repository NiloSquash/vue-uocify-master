// const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  },

  pwa: {
    name: 'vue-uocify',
    themeColor: '#F2F9FA',
    msTileColor: '#000001',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestPath: 'manifest.json',
    manifestOptions: {
      name: 'vue-uocify',
      short_name: 'vue-uocify',
      start_url: '.',
      display: 'standalone',
      theme_color: '#F2F9FA'
    },
  
iconPaths: {
  favicon: 'public/favicon.ico',
},

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
  }
};