<template>

    <div class="wrapper">
        <div class="page-services">

            <section class="hero is-main">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">Our services.</h1>
                        <h2 class="subtitle">Ut varius tincidunt libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.</h2>
                    </div>
                </div>
            </section>

            <div class="container">

                <section class="section">
                    <div class="columns">
                        <div class="column">
                            <div class="v-center">
                                <div class="icon is-circle">
                                    <i class="mdi mdi-rocket"></i>
                                </div>
                                <h2 class="title">
                                    Internal process optimisation
                                </h2>
                                <p>
                                    Aenean massa. Sed aliquam ultrices mauris. Fusce fermentum. In auctor lobortis lacus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Nunc nulla. Vestibulum dapibus nunc ac augue.
                                </p>
                                <nuxt-link :to="localePath('services-process-optimisation')" class="button is-process-optimisation is-medium">
                                    <span>Learn more</span>
                                    <span class="icon">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </span>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="column">
                            <img src="~assets/img/services/process-optimisation/illustration.svg" alt="Process optimisation" class="illustration">
                        </div>
                    </div>
                </section>

                <section class="section">
                    <div class="columns">
                        <div class="column">
                            <img src="~assets/img/services/e-commerce/illustration.svg" alt="E-commerce" class="illustration">
                        </div>
                        <div class="column">
                            <div class="v-center">
                                <div class="icon is-circle">
                                    <i class="mdi mdi-store"></i>
                                </div>
                                <h2 class="title">
                                    E-commerce
                                </h2>
                                <p>
                                    Aenean massa. Sed aliquam ultrices mauris. Fusce fermentum. In auctor lobortis lacus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Nunc nulla. Vestibulum dapibus nunc ac augue.
                                </p>
                                <nuxt-link :to="localePath('services-e-commerce')" class="button is-e-commerce is-medium">
                                    <span>Learn more</span>
                                    <span class="icon">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <div class="columns">
                        <div class="column">
                            <div class="v-center">
                                <div class="icon is-circle">
                                    <i class="mdi mdi-server-network"></i>
                                </div>
                                <h2 class="title">
                                    Custom application
                                </h2>
                                <p>
                                    Aenean massa. Sed aliquam ultrices mauris. Fusce fermentum. In auctor lobortis lacus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Nunc nulla. Vestibulum dapibus nunc ac augue.
                                </p>
                                <nuxt-link :to="localePath('services-custom-application')" class="button is-custom-application is-medium">
                                    <span>Learn more</span>
                                    <span class="icon">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </span>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="column">
                            <img src="~assets/img/services/custom-application/illustration.svg" alt="Custom application" class="illustration">
                        </div>
                    </div>
                </section>

            </div>

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