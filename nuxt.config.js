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
          name: 'English'
        },
        {
          code: 'fr',
          iso: 'fr-FR',
          name: 'Français'
        }
      ],
      vueI18n: {
        messages: {
          fr: {
            pages: {
              index: 'Accueil',
              projects: {
                index: 'Projects',
                boursify: 'Boursify',
                'start-alberta': 'Start Alberta'
              },
              services: {
                index: 'Services',
                'process-optimisation': 'Optimisation de processus',
                'e-commerce': 'E-commerce',
                'custom-application': 'Application personnalisé'
              },
              about: 'À propos',
              contact: 'Contactez-nous'
            },
            project: {
              general: {
                'case-study': 'Étude de cas',
                context: 'Contexte',
                approach: 'Approche',
                implementation: 'Développement',
                results: 'Résultats'
              },
              boursify: {
                title: 'Boursify',
                subtitle: 'Logiciel de simulation boursière événementiel pour les écoles et les entreprises.',
                context: "<p>Une simulation boursière évènementielle est un évènement populaire auprès des mordus de la finance, organisé par leurs associations scolaires/étudiantes. Ce genre d’évènement dure généralement une demi-journée ou une journée complète et peut regrouper jusqu’à plusieurs centaines de participants. Dans le cadre de la simulation, les participants se voient devenir des traders, dans le style Wall Street, reçoivent un faux portfolio et doivent transiger des actions à travers un scénario fictif, dans le but de faire le plus d’argent possible.</p><p>Le tout est très populaire auprès des associations étudiantes en finance des universités et cégeps et est organisé sous forme de compétition. Précédemment, une seule alternative logicielle existait pour les organisateurs désirant héberger ce genre d’évènement.</p>",
                results: "Boursify a finalement vu sa première utilisation grand public, lors de la simulation organisée par le Collège André-Grasset et le Collège Marianopolis. Cet évènement a été un grand succès, avec plusieurs participants ayant émis leur préférence du nouveau logiciel par rapport à l’ancien."
              },
              "start-alberta": {
                title: "Start Alberta",
                subtitle: "Plateforme sociale pour l'écosystème des startups en Alberta"
              }
            }
          },
          en: {
            pages: {
              index: 'Home',
              projects: {
                index: 'Projects',
                boursify: 'Boursify'
              },
              services: {
                index: 'Services',
                'process-optimisation': 'Process optimisation',
                'e-commerce': 'E-commerce',
                'custom-application': 'Custom application'
              },
              about: 'About us',
              contact: 'Contact us'
            }
          }
        },
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
