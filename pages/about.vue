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

            <section class="section is-medium">
                <div class="container">
                    <div class="columns is-variable is-7">
                        <div class="column">
                            <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.excellence') }}</h2>
                            <h3 class="subtitle is-size-5 has-text-grey">{{ $t('pages.about.excellence-text') }}</h3>
                            <br>
                        </div>
                        <div class="column">
                            <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.collaboration') }}</h2>
                            <h3 class="subtitle is-size-5 has-text-grey">{{ $t('pages.about.collaboration-text') }}</h3>
                            <br>
                        </div>
                        <div class="column">
                            <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.boldness') }}</h2>
                            <h3 class="subtitle is-size-5 has-text-grey">{{ $t('pages.about.boldness-text') }}</h3>
                            <br>
                        </div>
                    </div>
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
            title: this.$t('pages.about')
        }
    }
}
</script>
