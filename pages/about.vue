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
                            <p class="is-medium">{{ $t('pages.about.excellence-text') }}</p>
                            <br>
                        </div>
                        <div class="column">
                            <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.collaboration') }}</h2>
                            <p class="is-medium">{{ $t('pages.about.collaboration-text') }}</p>
                            <br>
                        </div>
                        <div class="column">
                            <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.boldness') }}</h2>
                            <p class="is-medium">{{ $t('pages.about.boldness-text') }}</p>
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
            title: this.$t('pages.about.title')
        }
    }
}
</script>
