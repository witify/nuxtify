<template>
    <div class="page-custom-application">

        <section class="hero is-main is-half is-bold is-custom-application is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="icon is-circle is-dark">
                        <i class="mdi mdi-server-network"></i>
                    </div>
                    <h1 class="title">Custom applications</h1>
                    <h2 class="subtitle">Ut varius tincidunt libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.</h2>
                </div>
            </div>

            <div class="scroll-to" v-scroll-to="'#content'">
                <div class="icon">
                    <i class="mdi mdi-chevron-down"></i>
                </div>
            </div>
        </section>

        <section id="content" class="section">
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
            fr: '/application-sur-mesure'
        }
    },
    head() {
        return {
            title: this.$t('pages.services.custom-application')
        }
    }
}
</script>
