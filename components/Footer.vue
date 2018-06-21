<template>
    <div>
        
        <cta></cta>

        <footer class="footer">
            <div class="container">
                <div class="columns">
                    <div class="column is-half">
                        <h2 class="footer-title">
                        {{ $t('pages.footer.about') }}
                        </h2>
                        <p>{{ $t('pages.footer.about-text') }}</p>
                    </div>
                    <div class="column is-one-quarter">
                        <h2 class="footer-title">
                        Services
                        </h2>
                        <nuxt-link :to="localePath('services')" class="footer-link">{{ $t('pages.footer.all-services') }}</nuxt-link>
                        <nuxt-link :to="localePath('services-process-optimisation')" class="footer-link">{{ $t('pages.services.process-optimisation') }}</nuxt-link>
                        <nuxt-link :to="localePath('services-e-commerce')" class="footer-link">{{ $t('pages.services.e-commerce') }}</nuxt-link>
                        <nuxt-link :to="localePath('services-custom-application')" class="footer-link">{{ $t('pages.services.custom-application') }}</nuxt-link>
                    </div>
                    <div class="column is-one-quarter">
                        <h2 class="footer-title">
                        Witify
                        </h2>
                        <nuxt-link :to="localePath('index')" class="footer-link">{{ $t('pages.index') }}</nuxt-link>
                        <nuxt-link :to="localePath('projects')" class="footer-link">{{ $t('pages.projects.index') }}</nuxt-link>
                        <nuxt-link :to="localePath('about')" class="footer-link">{{ $t('pages.about.title') }}</nuxt-link>
                        <nuxt-link :to="localePath('contact')" class="footer-link">{{ $t('pages.contact.title') }}</nuxt-link>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-left">
                        <img src="~assets/img/logo.svg" alt="Witify logo">
                        <span>Witify Inc. {{ $t('pages.footer.all-rights-reserved') }}</span>
                    </div>
                    <div class="footer-bottom-right">
                        <a href="https://www.facebook.com/witify/">
                            <div class="icon">
                                <i class="mdi mdi-facebook"></i>
                            </div>
                        </a>
                        <a href="https://twitter.com/WitifyInc">
                            <div class="icon">
                                <i class="mdi mdi-twitter"></i>
                            </div>
                        </a>
                        <a href="https://dribbble.com/francoislevesque">
                            <div class="icon">
                                <i class="mdi mdi-dribbble"></i>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/company/witify">
                            <div class="icon">
                                <i class="mdi mdi-linkedin"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>