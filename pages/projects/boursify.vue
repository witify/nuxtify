<template>
    <div class="page-boursify is-project">

        <div class="hero is-main is-large is-dark is-center">
            <div class="hero-body">
                <div class="container">
                    <span class="heading">{{ $t('project.general.case-study') }}</span>
                    <h1 class="title">{{ $t('project.boursify.title') }}</h1>
                    <h2 class="subtitle">{{ $t('project.boursify.subtitle') }}</h2>
                </div>
            </div>
        </div>

        <section class="section is-medium">
            <div class="container">
                <div class="columns is-variable is-6 is-desktop">
                    <div class="column is-one-third-desktop">
                        <div class="project-summary">
                            <div class="project-summary-item">
                                <h2 class="heading">Client</h2>
                                <a href="//boursify.io" target="_blank">
                                    <span>
                                    Boursify
                                    </span>
                                    <span class="icon">
                                        <i class="mdi mdi-open-in-new"></i>
                                    </span>
                                </a>
                            </div>
                            <div class="project-summary-item">
                                <h2 class="heading">Type</h2>
                                <p class="is-medium">Application sur mesure</p>
                                <p class="is-medium">Divertissement</p>
                                <p class="is-medium">Finance</p>
                            </div>
                            <div class="project-summary-item">
                                <h2 class="heading">Services</h2>
                                <p class="is-medium">Développement logiciel</p>
                                <p class="is-medium">Conception de l'expérience utilisateur</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <p class="is-lead mb-20">Boursify est logiciel de simulation boursière événementiel pour les écoles et les entreprises qui souhaitent offrir une expérience éducative et divertissante à leur élèves ou employés.</p>
                        <p class="is-medium mb-20">Une simulation boursière évènementielle est un évènement populaire auprès des mordus de la finance, organisé par leurs associations scolaires/étudiantes. Ce genre d’évènement dure généralement une demi-journée ou une journée complète et peut regrouper jusqu’à plusieurs centaines de participants. Dans le cadre de la simulation, les participants se voient devenir des traders, dans le style Wall Street, reçoivent un faux portfolio et doivent transiger des actions à travers un scénario fictif, dans le but de faire le plus d’argent possible.</p>
                        <p class="is-medium">Le tout est très populaire auprès des associations étudiantes en finance des universités et cégeps et est organisé sous forme de compétition. Précédemment, une seule alternative logicielle existait pour les organisateurs désirant héberger ce genre d’évènement.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section is-paddingless">
            <img src="~assets/img/projects/boursify/experience.jpg" alt="Incredible experiences with Boursify software">
        </section>

        <section class="section is-medium">
            <div class="container">
                <h1 class="title is-size-2">
                {{ $t('project.general.approach') }}
                </h1>

                <div class="content">
                    <div class="columns is-variable is-8">
                        <div class="column">
                            <p class="is-medium">Witify devait développer une solution logicielle offrant aux organisateurs en charge de ce type d’évènements, et à leurs participants, une expérience hors-pair, se démarquant grandement du logiciel précédent. Witify a donc du prendre en charge le design de la marque, le développement du produit, la conception d’interfaces et la structure de la plateforme, de A à Z. </p>
                        </div>
                        <div class="column">
                            <p class="is-medium">La solution, 100% clé-en-main, devait permettre la création de scénarios, une plateforme d’administration pour les organisateurs, une gestion de la simulation en temps réel et une plateforme de jeu pour les participants, le tout hébergé sur le cloud. La planification du produit, autant que son développement, et que sa phase test, relevait de l’expertise de l’équipe Witify.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section is-paddingless">
            <div class="container">
                <img src="~assets/img/projects/boursify/player-ui.jpg" alt="Intuitive and simple UI on Boursify Application">
            </div>
        </section>

        <div class="hero is-quote is-custom-application">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h2 class="title">La solution permet la <strong>création de scénarios</strong>, une <strong>plateforme d’administration</strong> pour les organisateurs, une gestion de la <strong>simulation en temps réel</strong> et une <strong>plateforme de jeu</strong> pour les participants.</h2>
                </div>
            </div>
        </div>

        <section class="section is-paddingless">
            <img src="~assets/img/projects/boursify/screen.jpg" alt="Real-time news and stock market">
        </section>

        <section class="diptych is-border-bottom">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">1. Création de scénario</h3>
                    <p class="is-medium">L'équipe Witify a dû travailler de pair avec les potentiels organisateurs afin d’avoir une interface dédiée à ce type d’utilisateur, leur permettant de rapidement créer des scénarios. Tous les scénarios pouvant posséder une multitude d’informations, le processus devait séparer intuitivement les diverses étapes, tout en offrant la possibilité de rajouter une infinité d’informations. Le générateur a été simplifié de façon à pouvoir y former efficacement de la main d’œuvre pour son utilisation.</p>
                </div>
            </div>
            <div class="diptych-image pt-40 pb-40">
                <img src="~assets/img/projects/boursify/scenario.jpg" alt="Quickly creation custom scenario with Boursify Generator">
            </div>
        </section>

        <section class="diptych is-right is-border-bottom">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">2. Algorithmes de simulation</h3>
                    <p class="is-medium">L’équipe de développeurs a dû acquérir des connaissances spécifiques quant au domaine du produit, soit la finance, afin de développer des algorithmes complexes permettant à la simulation d’offrir son aspect si réaliste. En y joignant des outils technologiques divers, l’équipe a intégré le concept de temps réel dans la simulation, permettant aux portfolios des joueurs et au scénario d’être dynamiquement mis à jour, à la seconde près.</p>
                </div>
            </div>
            <div class="diptych-image pt-20 pb-20">
                <img src="~assets/img/projects/boursify/stocks.jpg" alt="High quality stocks simulations">
            </div>
        </section>

        <section class="diptych is-border-bottom">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">3. Expérience utilisateur</h3>
                    <p class="is-medium">L’équipe design a confectionné une interface moderne et intuitive, permettant de relever les informations importantes sur les écrans dédiés aux joueurs, tout en gardant la marque graphique du produit. Les interfaces ont été implémentées afin de dynamiquement s’adapter aux paramètres sélectionnés par les organisateurs lors de la préparation de l’évènement.</p>
                </div>
            </div>
            <div class="diptych-image">
                <img src="~assets/img/projects/boursify/mobile-application.jpg" alt="Boursify Mobile application">
            </div>
        </section>

        <section class="section is-medium">
            <div class="container">

                <div class="columns mb-60">
                    <div class="column is-half">
                        <h2 class="title">{{ $t('project.general.results') }}</h2>
                        <p class="is-medium">
                        {{ $t('project.boursify.results') }}
                        </p>
                    </div>
                </div>

                <h3 class="title is-size-4">Simulations réalisées avec</h3>

                <div class="columns is-multiline is-mobile is-clients mb-60">
                    <div class="column is-half-mobile">
                        <div class="v-center">
                            <img src="~assets/img/projects/boursify/clients/mcgill.png" alt="McGill trading simulation">
                        </div>
                    </div>
                    <div class="column is-half-mobile">
                        <div class="v-center">
                            <img src="~assets/img/projects/boursify/clients/grasset.png" alt="André Grasset trading simulation">
                        </div>
                    </div>
                    <div class="column is-half-mobile">
                        <div class="v-center">
                            <img src="~assets/img/projects/boursify/clients/marianopolis.png" alt="Marianopolis trading simulation">
                        </div>
                    </div>
                    <div class="column is-half-mobile">
                        <div class="v-center">
                            <img src="~assets/img/projects/boursify/clients/letendre.png" alt="Letendre trading simulation">
                        </div>
                    </div>
                </div>

                <h3 class="title is-size-4 pb-20">Prix</h3>

                <div class="columns is-multiline is-mobile is-clients">
                    <div class="column">
                        <img src="~assets/img/projects/boursify/prizes/innovinc.png" alt="Innovinc RBC prize">
                        <p class="mt-35">Prix du public INNOVINC RBC</p>
                    </div>
                    <div class="column">
                        <img src="~assets/img/projects/boursify/prizes/quebecor.png" alt="Quebecor prize">
                        <p class="mt-5">Finaliste de la Bourse Pierre-Péladeau</p>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
export default {
    nuxtI18n: {
        paths: {
            en: '/projects/boursify',
            fr: '/projets/boursify'
        }
    },
    head() {
        return {
            title: this.$t('pages.projects.boursify')
        }
    }
}
</script>