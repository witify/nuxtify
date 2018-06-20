<template>
    <nuxt-link :to="localePath('services-' + slug)" class="service-card" :class="'is-' + slug">

        <div class="service-img"></div>

        <div class="service-body">
            <h3 class="title">
                <div class="icon">
                    <i class="mdi" :class="'mdi-' + icon"></i>
                </div>
                <span>{{ title }}</span>
            </h3>
        </div>

    </nuxt-link>
</template>

<script>
export default {
    props: ['title', 'subtitle', 'slug', 'icon']
}
</script>