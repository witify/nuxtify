<template>
    <div class="page-sauver is-project">

        <div class="hero is-main is-fullheight is-dark is-center">
            <div class="hero-body">
                <div class="container">
                    <span class="heading">{{ $t('project.general.case-study') }}</span>
                    <h1 class="title">{{ $t('project.sauver.title') }}</h1>
                    <h2 class="subtitle">{{ $t('project.sauver.subtitle') }}</h2>
                </div>
            </div>

            <div class="scroll-to" v-scroll-to="'#content'">
                <div class="icon">
                    <i class="mdi mdi-chevron-down"></i>
                </div>
            </div>
        </div>

        <section id="content" class="section is-medium pb-60">
            <div class="container">
                <div class="columns is-variable is-6 is-desktop">
                    <div class="column is-one-third-desktop">
                        <div class="project-summary">
                            <div class="project-summary-item">
                                <h2 class="heading">Client</h2>
                                <a href="//www.yhcenvironnement.com/" target="_blank">
                                    <span>
                                        YHC Environnement
                                    </span>
                                    <span class="icon">
                                        <i class="mdi mdi-open-in-new"></i>
                                    </span>
                                </a>
                            </div>
                            <div class="project-summary-item">
                                <h2 class="heading">{{ $t('project.general.type') }}</h2>
                                <p class="is-medium">{{ $t('project.general.custom-app') }}</p>
                                <p class="is-medium">{{ $t('project.sauver.carsharing') }}</p>
                                <p class="is-medium">{{ $t('project.sauver.fleet-management') }}</p>
                                <p class="is-medium">{{ $t('project.sauver.environment') }}</p>
                            </div>
                            <div class="project-summary-item">
                                <h2 class="heading">Services</h2>
                                <p class="is-medium">{{ $t('project.general.software-dev') }}</p>
                                <p class="is-medium">{{ $t('project.general.ux-dev') }}</p>
                                <p class="is-medium">{{ $t('project.sauver.real-time-fleet-management') }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <p class="is-lead mb-20">
                        {{ $t('project.sauver.header-1') }} 
                        </p>
                        <p class="is-medium">
                        {{ $t('project.sauver.subheader-1') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section is-paddingless has-border-bottom">
            <div class="container">
                <img src="~assets/img/projects/sauver/overview.jpg" alt="Complete eco-system">
            </div>
        </section>

        <section class="section is-medium">
            <div class="container">
                <h1 class="title is-size-2">
                {{ $t('project.general.approach') }}
                </h1>

                <div class="columns is-variable is-8">
                    <div class="column">
                        <p class="is-medium">{{ $t('project.sauver.approach-1') }}</p>
                    </div>
                    <div class="column">
                        <p class="is-medium">
                        {{ $t('project.sauver.approach-2') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section is-paddingless">
            <div class="container">
                <img src="~assets/img/projects/sauver/mobile-ui.jpg" alt="Complete eco-system">
            </div>
        </section>

        <section class="hero is-quote">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h2 class="title" v-html="$t('project.sauver.header-2')">
                    
                    </h2>
                </div>
            </div>
        </section>

        <section class="diptych is-border-bottom">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">{{ $t('project.sauver.real-time-fleet-management') }}</h3>
                    <p class="is-medium">{{ $t('project.sauver.paragraph-1') }}</p>
                </div>
            </div>
            <div class="diptych-image pt-80">
                <img src="~assets/img/projects/sauver/gestion.png" alt="Gestion de flotte en temps réel" class="has-shadow">
            </div>
        </section>

        <section class="diptych is-border-bottom is-right">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">{{ $t('project.sauver.booking-interface') }}</h3>
                    <p class="is-medium">{{ $t('project.sauver.paragraph-2') }}</p>
                </div>
            </div>
            <div class="diptych-image pt-80">
                <img src="~assets/img/projects/sauver/reservation.png" alt="Reservation rapide et intuitive sur ordinateur et mobile" class="has-shadow">
            </div>
        </section>

        <section class="section is-medium">
            <div class="container">
                <h2 class="title is-size-2">{{ $t('project.general.results') }}</h2>
                <p class="is-medium mb-50" v-html="$t('project.sauver.results')"></p>

                <div class="columns is-multiline is-mobile is-clients mb-60">
                    <div class="column is-half-mobile">
                        <div class="v-center">
                            <img src="~assets/img/projects/sauver/cities/plessisville.png" alt="Plessisville">
                        </div>
                    </div>
                    <div class="column is-half-mobile">
                        <div class="v-center">
                            <img src="~assets/img/projects/sauver/cities/bromont.png" alt="Bromont">
                        </div>
                    </div>
                    <div class="column is-half-mobile">
                        <div class="v-center">
                            <img src="~assets/img/projects/sauver/cities/nicolet.png" alt="Nicolet">
                        </div>
                    </div>
                    <div class="column is-half-mobile">
                        <div class="v-center">
                            <img src="~assets/img/projects/sauver/cities/riviere-du-loup.png" alt="Rivière du loup">
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">10+</div>
                        <span class="has-text-grey is-size-5">{{ $t('project.sauver.registered-vehicles') }}</span>
                    </div>
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">100+</div>
                        <span class="has-text-grey is-size-5">{{ $t('project.sauver.active-users') }}</span>
                    </div>
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">1500+</div>
                        <span class="has-text-grey is-size-5">{{ $t('project.sauver.bookings') }}</span>
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
            en: '/projects/sauver',
            fr: '/projets/sauver'
        }
    },
    head() {
        return {
            title: this.$t('pages.projects.sauver')
        }
    }
}
</script>