<template>

    <div class="page-e-commerce">

        <section class="hero is-main is-half is-e-commerce is-bold is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="icon is-circle is-dark">
                        <i class="mdi mdi-store"></i>
                    </div>
                    <h1 class="title">{{ $t('pages.services.e-commerce') }}</h1>
                    <h2 class="subtitle">{{ $t('service.e-commerce.subtitle') }}</h2>
                </div>
            </div>

            <div class="scroll-to is-hidden-mobile" v-scroll-to="'#content'">
                <div class="icon">
                    <i class="mdi mdi-chevron-down"></i>
                </div>
            </div>
        </section>

        <section id="content" class="hero">
            <div class="hero-body">
                <div class="container is-sm">
                    <p class="is-size-3 has-text-centered is-tight" v-html="$t('service.e-commerce.header')">

                    </p>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <img src="~assets/img/services/e-commerce/e-commerce-website.jpg" alt="E-commerce website">
            </div>
        </section>

        <section class="section has-text-centered">
            <div class="container is-sm">
                <h2 class="title is-size-2 is-spaced">{{ $t('service.e-commerce.our-services-header') }}</h2>
                <h2 class="subtitle is-size-4 mb-60">{{ $t('service.e-commerce.our-services-subheader') }}</h2>

                <div class="columns is-mobile is-multiline">

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-size-3 mb-20 has-text-e-commerce">
                                <i class="mdi mdi-cart"></i>
                            </div>
                            <h2 class="title">{{ $t('service.e-commerce.benefit-1-title') }}</h2>
                            <h3 class="subtitle">{{ $t('service.e-commerce.benefit-1-subtitle') }}</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-size-3 mb-20 has-text-e-commerce">
                                <i class="mdi mdi-power-plug"></i>
                            </div>
                            <h2 class="title">{{ $t('service.e-commerce.benefit-2-title') }}</h2>
                            <h3 class="subtitle">{{ $t('service.e-commerce.benefit-2-subtitle') }}</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-size-3 mb-20 has-text-e-commerce">
                                <i class="mdi mdi-flash"></i>
                            </div>
                            <h2 class="title">{{ $t('service.e-commerce.benefit-3-title') }}</h2>
                            <h3 class="subtitle">{{ $t('service.e-commerce.benefit-3-subtitle') }}</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-size-3 mb-20 has-text-e-commerce">
                                <i class="mdi mdi-earth"></i>
                            </div>
                            <h2 class="title">{{ $t('service.e-commerce.benefit-4-title') }}</h2>
                            <h3 class="subtitle">{{ $t('service.e-commerce.benefit-4-subtitle') }}</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-size-3 mb-20 has-text-e-commerce">
                                <i class="mdi mdi-sitemap"></i>
                            </div>
                            <h2 class="title">{{ $t('service.e-commerce.benefit-5-title') }}</h2>
                            <h3 class="subtitle">{{ $t('service.e-commerce.benefit-5-subtitle') }}</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-size-3 mb-20 has-text-e-commerce">
                                <i class="mdi mdi-clipboard-pulse-outline"></i>
                            </div>
                            <h2 class="title">{{ $t('service.e-commerce.benefit-6-title') }}</h2>
                            <h3 class="subtitle">{{ $t('service.e-commerce.benefit-6-subtitle') }}</h3>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section class="hero is-light has-text-centered">
            <div class="hero-body">
                <div class="container is-sm">
                    <h2 class="title">{{ $t('service.e-commerce.3-steps-method') }}</h2>
                    <h3 class="subtitle mb-50">{{ $t('service.e-commerce.3-steps-method-subheader') }}</h3>
                </div>

                <div class="container">
                    <div class="columns is-multiline">

                        <div class="column is-one-third-desktop">
                            <div class="phase" v-scroll-to="'#phase1'">
                                <div class="tag is-e-commerce">
                                    1
                                </div>
                                <h3 class="title">{{ $t('service.e-commerce.analysis-positionning-header') }}</h3>
                            </div>
                        </div>

                        <div class="column is-one-third-desktop">
                            <div class="phase" v-scroll-to="'#phase2'">
                                <div class="tag is-e-commerce">
                                    2
                                </div>
                                <h3 class="title">{{ $t('service.e-commerce.development-header') }}</h3>
                            </div>
                        </div>

                        <div class="column is-one-third-desktop">
                            <div class="phase" v-scroll-to="'#phase3'">
                                <div class="tag is-e-commerce">
                                    3
                                </div>
                                <h3 class="title">{{ $t('service.e-commerce.deployment-header') }}</h3>
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
                            <div class="icon is-circle mb-20 has-text-e-commerce">
                                <i class="mdi mdi-account"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 1
                            </span>

                            <h2 class="title">
                                {{ $t('service.e-commerce.analysis-positionning-header') }}
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        {{ $t('service.e-commerce.analysis-positionning-subheader') }}
                    </p>

                    <ul class="is-bold">
                        <li>{{ $t('service.e-commerce.analysis-positionning-point-1') }}</li>
                        <li>{{ $t('service.e-commerce.analysis-positionning-point-2') }}</li>
                        <li>{{ $t('service.e-commerce.analysis-positionning-point-3') }}</li>
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
                            <div class="icon is-circle mb-20 has-text-e-commerce">
                                <i class="mdi mdi-chart-pie"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 2
                            </span>

                            <h2 class="title">
                                {{ $t('service.e-commerce.development-header') }}
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        {{ $t('service.e-commerce.development-subheader') }}
                    </p>

                    <ul class="is-bold">
                        <li>{{ $t('service.e-commerce.development-point-1') }}</li>
                        <li>{{ $t('service.e-commerce.development-point-2') }}</li>
                        <li>{{ $t('service.e-commerce.development-point-3') }}</li>
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
                            <div class="icon is-circle mb-20 has-text-e-commerce">
                                <i class="mdi mdi-remote-desktop"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 3
                            </span>

                            <h2 class="title">
                                {{ $t('service.e-commerce.deployment-header') }}
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        {{ $t('service.e-commerce.deployment-subheader') }}
                    </p>

                    <ul class="is-bold">
                        <li>{{ $t('service.e-commerce.deployment-point-1') }}</li>
                        <li>{{ $t('service.e-commerce.deployment-point-2') }}</li>
                        <li>{{ $t('service.e-commerce.deployment-point-3') }}</li>
                    </ul>
                </div>
            </div>

            <div class="diptych-image pt-60 pb-60">
                <img src="~assets/img/services/process-optimisation/phase3.svg" alt="Phase 3">
            </div>
        </section>

        <section class="hero is-e-commerce is-bold has-text-centered">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title">{{ $t('service.e-commerce.build-your-ecommerce') }}</h2>
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
            en: '/e-commerce',
            fr: '/e-commerce'
        }
    },
    head() {
        return {
            title: this.$t('pages.services.e-commerce')
        }
    }
}
</script>
