<template>
    <div class="wrapper">
        <div class="page-about">
            
            <section class="hero is-main">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">{{ $t('pages.about.title') }}</h1>
                        <h2 class="subtitle" v-html="$t('pages.about.subtitle')"></h2>
                    </div>
                </div>
            </section>

            <section class="diptych is-border-bottom">
                <div class="container">
                    <div class="diptych-body pt-120 pb-120">
                        <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.excellence') }}</h2>
                        <p class="is-medium">{{ $t('pages.about.excellence-text') }}</p>
                    </div>
                </div>

                <div class="diptych-image is-cover">
                    <img src="~assets/img/about/excellence.jpg" alt="Witify seeks Excellence">
                </div>
            </section>

            <section class="diptych is-border-bottom is-right">
                <div class="container">
                    <div class="diptych-body pt-120 pb-120">
                        <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.collaboration') }}</h2>
                        <p class="is-medium">{{ $t('pages.about.collaboration-text') }}</p>
                    </div>
                </div>

                <div class="diptych-image is-cover">
                    <img src="~assets/img/about/collaboration.jpg" alt="Witify seeks collaboration">
                </div>
            </section>

            <section class="diptych">
                <div class="container">
                    <div class="diptych-body pt-120 pb-120">
                        <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.boldness') }}</h2>
                        <p class="is-medium">{{ $t('pages.about.boldness-text') }}</p>
                    </div>
                </div>

                <div class="diptych-image is-cover">
                    <img src="~assets/img/about/audacity.jpg" alt="Witify seeks boldness">
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
            en: '/about-us',
            fr: '/a-propos'
        }
    },
    head() {
        return {
            title: this.$t('pages.about.title')
        }
    }
}
</script>
