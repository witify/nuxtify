<template>
    <div class="page-about">

        <div class="hero is-main is-fullheight is-dark is-center">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-spaced">{{ $t('pages.about.title') }}</h1>
                    <h2 class="subtitle" v-html="$t('pages.about.subtitle')"></h2>
                </div>
            </div>

            <div class="scroll-to" v-scroll-to="'#content'">
                <div class="icon">
                    <i class="mdi mdi-chevron-down"></i>
                </div>
            </div>
        </div>

        <section id="content" class="section is-excellence">
            <div class="container">

                <div class="columns">
                    <div class="column is-half">

                        <div class="media is-aligned mb-40">
                            <div class="media-left">
                                <div class="icon is-circle has-text-primary">
                                    <i class="mdi mdi-trophy"></i>
                                </div>
                            </div>
                            <div class="media-content">
                                <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.excellence') }}</h2>
                            </div>
                        </div>

                        <p class="is-lead mb-20">{{ $t('pages.about.excellence-text-1') }}</p>
                        <p class="is-medium">{{ $t('pages.about.excellence-text-2') }}</p>

                        <div class="mt-50">
                            <h2 class="title is-size-3 has-text-weight-normal" v-html="$t('pages.about.products-super')"></h2>
                            <p class="is-medium mb-50">{{ $t('pages.about.products-super-text') }}</p>

                            <h3 class="title is-size-5 mb-5">{{ $t('pages.about.secure') }}</h3>
                            <p class="is-medium mb-30" v-html="$t('pages.about.secure-text')"></p>

                            <h3 class="title is-size-5 mb-5">{{ $t('pages.about.usable') }}</h3> 
                            <p class="is-medium mb-30" v-html="$t('pages.about.usable-text')"></p>

                            <h3 class="title is-size-5 mb-5">{{ $t('pages.about.powerful') }}</h3>
                            <p class="is-medium mb-30" v-html="$t('pages.about.powerful-text')"></p>
                            
                            <h3 class="title is-size-5 mb-5">{{ $t('pages.about.efficient') }}</h3>
                            <p class="is-medium mb-30" v-html="$t('pages.about.efficient-text')"></p>
                                  
                            <h3 class="title is-size-5 mb-5">{{ $t('pages.about.reliable') }}</h3>
                            <p class="is-medium mb-30" v-html="$t('pages.about.reliable-text')"></p>

                        </div>

                    </div>
                </div>
                
            </div>
        </section>

        <section class="section is-grey">
            <div class="container">

                <div class="media is-aligned mb-40">
                    <div class="media-left">
                        <div class="icon is-circle is-grey has-text-primary">
                            <i class="mdi mdi-account-group"></i>
                        </div>
                    </div>
                    <div class="media-content">
                        <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.collaboration') }}</h2>
                    </div>
                </div>

                <div class="columns is-variable is-8">
                    <div class="column">
                        <p class="is-lead mb-20">{{ $t('pages.about.collaboration-text-1') }}</p>
                        <p class="is-medium">{{ $t('pages.about.collaboration-text-2') }}</p>
                    </div>
                    <div class="column">
                        <p class="is-size-4 is-italic">"{{ $t('pages.about.collaboration-quote-text') }}"</p>
                        <div class="has-text-right-tablet mt-20">
                            <p class="is-size-3 has-text-weight-semibold" style="line-height: 1">John Doe</p>
                            <span>{{ $t('pages.about.collaboration-quote-author-role') }}</span>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <section class="diptych">
            <div class="container">
                <div class="diptych-body">
                    <div class="media is-aligned mb-40">
                        <div class="media-left">
                            <div class="icon is-circle has-text-primary">
                                <i class="mdi mdi-fire"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.boldness') }}</h2>
                        </div>
                    </div>

                    <p class="is-lead mb-20">{{ $t('pages.about.boldness-text-1') }}</p>
                    <p class="is-medium">{{ $t('pages.about.boldness-text-2') }}</p>

                </div>
            </div>
            <div class="diptych-image">
                <img src="~assets/img/projects/start-alberta/mobile-ui.jpg" alt="Boldness in Witify's projects">
            </div>
        </section>

        <cta></cta>
        
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
