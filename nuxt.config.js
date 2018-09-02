const purgecss = require('@fullhuman/postcss-purgecss')

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.6.95/css/materialdesignicons.min.css' },
    ],
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1100FF' },

  css: [
    '@/assets/sass/main.scss',
  ],

  cache: true,

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    analyze: false,

    postcss: {
      plugins: [
        purgecss({
          content: [
            './pages/**/*.vue',
            './layouts/**/*.vue',
            './components/**/*.vue'
          ],
          whitelist: ['html', 'body'],
          whitelistPatterns: [/nuxt-/]
        }),
        require('cssnano')({
          preset: 'default',
        })
      ]
    }
  },

  /**
   * Router
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
    '@nuxtjs/component-cache',
    ['storyblok-nuxt', {
      accessToken: 'VDX4VNxVYk3uTxXyIlMp5Qtt',
      cacheProvider: 'memory'
    }],
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

  /**
   * Plugins
   */

  plugins: [
    '~/plugins/global.js',
    '~/plugins/disqus',
    { src: '~plugins/crisp.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false }
  ]
}

