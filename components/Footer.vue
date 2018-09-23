<template>
    <div>

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
                        {{ $t('pages.home.title') }}
                        </h2>
                        <nuxt-link :to="localePath('index')" class="footer-link">{{ $t('pages.home.title') }}</nuxt-link>
                        <nuxt-link :to="localePath('about')" class="footer-link">{{ $t('pages.about.title') }}</nuxt-link>
                        <nuxt-link :to="localePath('contact')" class="footer-link">{{ $t('pages.contact.title') }}</nuxt-link>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-left">
                        <img src="~assets/img/logo-black.svg" :alt="`$(${$config.app.name}) logo`">
                        <span>{{ $config.app.name }} Inc. {{ $t('pages.footer.all-rights-reserved') }}</span>
                    </div>
                    <div class="footer-bottom-right">
                        <socials></socials>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
