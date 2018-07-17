<template>

    <div class="page-process-optimisation">

        <section class="hero is-main is-half is-process-optimisation is-bold is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="icon is-circle is-dark">
                        <i class="mdi mdi-rocket"></i>
                    </div>
                    <h1 class="title">{{ $t('pages.services.process-optimisation') }}</h1>
                    <h2 class="subtitle">{{ $t('service.process-optimisation.subheader') }}</h2>
                </div>
            </div>

            <div class="scroll-to" v-scroll-to="'#content'">
                <div class="icon">
                    <i class="mdi mdi-chevron-down"></i>
                </div>
            </div>
        </section>

        <section id="content" class="hero">
            <div class="hero-body">
                <div class="container is-sm">
                    <p class="is-size-3 has-text-centered is-tight" v-html="$t('service.process-optimisation.integration-header')">
                        
                    </p>
                </div>
            </div>
        </section>

        <section class="diptych is-border-bottom is-grey">
            <div class="container">
                <div class="diptych-body">
                    <div class="icon is-large mb-20">
                        <i class="mdi mdi-trending-up mdi-48px has-text-process-optimisation"></i>
                    </div>
                    <h3 class="title">{{ $t('service.process-optimisation.growth-plateau-question') }}</h3>
                    <p class="is-medium" v-html="$t('service.process-optimisation.growth-plateau-answer')"></p>
                </div>
            </div>
            <div class="diptych-image is-cover">
                <img src="~assets/img/bg/office.jpg" alt="Witify can help you scale faster">
            </div>
        </section>

        <section class="section has-text-centered">
            <div class="container is-sm">
                <h2 class="title is-size-2">{{ $t('service.process-optimisation.our-services') }}</h2>
                <h2 class="subtitle is-size-4 mb-40">{{ $t('service.process-optimisation.services-range') }}</h2>

                <div class="columns is-mobile is-multiline">

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-circle has-text-process-optimisation">
                                <i class="mdi mdi-database-search"></i>
                            </div>
                            <h2 class="title">{{ $t('service.process-optimisation.benefit-1-title') }}</h2>
                            <h3 class="subtitle">{{ $t('service.process-optimisation.benefit-1-subtitle') }}</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-circle has-text-process-optimisation">
                                <i class="mdi mdi-clipboard-pulse-outline"></i>
                            </div>
                            <h2 class="title">{{ $t('service.process-optimisation.benefit-2-title') }}</h2>
                            <h3 class="subtitle">{{ $t('service.process-optimisation.benefit-2-subtitle') }}</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-circle has-text-process-optimisation">
                                <i class="mdi mdi-gauge-full"></i>
                            </div>
                            <h2 class="title">{{ $t('service.process-optimisation.benefit-3-title') }}</h2>
                            <h3 class="subtitle">{{ $t('service.process-optimisation.benefit-3-subtitle') }}</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-circle has-text-process-optimisation">
                                <i class="mdi mdi-web"></i>
                            </div>
                            <h2 class="title">{{ $t('service.process-optimisation.benefit-4-title') }}</h2>
                            <h3 class="subtitle">{{ $t('service.process-optimisation.benefit-4-subtitle') }}</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-circle has-text-process-optimisation">
                                <i class="mdi mdi-security"></i>
                            </div>
                            <h2 class="title">{{ $t('service.process-optimisation.benefit-5-title') }}</h2>
                            <h3 class="subtitle">{{ $t('service.process-optimisation.benefit-5-subtitle') }}</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-circle has-text-process-optimisation">
                                <i class="mdi mdi-tune-vertical"></i>
                            </div>
                            <h2 class="title">{{ $t('service.process-optimisation.benefit-6-title') }}</h2>
                            <h3 class="subtitle">{{ $t('service.process-optimisation.benefit-6-subtitle') }}</h3>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section class="hero is-light has-text-centered">
            <div class="hero-body">
                <div class="container">

                    <h2 class="title is-size-2">{{ $t('service.process-optimisation.4-steps-method') }}</h2>
                    <h3 class="subtitle is-size-4 mb-50">{{ $t('service.process-optimisation.4-steps-method-subheader') }}</h3>

                    <div class="columns is-multiline">

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <div class="phase" v-scroll-to="'#phase1'">
                                <div class="tag is-process-optimisation">
                                    1
                                </div>
                                <h3 class="title">{{ $t('service.process-optimisation.strategic-meeting-header') }}</h3>
                            </div>
                        </div>

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <div class="phase" v-scroll-to="'#phase2'">
                                <div class="tag is-process-optimisation">
                                    2
                                </div>
                                <h3 class="title">{{ $t('service.process-optimisation.process-analysis-header') }}</h3>
                            </div>
                        </div>

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <div class="phase" v-scroll-to="'#phase3'">
                                <div class="tag is-process-optimisation">
                                    3
                                </div>
                                <h3 class="title">{{ $t('service.process-optimisation.implementation-header') }}</h3>
                            </div>
                        </div>

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <div class="phase" v-scroll-to="'#phase4'">
                                <div class="tag is-process-optimisation">
                                    4
                                </div>
                                <h3 class="title">{{ $t('service.process-optimisation.project-report-header') }}</h3>
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
                            <div class="icon is-circle mb-20 has-text-process-optimisation">
                                <i class="mdi mdi-account"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 1
                            </span>

                            <h2 class="title">
                                {{ $t('service.process-optimisation.strategic-meeting-header') }}
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        {{ $t('service.process-optimisation.strategic-meeting-subheader') }}
                    </p>

                    <ul class="is-bold">
                        <li>{{ $t('service.process-optimisation.strategic-meeting-point-1') }}</li>
                        <li>{{ $t('service.process-optimisation.strategic-meeting-point-2') }}</li>
                        <li>{{ $t('service.process-optimisation.strategic-meeting-point-3') }}</li>
                    </ul>
                </div>
            </div>

            <div class="diptych-image pt-60 pb-60">
                <img src="~assets/img/services/process-optimisation/phase1.svg" alt="Phase 1">
            </div>

        </section>

        <section id="phase2" class="diptych is-right is-border-bottom is-imageless-mobile">
            <div class="container">
                <div class="diptych-body">

                    <div class="media mb-20">
                        <div class="media-left">
                            <div class="icon is-circle mb-20 has-text-process-optimisation">
                                <i class="mdi mdi-chart-pie"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 2
                            </span>

                            <h2 class="title">
                                {{ $t('service.process-optimisation.process-analysis-header') }}
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        {{ $t('service.process-optimisation.process-analysis-subheader') }}
                    </p>

                    <ul class="is-bold">
                        <li>{{ $t('service.process-optimisation.process-analysis-point-1') }}</li>
                        <li>{{ $t('service.process-optimisation.process-analysis-point-2') }}</li>
                        <li>{{ $t('service.process-optimisation.process-analysis-point-3') }}</li>
                    </ul>

                </div>
            </div>

            <div class="diptych-image">
                <img src="~assets/img/services/process-optimisation/phase2.svg" alt="Phase 2">
            </div>

        </section>

        <section id="phase3" class="diptych is-border-bottom is-imageless-mobile">
            <div class="container">
                <div class="diptych-body">
                    <div class="media mb-20">
                        <div class="media-left">
                            <div class="icon is-circle mb-20 has-text-process-optimisation">
                                <i class="mdi mdi-remote-desktop"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 3
                            </span>

                            <h2 class="title">
                                {{ $t('service.process-optimisation.implementation-header') }}
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        {{ $t('service.process-optimisation.implementation-subheader') }}
                    </p>

                    <ul class="is-bold">
                        <li>{{ $t('service.process-optimisation.implementation-point-1') }}</li>
                        <li>{{ $t('service.process-optimisation.implementation-point-2') }}</li>
                        <li>{{ $t('service.process-optimisation.implementation-point-3') }}</li>
                    </ul>
                </div>
            </div>

            <div class="diptych-image pt-60 pb-60">
                <img src="~assets/img/services/process-optimisation/phase3.svg" alt="Phase 3">
            </div>
        </section>

        <section id="phase4" class="diptych is-right is-imageless-mobile">
            <div class="container">
                <div class="diptych-body">
                    
                    <div class="media mb-20">
                        <div class="media-left">
                            <div class="icon is-circle mb-20 has-text-process-optimisation">
                                <i class="mdi mdi-file-chart"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 4
                            </span>

                            <h2 class="title">
                                {{ $t('service.process-optimisation.project-report-header') }}
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        {{ $t('service.process-optimisation.project-report-subheader') }}
                    </p>

                    <ul class="is-bold">
                        <li>{{ $t('service.process-optimisation.project-report-point-1') }}</li>
                        <li>{{ $t('service.process-optimisation.project-report-point-2') }}</li>
                        <li>{{ $t('service.process-optimisation.project-report-point-3') }}</li>
                    </ul>

                </div>

            </div>

            <div class="diptych-image pt-60 pb-60">
                <img src="~assets/img/services/process-optimisation/phase4.svg" alt="Phase 4">
            </div>

        </section>

    </div>

</template>

<script>
export default {
    layout: 'default',
    nuxtI18n: {
        paths: {
            en: '/process-optimisation',
            fr: '/optimisation-de-processus'
        }
    },
    head() {
        return {
            title: this.$t('pages.services.process-optimisation')
        }
    }
}
</script>
