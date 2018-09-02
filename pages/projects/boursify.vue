<template>
    <div class="page-boursify is-project">

        <div class="hero is-main is-fullheight is-dark is-center">
            <div class="hero-body">
                <div class="container">
                    <span class="heading">{{ $t('project.general.case-study') }}</span>
                    <h1 class="title">{{ $t('project.boursify.title') }}</h1>
                    <h2 class="subtitle">{{ $t('project.boursify.subtitle') }}</h2>
                </div>
            </div>

            <div class="scroll-to" v-scroll-to="'#content'">
                <div class="icon">
                    <i class="mdi mdi-chevron-down"></i>
                </div>
            </div>
        </div>

        <section id="content" class="section is-medium">
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
                                <h2 class="heading">{{ $t('project.general.type') }}</h2>
                                <p class="is-medium">{{ $t('project.general.custom-app') }}</p>
                                <p class="is-medium">{{ $t('project.general.entertainment') }}</p>
                                <p class="is-medium">{{ $t('project.general.finance') }}</p>
                            </div>
                            <div class="project-summary-item">
                                <h2 class="heading">Services</h2>
                                <p class="is-medium">{{ $t('project.general.software-dev') }}</p>
                                <p class="is-medium">{{ $t('project.general.ux-dev') }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <p class="is-lead mb-20">{{ $t('project.boursify.paragraph-1') }}</p>
                        <p class="is-medium mb-20">{{ $t('project.boursify.paragraph-2') }}</p>
                        <p class="is-medium">{{ $t('project.boursify.paragraph-3') }}</p>
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

                <div class="columns is-variable is-8">
                    <div class="column">
                        <p class="is-medium">{{ $t('project.boursify.approach-text-1') }}</p>
                    </div>
                    <div class="column">
                        <p class="is-medium">{{ $t('project.boursify.approach-text-2') }}</p>
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
                    <h2 class="title" v-html="$t('project.boursify.header-text')"></h2>
                </div>
            </div>
        </div>

        <section class="section is-paddingless">
            <img src="~assets/img/projects/boursify/screen.jpg" alt="Real-time news and stock market">
        </section>

        <section class="diptych is-border-bottom">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">1. {{ $t('project.boursify.scenario-creation') }}</h3>
                    <p class="is-medium">{{ $t('project.boursify.scenario-creation-text') }}</p>
                </div>
            </div>
            <div class="diptych-image pt-40 pb-40">
                <img src="~assets/img/projects/boursify/scenario.jpg" alt="Quickly creation custom scenario with Boursify Generator">
            </div>
        </section>

        <section class="diptych is-right is-border-bottom">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">2. {{ $t('project.boursify.simulation-algo') }}</h3>
                    <p class="is-medium">{{ $t('project.boursify.simulation-algo-text') }}</p>
                </div>
            </div>
            <div class="diptych-image pt-20 pb-20">
                <img src="~assets/img/projects/boursify/stocks.jpg" alt="High quality stocks simulations">
            </div>
        </section>

        <section class="diptych is-border-bottom">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">3. {{ $t('project.boursify.user-experience') }}</h3>
                    <p class="is-medium">{{ $t('project.boursify.user-experience-text') }}</p>
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
                        {{ $t('project.boursify.results-text') }}
                        </p>
                    </div>
                </div>

                <h3 class="title is-size-4">{{ $t('project.boursify.simulations-made-for') }}</h3>

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

                <h3 class="title is-size-4 pb-20">{{ $t('project.boursify.contest-prize') }}</h3>

                <div class="columns is-multiline is-mobile is-clients">
                    <div class="column">
                        <img src="~assets/img/projects/boursify/prizes/innovinc.png" alt="Innovinc RBC prize">
                        <p class="mt-35">{{ $t('project.boursify.prize-innovinc') }}</p>
                    </div>
                    <div class="column">
                        <img src="~assets/img/projects/boursify/prizes/quebecor.png" alt="Quebecor prize">
                        <p class="mt-5">{{ $t('project.boursify.prize-pkp') }}</p>
                    </div>
                </div>

            </div>
        </section>

        <cta></cta>
        
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