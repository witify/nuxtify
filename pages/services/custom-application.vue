<template>
    <div class="page-custom-application">

        <section class="hero is-main is-half is-bold is-custom-application is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="icon is-circle is-dark">
                        <i class="mdi mdi-server-network"></i>
                    </div>
                    <h1 class="title">{{ $t('service.custom-application.title') }}</h1>
                    <h2 class="subtitle">{{ $t('service.custom-application.subtitle') }}</h2>
                </div>
            </div>

            <div class="scroll-to is-hidden-mobile" v-scroll-to="'#content'">
                <div class="icon">
                    <i class="mdi mdi-chevron-down"></i>
                </div>
            </div>
        </section>

        <section id="content" class="section pb-0">
            <div class="container is-sm">
                <h2 class="title">{{ $t('service.custom-application.unique-app-header') }}</h2>
                <p class="is-medium">{{ $t('service.custom-application.unique-app-text') }}</p>
            </div>
            <div class="container">    
                <nuxt-link :to="localePath('projects-sauver')" class="clickable show-on-mobile mt-30">
                    <div class="clickable-button">
                        <button class="button is-black is-medium">
                            <span>{{ $t('project.general.case-study') }}: SAUVéR</span>
                            <span class="icon">
                                <i class="mdi mdi-chevron-right"></i>
                            </span>
                        </button>
                    </div>
                    <div class="clickable-content">
                        <img src="~assets/img/projects/sauver/overview.jpg" alt="Complete eco-system">
                    </div>
                </nuxt-link>
            </div>
        </section>

        <section class="diptych is-border-bottom is-grey">
            <div class="container">
                <div class="diptych-body">
                    <div class="icon is-large mb-20">
                        <i class="mdi mdi-account-convert mdi-48px has-text-custom-application"></i>
                    </div>
                    <h3 class="title">{{ $t('service.custom-application.adapt-reality-header') }}</h3>
                    <p class="is-medium mb-15">{{ $t('service.custom-application.adapt-reality-text-1') }}</p>
                    <p class="is-medium mb-15">{{ $t('service.custom-application.adapt-reality-text-2') }}</p>
                    <p class="is-medium mb-15"><strong>{{ $t('service.custom-application.adapt-reality-text-3') }}</strong></p>
                </div>
            </div>
            <div class="diptych-image is-cover">
                <img src="~assets/img/services/custom-application/collaboration.jpg" alt="Witify can help you scale faster">
            </div>
        </section>

        <section id="content" class="section pb-0">
            <div class="container is-sm has-text-centered">
                <h2 class="title">{{ $t('service.custom-application.quality-products-header') }}</h2>
                <p class="is-medium">{{ $t('service.custom-application.quality-products-text') }}</p>
            </div>
            <div class="container">
                <nuxt-link :to="localePath('projects-sauver')" class="clickable show-on-mobile mt-30">
                    <div class="clickable-button">
                        <button class="button is-black is-medium">
                            <span>{{ $t('project.general.case-study') }}: Start Alberta</span>
                            <span class="icon">
                                <i class="mdi mdi-chevron-right"></i>
                            </span>
                        </button>
                    </div>
                    <div class="clickable-content">
                        <img src="~assets/img/projects/start-alberta/mobile-ui.jpg" alt="Complete eco-system">
                    </div>
                </nuxt-link>
            </div>
        </section>

        <section class="hero is-light has-text-centered">
            <div class="hero-body">
                <div class="container is-sm">
                    <h2 class="title">{{ $t('service.custom-application.3-steps-method') }}</h2>
                    <p class="is-medium mb-50">{{ $t('service.custom-application.3-steps-method-text') }}</p>
                </div>

                <div class="container">
                    <div class="columns is-multiline is-variable is-5">

                        <div class="column is-one-third-desktop">
                            <div class="phase" v-scroll-to="'#phase1'">
                                <div class="tag is-custom-application">
                                    1
                                </div>
                                <h3 class="title">{{ $t('service.custom-application.project-analysis-header') }}</h3>
                            </div>
                        </div>

                        <div class="column is-one-third-desktop">
                            <div class="phase" v-scroll-to="'#phase2'">
                                <div class="tag is-custom-application">
                                    2
                                </div>
                                <h3 class="title">{{ $t('service.custom-application.app-dev-header') }}</h3>
                            </div>
                        </div>

                        <div class="column is-one-third-desktop">
                            <div class="phase" v-scroll-to="'#phase3'">
                                <div class="tag is-custom-application">
                                    3
                                </div>
                                <h3 class="title">{{ $t('service.custom-application.deployment-header') }}</h3>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <section id="phase1" class="diptych is-border-bottom is-imageless-mobile">

            <div class="container">
                <div class="diptych-body">
                    <div class="media pb-35">
                        <div class="media-left">
                            <div class="icon is-circle mb-20 has-text-custom-application">
                                <i class="mdi mdi-account"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 1
                            </span>

                            <h2 class="title">
                                {{ $t('service.custom-application.project-analysis-header') }}
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        {{ $t('service.custom-application.project-analysis-subheader') }}
                    </p>

                    <ul class="is-bold">
                        <li>{{ $t('service.custom-application.project-analysis-point-1') }}</li>
                        <li>{{ $t('service.custom-application.project-analysis-point-2') }}</li>
                        <li>{{ $t('service.custom-application.project-analysis-point-3') }}</li>
                        <li>{{ $t('service.custom-application.project-analysis-point-4') }}</li>
                    </ul>
                </div>
            </div>

            <div class="diptych-image pt-60 pb-60">
                <img src="~assets/img/services/process-optimisation/phase1.svg" alt="Phase 1">
            </div>

        </section>

        <section id="phase2" class="diptych is-right is-border-bottom">
            <div class="container">
                <div class="diptych-body">

                    <div class="media mb-20">
                        <div class="media-left">
                            <div class="icon is-circle mb-20 has-text-custom-application">
                                <i class="mdi mdi-chart-pie"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 2
                            </span>

                            <h2 class="title">
                                {{ $t('service.custom-application.app-dev-header') }}
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        {{ $t('service.custom-application.app-dev-subheader') }}
                    </p>

                    <ul class="is-bold">
                        <li>{{ $t('service.custom-application.app-dev-point-1') }}</li>
                        <li>{{ $t('service.custom-application.app-dev-point-2') }}</li>
                        <li>{{ $t('service.custom-application.app-dev-point-3') }}</li>
                        <li>{{ $t('service.custom-application.app-dev-point-4') }}</li>
                    </ul>

                </div>
            </div>

            <div class="diptych-image">
                <img src="~assets/img/services/process-optimisation/phase2.svg" alt="Phase 2">
            </div>

        </section>

        <section id="phase3" class="diptych is-border-bottom">
            <div class="container">
                <div class="diptych-body">
                    <div class="media mb-20">
                        <div class="media-left">
                            <div class="icon is-circle mb-20 has-text-custom-application">
                                <i class="mdi mdi-remote-desktop"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 3
                            </span>

                            <h2 class="title">
                                {{ $t('service.custom-application.deployment-header') }}
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        {{ $t('service.custom-application.deployment-subheader') }}
                    </p>

                    <ul class="is-bold">
                        <li>{{ $t('service.custom-application.deployment-point-1') }}</li>
                        <li>{{ $t('service.custom-application.deployment-point-2') }}</li>
                        <li>{{ $t('service.custom-application.deployment-point-3') }}</li>
                        <li>{{ $t('service.custom-application.deployment-point-4') }}</li>
                    </ul>
                </div>
            </div>

            <div class="diptych-image pt-60 pb-60">
                <img src="~assets/img/services/process-optimisation/phase3.svg" alt="Phase 3">
            </div>
        </section>

        <section class="hero is-custom-application is-bold has-text-centered">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title">{{ $t('service.custom-application.next-big-idea') }}</h2>
                    <nuxt-link :to="localePath('contact')" class="button is-white is-medium is-shiny is-rounded">
                        <span>{{ $t('pages.footer.contact-us-now') }}</span>
                        <span class="icon">
                        <i class="mdi mdi-arrow-right"></i>
                        </span>
                    </nuxt-link>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    layout: 'default',
    nuxtI18n: {
        paths: {
            en: '/custom-application',
            fr: '/application-sur-mesure'
        }
    },
    head() {
        return {
            title: this.$t('pages.services.custom-application')
        }
    }
}
</script>
