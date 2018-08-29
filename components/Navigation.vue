<template>

    <nav class="navbar is-fixed-top" :class="{'is-transparent': transparent, 'is-active': active}">
        <div class="container">
            <div class="navbar-brand">
                <nuxt-link class="navbar-item" :to="localePath('index')">
                    <img v-show="!transparent || active" src="~assets/img/logo.svg" alt="Witify logo">
                    <img v-show="transparent && !active" src="~assets/img/logo-white.svg" alt="Witify logo">
                </nuxt-link>
                <div @click="toggle()" class="navbar-burger">
                    <div class="icon">
                        <i v-if="!active" class="mdi mdi-menu"></i>
                        <i v-else class="mdi mdi-close"></i>
                    </div>
                </div>
            </div>

            <div class="navbar-menu" :class="{'is-active': active}">

                <div class="navbar-start">

                    <nuxt-link :to="localePath('projects')" class="navbar-item is-bold">
                        {{ $t('pages.projects.index') }}
                    </nuxt-link>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <nuxt-link :to="localePath('services')" class="navbar-link is-bold">
                            {{ $t('pages.services.index') }}
                        </nuxt-link>

                        <div class="navbar-dropdown is-boxed is-services">
                            <div class="navbar-item">
                                <nuxt-link :to="localePath('services-process-optimisation')" class="navbar-media">
                                    <span class="icon has-text-process-optimisation">
                                        <i class="mdi mdi-rocket"></i>
                                    </span>
                                    <span>
                                        <strong>{{ $t('pages.services.process-optimisation') }}</strong>
                                        <span>{{ $t('pages.services.process-optimisation-subtext') }}</span>
                                    </span>
                                </nuxt-link>
                            </div>
                            <div class="navbar-item">
                                <nuxt-link :to="localePath('services-e-commerce')" class="navbar-media">
                                    <span class="icon has-text-e-commerce">
                                        <i class="mdi mdi-store"></i>
                                    </span>
                                    <span>
                                        <strong>{{ $t('pages.services.e-commerce') }}</strong>
                                        <span>{{ $t('pages.services.e-commerce-subtext') }}</span>
                                    </span>
                                </nuxt-link>
                            </div>
                            <div class="navbar-item">
                                <nuxt-link :to="localePath('services-custom-application')" class="navbar-media">
                                    <span class="icon has-text-custom-application">
                                        <i class="mdi mdi-server-network"></i>
                                    </span>
                                    <span>
                                        <strong>{{ $t('pages.services.custom-application') }}</strong>
                                        <span>{{ $t('pages.services.custom-application-subtext') }}</span>
                                    </span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>

                    <nuxt-link :to="localePath('about')" class="navbar-item is-bold">
                        {{ $t('pages.about.title') }}
                    </nuxt-link>

                    <nuxt-link :to="localePath('contact')" class="navbar-item is-bold">
                        {{ $t('pages.contact.index') }}
                    </nuxt-link>

                </div>

                <div class="navbar-end">
                    <nuxt-link 
                    class="navbar-item"
                    v-for="locale in $i18n.locales"
                    v-if="locale.code !== $i18n.locale"
                    :key="locale.code"
                    :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>

                    <div class="navbar-bottom is-hidden-desktop">
                        <socials></socials>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<script>
export default {
    data () {
        return {
            active: false,
            transparent: this.isTransparent()
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        isTransparent() {
            if (this.$nuxt.$route.name) {
                return this.$nuxt.$route.name.includes('index__') ||
                    this.$nuxt.$route.name.includes('projects-') ||
                    this.$nuxt.$route.name.includes('about') ||
                    this.$nuxt.$route.name.includes('services')
            }
            return false
        },
        toggle () {
            this.active = !this.active
        },
        handleScroll (event) {
            let top = window.pageYOffset
            this.transparent = this.isTransparent() && top < 30
        }
    },
    watch: {
        '$nuxt.$route.name'() {
            this.handleScroll()
            this.active = false
        }
    }
}
</script>
