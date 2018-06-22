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
              home: {
                title: 'Nous développons de <br>meilleurs produits numériques.',
                subtitle: 'Witify est une équipe de conception et d\'ingénierie qui confectionne des <br>produits numériques haut de gamme.',
                'case-studies': 'Études de cas',
                'our-services': 'Nos services',
                'expertise-header': 'Expertise <br><strong>web</strong> & <strong>logicielle</strong><br> approfondie.',
                'expertise-paragraph': 'Notre équipe regroupe des ingénieurs, des experts web et des gens d\'affaires. Nous nous assurons que votre projet est sur la bonne voie. Et nous le faisons remarquablement bien.',
                'expertise-paragraph-2': 'Notre équipe passionnée se dévoue chaque jour à développer des logiciels faits sur mesure pour votre entreprise. Toujours à jour avec les nouvelles technologies, ils proposent les solutions adaptées à vos besoins.',
                'what-we-do': 'Ce que nous faisons',
                'start-alberta-resume': 'Start Alberta est une communauté Web réunissant des fondateurs, des investisseurs et des organisations dans un écosystème compréhensible et interactif pour les startups. C\'est et restera une ressource ouverte pour tout le monde.',
                'low-cost-tires-resume': 'Pneus À Petits Prix est une plateforme de commerce électronique dédiée à la vente de pneus à bas prix. Avec plus de 20 000 pneus différents enregistrés, Pneus À Petits Prix vise à rendre le processus d\'achat facile et accessible pour le grand public.',
                'we-are-awesome': 'Apparemment, nous sommes géniaux!'
              },
              projects: {
                index: 'Projets',
                boursify: 'Boursify',
                'start-alberta': 'Start Alberta',
                sauver: 'SAUVéR',
                'featured-projects': 'Projets en vedette',
                subtitle: "Nos clients ont toujours de bonnes idées. Et nous sommes très fier de pouvoir afficher leurs réalisations, car à la base de chacun de ces projets complétés, il y a une équipe passionnée d'experts à qui l'on doit dire 'Merci'.",
              },
              services: {
                index: 'Services',
                'process-optimisation': 'Optimisation de processus',
                'process-optimisation-subtext': 'Optimisez votre modèle d\'affaire',
                'e-commerce': 'Commerce en ligne',
                'e-commerce-subtext': 'Les meilleurs solutions e-commerce',
                'custom-application': 'Application sur mesure',
                'custom-application-subtext': 'Plateforme personnalisée haut de gamme'
              },
              about: {
                title: 'À Propos',
                subtitle: "Nous sommes une entreprise montréalaise en pleine croissance. Nous adorons le contact humain et les défis de tout genre. Notre équipe est dynamique et se fera un plaisir d\'écouter vos idées et d\'amener vos projets à la prochaine étape. Chacun de nos associés est dûment qualifié et passionné par le domaine.<br>Venez leur dire salut!",
                excellence: 'Excellence',
                'excellence-text': 'L’excellence est au cœur de nos valeurs. Chaque projet, interaction et action est basée sur un désir profond d’offrir une qualité supérieure et le meilleur de nous-mêmes. Nous combinons talent et travail tenace afin de fournir les meilleurs outils et les meilleurs résultats. Notre équipe comprend votre désir de se différentier, c’est pourquoi elle prend fierté à concrétiser votre idée sous la forme d’un produit digital puissant et remarquable.',
                collaboration: 'Collaboration',
                'collaboration-text': 'Nous croyons que chaque succès dans la vie provient d’une équipe. Et pas de n’importe quelle équipe. Une équipe forte, unie, qui prône la confiance. C’est pourquoi nous tenons à être une équipe avec tous et toutes. Que ce soit à l’interne, en assurant une dynamique d’entraide forte. Ou avec notre clientèle, qui se bâtit sur une transparence et une communication accessible en tout temps. Nous sommes présents, nous sommes des humains et nous voulons édifier les ponts d’une relation durable.',
                boldness: 'Audace',
                'boldness-text': 'Notre équipe est audacieuse et innovante. Nous osons saisir les opportunités et transformer en atouts les défis qui peuvent se présenter sur votre route. Chaque épreuve est une occasion de repousser les limites de l’innovation et de la créativité. Nous croyons qu’il est important d’entreprendre des projets, de braver les obstacles et de constamment aspirer à mieux que le statu quo.' 
              },
              contact: {
                index: 'Contact',
                title: 'Contactez-nous',
                subtitle: 'Nous sommes de vraies personnes ici à Montréal. Nous sommes prêts à répondre à vos questions et à vous aider, autant que nous le pouvons.',
                coordinates: 'Coordonnées',
                email: 'Email',
                phone: 'Téléphone',
                address: 'Adresse',
                name: 'Nom',
                to: 'à',
                'not-sure': 'Incertain',
                'contacted-by-phone': 'Voulez-vous être contacté par téléphone?',
                'yes-please': 'Oui, s\'il-vous-plaît!',
                'when-available': 'Quand êtes-vous disponible?',
                monday: 'Lundi',
                tuesday: 'Mardi',
                wednesday: 'Mercredi',
                thursday: 'Jeudi',
                friday: 'Vendredi',
                saturday: 'Samedi',
                sunday: 'Dimanche',
                'which-time': 'À quel moment de la journée?',
                'message-sent': 'Message envoyé avec succès!',
                'back-to-you': 'Nous vous reviendrons dès que possible'
  
              },
              footer: {
                about: 'À propos',
                'about-text': 'Notre équipe est basée à Montréal et grandit rapidement. Elle prospère sur la connexion humaine et les projets sympas. Nous aimerions entendre parler de votre prochaine super idée! Peu importe le stade auquel vous êtes, nous en tirerons le meilleur parti. Nous sommes seulement à un appel téléphonique ou à un courriel de distance.',
                'all-services': 'Tous les services',
                'all-rights-reserved': 'Tous droits réservés.'
              },
              cta: {
                'see-what-witify': 'Voyez ce que Witify peut faire pour votre entreprise',
                'fill-the-form': 'Remplissez le formulaire pour obtenir instantanément des observations clés sur votre entreprise',
                'free-business-analysis': 'Débutez une analyse commerciale gratuite',
                'process-optimisation-text': "Une entreprise qui croît ne voit pas seulement ses chiffres grossir, mais aussi sa complexité interne. Standardiser les processus, centraliser l'information et avoir accès à des outils efficaces n'est plus optionnel, cela devient un besoin principal. Assurez-vous d'avoir en place tous les systèmes nécessaires pour diminuer vos coûts, augmenter votre productivité et croître de la bonne manière.",
                'e-commerce-text': "Avec une croissance annuelle de plus de 20% prévue pour les 5 prochaines années, le commerce en ligne est une opportunité incroyable. Et construire un site et une marque en qui les gens ont confiance n\'est pas une mince tâche. Mettez les chances de votre côté en utilisant des outils professionnels, des structures basées sur la conversion et une équipe regroupant les justes compétences.",
                'custom-application-text': "Chaque idée est unique. Chaque idée devrait aussi avoir une solution digitale unique à elle. Une solution qui met en valeur ses forces, sa valeur ajoutée et permet à l'utilisateur de vivre la meilleure expérience possible. Garantissez-vous un résultat optimal en recourant à des experts pouvant joindre les technologies les plus adaptées pour votre projet."
              }
            },
            project: {
              general: {
                'case-study': 'Étude de cas',
                context: 'Contexte',
                approach: 'Approche',
                implementation: 'Développement',
                results: 'Résultats',
                'read-case-study': 'Lire l\'étude de cas',
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
              },
              "low-cost-tires": {
                title: "Pneus À Petits Prix",
                subtitle: 'Site e-commerce dédié à la vente de pneus'
              },
              mcc: {
                title: 'Histoire québécoise',
                subtitle: 'Plateforme d\'héritage culturel'
              },
              jussaume: {
                title: 'Jussaume',
                subtitle: 'Découvertes digitales pour Jussaume'
              },
              sauver: {
                title: 'Systèmes SAUVéR',
                subtitle: 'Autopartage de voiture en temps réel'
              }
            }
          },
          en: {
            pages: {
              index: 'Home',
              home: {
                title: 'We build better <br>digital products.',
                subtitle: 'Witify is a design & engineering team crafting high-end digital products.',
                'case-studies': 'Case Studies',
                'our-services': 'Our Services',
                'expertise-header': 'Thorough <br><strong>web</strong> & <strong>software</strong><br>expertise.',
                'expertise-paragraph': 'Our team regroups engineers, web experts and business people. We make sure your project is on the right track. And we do it hella good.',
                'what-we-do': 'What we do',
                'start-alberta-resume': 'Start Alberta is a web-community bringing together founders, investors and organizations in a comprehensible and interactive startup ecosystem. It is and will remain an open resource for everyone.',
                'low-cost-tires-resume': 'Low Cost Tires is an e-commerce platform dedicated to the sale of low-priced tires. With more than 20,000 different tires registered, Low Cost Tires aims to make the buying process easy and accessible for the general public.',
                'we-are-awesome': 'Apparently, we are awesome!'
              },
              projects: {
                index: 'Projects',
                boursify: 'Boursify',
                'start-alberta': 'Start Alberta',
                'featured-projects': 'Featured projects',
                subtitle: "Our customers always have good ideas. And we are very proud to be able to display their achievements, because at the base of each of these completed projects, there is a passionate team of experts to whom we must say 'Thank you'.",
              },
              services: {
                index: 'Services',
                'process-optimisation': 'Process optimization',
                'process-optimisation-subtext': 'Optimize your business model',
                'e-commerce': 'E-commerce',
                'e-commerce-subtext': 'The best e-commerce solutions',
                'custom-application': 'Custom application',
                'custom-application-subtext': 'High-quality custom platforms'
              },
              about: {
                title: 'About',
                subtitle: "We are a growing Montreal company. We love human contact and challenges of all kinds. Our team is dynamic and will be happy to listen to your ideas and bring your projects to the next stage. Each of our associates is duly qualified and passionate about the field.<br>Come and say hi!",   
                excellence: 'Excellence',
                'excellence-text': 'Excellence is at the heart of our values. Every project, interaction and action is based on a deep desire to offer superior quality and the best of ourselves. We combine talent and hard work to provide the best tools and the best results. Our team understands your desire to differentiate itself, which is why it takes pride in realizing your idea in the form of a powerful and remarkable digital product.',
                collaboration: 'Collaboration',
                'collaboration-text': "We believe that every success in life comes from a team. And not of any team. A strong team, united, who advocates trust. That's why we want to be a team with everyone. Whether internally, ensuring a strong self-help dynamic. Or with our clientele, which is built on transparency and accessible communication at all times. We are here, we are humans and we want to build the bridges of a lasting relationship.",
                boldness: 'Boldness',
                'boldness-text': 'Our team is bold and innovative. We dare to seize opportunities and turn the challenges that may be in your way into assets. Each event is an opportunity to push the boundaries of innovation and creativity. We believe that it is important to undertake projects, to overcome obstacles and to constantly aspire to better than the status quo.'
              },
              contact: {
                index: 'Contact',
                title: 'Contact us',
                subtitle: 'We are real people here in Montreal. We are ready to answer your questions and help out however we can.',
                coordinates: 'Coordinates',
                email: 'Email',
                phone: 'Phone',
                address: 'Address',
                name: 'Name',
                to: 'to',
                'not-sure': 'Not sure',
                'contacted-by-phone': 'Do you want to be contacted by phone?',
                'yes-please': 'Yes, please!',
                'when-available': 'When are you available?',
                monday: 'Monday',
                tuesday: 'Tuesday',
                wednesday: 'Wednesday',
                thursday: 'Thursday',
                friday: 'Friday',
                saturday: 'Saturday',
                sunday: 'Sunday',
                'which-time': 'At which time?',
                'message-sent': 'Message successfully sent!',
                'back-to-you': 'We will get back to you as soon as possible'
              },
              footer: {
                about: 'About',
                'about-text': 'Our team is Montreal-based and growing fast. It thrive on human connection and cool projects. We\'d love to hear about your next awesome idea! No matter the stage you\'re at, we\'ll make the best out of it. We\'re only one phone call or one email away.',
                'all-services': 'All services',
                'all-rights-reserved': 'All rights reserved.',
              },
              cta: {
                'see-what-witify': 'See what Witify can do for your business',
                'fill-the-form': 'Fill out the form to get instant insights regarding your business',
                'free-business-analysis': 'Start a free business analysis',
                'process-optimisation-text': 'A growing company does not only see its numbers increase, but also its internal complexity. Standardizing processes, centralizing information and having access to effective tools is no longer optional, it becomes a primary need. Make sure you have all the appropriate systems you need to lower costs, increase productivity, and grow in the right way.',
                'e-commerce-text': 'With an annual growth of more than 20% expected for the next 5 years, e-commerce is an incredible opportunity. And building a site and a brand that people trust is not a small task. Put the odds on your side using professional tools, conversion-based structures and a team of just skills.',
                'custom-application-text': 'Each idea is unique. Each idea should also have a unique digital solution to it. A solution that highlights its strengths, its added value and allows the user to enjoy the best possible experience. Ensure optimal results by using experts who can combine the most appropriate technologies for your project.'
              }
            },
            project: {
              general: {
                'case-study': 'Case Study',
                context: 'Context',
                approach: 'Approach',
                implementation: 'Implementation',
                results: 'Results',
                'read-case-study': 'Read case study',
              },
              boursify: {
                title: 'Boursify',
                subtitle: 'Stock market simulation software for schools and businesses.',
                context: "<p>Une simulation boursière évènementielle est un évènement populaire auprès des mordus de la finance, organisé par leurs associations scolaires/étudiantes. Ce genre d’évènement dure généralement une demi-journée ou une journée complète et peut regrouper jusqu’à plusieurs centaines de participants. Dans le cadre de la simulation, les participants se voient devenir des traders, dans le style Wall Street, reçoivent un faux portfolio et doivent transiger des actions à travers un scénario fictif, dans le but de faire le plus d’argent possible.</p><p>Le tout est très populaire auprès des associations étudiantes en finance des universités et cégeps et est organisé sous forme de compétition. Précédemment, une seule alternative logicielle existait pour les organisateurs désirant héberger ce genre d’évènement.</p>",
                results: "Boursify a finalement vu sa première utilisation grand public, lors de la simulation organisée par le Collège André-Grasset et le Collège Marianopolis. Cet évènement a été un grand succès, avec plusieurs participants ayant émis leur préférence du nouveau logiciel par rapport à l’ancien."
              },
              "start-alberta": {
                title: "Start Alberta",
                subtitle: "Social platform for the startup ecosystem in Alberta"
              },
              "low-cost-tires": {
                title: "Low Cost Tires",
                'low-cost-tires-subtitle': 'E-commerce specialized for tires'
              },
              mcc: {
                title: 'Quebec history',
                subtitle: 'Cultural heritage platform'
              },
              jussaume: {
                title: 'Jussaume',
                subtitle: 'Digital discoveries for Jussaume'
              },
              sauver: {
                title: 'SAUVéR Systems',
                subtitle: 'Real-time car sharing platform'
              }
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
