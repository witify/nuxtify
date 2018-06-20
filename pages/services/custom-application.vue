<template>
    <div class="page-custom-application">

        <section class="hero is-main is-bold is-custom-application is-large">
            <div class="hero-body">
                <div class="container">
                    <div class="icon is-circle is-dark">
                        <i class="mdi mdi-server-network"></i>
                    </div>
                    <h1 class="title">Custom applications</h1>
                    <h2 class="subtitle">Ut varius tincidunt libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.</h2>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
            </div>
        </section>

    </div>
</template>

<script>
export default {
    layout: 'default',
    nuxtI18n: {
        paths: {
            en: '/custom-application',
            fr: '/application-personalisee'
        }
    },
    head() {
        return {
            title: this.$t('pages.services.custom-application')
        }
    }
}
</script>
