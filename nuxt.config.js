module.exports = {

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Witify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Witify Official Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1100FF' },

  css: [
    '@/assets/sass/main.scss',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },

  /**
   * Modules
   */

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  /**
   * Modules
   */

  modules: [
    'nuxt-buefy',
    ['nuxt-i18n', {
      defaultLocale: 'en',
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'English',
          file: 'en.js'
        },
        {
          code: 'fr',
          iso: 'fr-FR',
          name: 'Français',
          file: 'fr.js'
        },
      ],
      lazy: true,
      langDir: 'lang/',
      vueI18n: {
        fallbackLocale: 'en'
      }
    }]
  ],

  buefy: {
    css: false
  },

  /**
   * Plugins
   */

  plugins: ['~/plugins/global.js']
}
