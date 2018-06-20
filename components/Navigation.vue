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

                    <nuxt-link :to="localePath('projects')" class="navbar-item is-uppercase">
                        Projects
                    </nuxt-link>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <nuxt-link :to="localePath('services')" class="navbar-link is-uppercase">
                            Services
                        </nuxt-link>

                        <div class="navbar-dropdown is-boxed is-services">
                            <div class="navbar-item">
                                <nuxt-link :to="localePath('services-process-optimisation')" class="navbar-media">
                                    <span class="icon is-process-optimisation">
                                        <i class="mdi mdi-rocket"></i>
                                    </span>
                                    <span>
                                        <strong>Process optimisation</strong>
                                        <span>Optimise your business model</span>
                                    </span>
                                </nuxt-link>
                            </div>
                            <div class="navbar-item">
                                <nuxt-link :to="localePath('services-e-commerce')" class="navbar-media">
                                    <span class="icon is-e-commerce">
                                        <i class="mdi mdi-store"></i>
                                    </span>
                                    <span>
                                        <strong>E-commerce</strong>
                                        <span>The best e-commerce solutions</span>
                                    </span>
                                </nuxt-link>
                            </div>
                            <div class="navbar-item">
                                <nuxt-link :to="localePath('services-custom-application')" class="navbar-media">
                                    <span class="icon is-custom-application">
                                        <i class="mdi mdi-server-network"></i>
                                    </span>
                                    <span>
                                        <strong>Custom applications</strong>
                                        <span>High quality custom platforms</span>
                                    </span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>

                    <nuxt-link :to="localePath('about')" class="navbar-item is-uppercase">
                        About
                    </nuxt-link>

                    <nuxt-link :to="localePath('contact')" class="navbar-item is-uppercase">
                        Contact
                    </nuxt-link>

                </div>

                <div class="navbar-end">
                    <nuxt-link 
                    class="navbar-item"
                    v-for="locale in $i18n.locales"
                    v-if="locale.code !== $i18n.locale"
                    :key="locale.code"
                    :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
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
            return this.$nuxt.$route.name.includes('index__') ||
                this.$nuxt.$route.name.includes('services-process-optimisation__') ||
                this.$nuxt.$route.name.includes('services-e-commerce__') ||
                this.$nuxt.$route.name.includes('services-custom-application__')
        },
        toggle () {
            this.active = !this.active
        },
        handleScroll (event) {
            let top = window.pageYOffset
            this.transparent = this.isTransparent() && top < 100
        }
    }
}
</script>
