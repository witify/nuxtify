const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {

  /*
  |--------------------------------------------------------------------------
  | Head
  |--------------------------------------------------------------------------
  */

  head: {
    titleTemplate: '%s - Witify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Witify Official Website' },
      { name: 'msapplication-TileColor', content: '#ffffff'},
      { name: 'theme-color', content: '#ffffff'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.6.95/css/materialdesignicons.min.css' },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Loading
  |--------------------------------------------------------------------------
  */

  loading: { color: '#1100FF' },

  /*
  |--------------------------------------------------------------------------
  | CSS
  |--------------------------------------------------------------------------
  */

  css: [
    '@/assets/sass/main.scss',
  ],

  /*
  |--------------------------------------------------------------------------
  | Cache
  |--------------------------------------------------------------------------
  */

  cache: true,

  /*
  |--------------------------------------------------------------------------
  | Build config
  |--------------------------------------------------------------------------
  */

  build: {
    
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

  /*
  |--------------------------------------------------------------------------
  | Router
  |--------------------------------------------------------------------------
  */

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  /*
  |--------------------------------------------------------------------------
  | Modules
  |--------------------------------------------------------------------------
  */

  modules: [
    '@nuxtjs/component-cache',
    '@nuxtjs/sentry',
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

  /*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  */

  plugins: [
    '~/plugins/global.js',
    '~/plugins/disqus',
    { src: '~plugins/crisp.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  |--------------------------------------------------------------------------
  | Sentry config
  |--------------------------------------------------------------------------
  */

  sentry: {
    dsn: 'https://034a385b35114c24a52746f15e902320:bb844caff5d942a093c49b7dc10e9ee0@sentry.io/1273174',
    public_dns: 'https://034a385b35114c24a52746f15e902320@sentry.io/1273174'
  }
}
