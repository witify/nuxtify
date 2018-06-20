<template>
    <div class="page-start-alberta">

        <div class="hero is-main is-large is-dark is-center">
            <div class="hero-body">
                <div class="container">
                    <span class="heading">{{ $t('project.general.case-study') }}</span>
                    <h1 class="title">{{ $t('project.start-alberta.title') }}</h1>
                    <h2 class="subtitle">{{ $t('project.start-alberta.subtitle') }}</h2>
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

    </div>
</template>

<script>
export default {
    nuxtI18n: {
        paths: {
            en: '/projects/start-alberta',
            fr: '/projets/start-alberta'
        }
    },
    head() {
        return {
            title: this.$t('pages.projects.start-alberta')
        }
    }
}
</script>