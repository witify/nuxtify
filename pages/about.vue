<template>

    <section class="hero is-main">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">About</h1>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    layout: 'wrapper',
    nuxtI18n: {
        paths: {
            en: '/about-us',
            fr: '/a-propos'
        }
    }
}
</script>
