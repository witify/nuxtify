<template>
    <div class="page-custom-application">

        <section class="hero is-main is-large">
            <div class="hero-body">
                <div class="container">
                    <div class="icon is-circle">
                        <i class="mdi mdi-server-network"></i>
                    </div>
                    <h1 class="title">Custom applications</h1>
                    <h2 class="subtitle">Ut varius tincidunt libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.</h2>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    layout: 'wrapper',
    nuxtI18n: {
        paths: {
            en: '/custom-application',
            fr: '/application-personalisee'
        }
    }
}
</script>
