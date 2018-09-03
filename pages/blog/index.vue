<template>
    <div class="wrapper">

        <section class="hero is-main">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ $t('pages.blog.title') }}</h1>
                    <h2 class="subtitle">{{ $t('pages.blog.subtitle') }}</h2>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">

                <div class="columns is-multiline">
                    <div class="column is-one-third" v-for="item in items">
                        <nuxt-link :to="`${localePath('blog')}/${item.system.codename}`">
                            <div class="card">
                                <div class="card-image">
                                    <img v-bind="$resizeImage(item.elements.picture.value[0].url, 400, 300)" alt="Placeholder image">
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <h2 class="title is-size-4">{{ item.elements.title.value }}</h2>
                                        <p v-if="item.elements.description.value">{{ item.elements.description.value }}</p>
                                    </div>
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import kentico from '@/plugins/kentico'

export default {
    layout: 'default',
    data () {
        return { items: [] }
    },
    asyncData ({ app }) {
        return kentico.send(app.i18n.locale, 'post')
            .then(response =>  {
                return {items: response.data.items}
            })
    },
    head() {
        return {
            title: this.$t('pages.blog.title')
        }
    }
}
</script>