<template>
    <nuxt-link :to="localePath('services-' + slug)" class="button is-medium is-rounded" :class="'is-' + slug">

        <div class="icon">
            <i class="mdi" :class="'mdi-' + icon"></i>
        </div>
        <span>{{ title }}</span>

    </nuxt-link>
</template>

<script>
export default {
    props: ['title', 'subtitle', 'slug', 'icon']
}
</script>