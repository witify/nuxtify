<template>

    <div class="wrapper">
        <div class="page-services">

            <section class="hero is-main">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">{{ $t('service.index.our-services') }}</h1>
                        <h2 class="subtitle">{{ $t('service.index.our-services-subheader') }}</h2>
                    </div>
                </div>
            </section>

            <section class="diptych is-border-bottom is-imageless-mobile">
                <div class="container">
                    <div class="diptych-body">
                        <div class="icon is-circle mb-20">
                            <i class="mdi mdi-rocket"></i>
                        </div>
                        <h2 class="title">{{ $t('service.index.process-optimisation') }}</h2>
                        <p class="is-medium mb-30">{{ $t('service.index.process-optimisation-text') }}</p>
                        <nuxt-link :to="localePath('services-process-optimisation')" class="button is-process-optimisation is-medium">
                            <span>{{ $t('service.index.learn-more') }}</span>
                            <span class="icon">
                                <i class="mdi mdi-arrow-right"></i>
                            </span>
                        </nuxt-link>
                    </div>
                </div>
                <div class="diptych-image pt-40 pb-40">
                    <img src="~assets/img/services/process-optimisation/illustration.svg" alt="Process optimisation">
                </div>
            </section>

            <section class="diptych is-border-bottom is-right is-imageless-mobile">
                <div class="container">
                    <div class="diptych-body">
                        <div class="icon is-circle mb-20">
                            <i class="mdi mdi-store"></i>
                        </div>
                        <h2 class="title">{{ $t('service.index.e-commerce') }}</h2>
                        <p class="is-medium mb-30">{{ $t('service.index.e-commerce-text') }}</p>
                        <nuxt-link :to="localePath('services-e-commerce')" class="button is-e-commerce is-medium">
                            <span>{{ $t('service.index.learn-more') }}</span>
                            <span class="icon">
                                <i class="mdi mdi-arrow-right"></i>
                            </span>
                        </nuxt-link>
                    </div>
                </div>
                <div class="diptych-image pt-40 pb-40">
                    <img src="~assets/img/services/e-commerce/illustration.svg" alt="E-commerce">
                </div>
            </section>

            <section class="diptych is-border-bottom is-imageless-mobile">
                <div class="container">
                    <div class="diptych-body">
                        <div class="icon is-circle mb-20">
                            <i class="mdi mdi-server-network"></i>
                        </div>
                        <h2 class="title">{{ $t('service.index.custom-application') }}</h2>
                        <p class="is-medium mb-30">{{ $t('service.index.custom-application-text') }}</p>
                        <nuxt-link :to="localePath('services-custom-application')" class="button is-custom-application is-medium">
                            <span>{{ $t('service.index.learn-more') }}</span>
                            <span class="icon">
                                <i class="mdi mdi-arrow-right"></i>
                            </span>
                        </nuxt-link>
                    </div>
                </div>
                <div class="diptych-image pt-40 pb-40">
                    <img src="~assets/img/services/custom-application/illustration.svg" alt="Custom application">
                </div>
            </section>
        </div>
    </div>

</template>

<script>
export default {
    layout: 'default',
    nuxtI18n: {
        paths: {
            en: '/services',
            fr: '/services'
        }
    },
    head() {
        return {
            title: this.$t('pages.services.index')
        }
    }
}
</script>