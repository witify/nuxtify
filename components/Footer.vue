<template>
    <div>
        
        <cta></cta>

        <footer class="footer">
            <div class="container">
                <div class="columns">
                    <div class="column is-half">
                        <h2 class="footer-title">
                        About
                        </h2>
                        <p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.</p>
                    </div>
                    <div class="column is-one-quarter">
                        <h2 class="footer-title">
                        Services
                        </h2>
                        <nuxt-link :to="localePath('services')" class="footer-link">All services</nuxt-link>
                        <nuxt-link :to="localePath('services-process-optimisation')" class="footer-link">Process optimisation</nuxt-link>
                        <nuxt-link :to="localePath('services-e-commerce')" class="footer-link">E-commerce</nuxt-link>
                        <nuxt-link :to="localePath('services-custom-application')" class="footer-link">Custom application</nuxt-link>
                    </div>
                    <div class="column is-one-quarter">
                        <h2 class="footer-title">
                        Witify
                        </h2>
                        <nuxt-link :to="localePath('index')" class="footer-link">Home</nuxt-link>
                        <nuxt-link :to="localePath('projects')" class="footer-link">Projects</nuxt-link>
                        <nuxt-link :to="localePath('about')" class="footer-link">About us</nuxt-link>
                        <nuxt-link :to="localePath('contact')" class="footer-link">Contact us</nuxt-link>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-left">
                        <img src="~assets/img/logo.svg" alt="Witify logo">
                        <span>Witify Inc. All rights reserved.</span>
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