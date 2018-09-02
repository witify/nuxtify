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
                    <div class="column is-one-quarter" v-for="story in stories">
                        <nuxt-link :to="story.full_slug">
                            <div class="card">
                                <div class="card-image">
                                    <img :src="$resizeImage(story.content.picture, '400x300')" alt="Placeholder image">
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <h2 class="title is-size-4">{{ story.content.title }}</h2>
                                        <p>
                                            {{ $limit(story.content.text, 100) }}
                                        </p>
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
export default {
    layout: 'default',
    mounted () {
        this.$storyblok.init()
        this.$storyblok.on('change', () => {
            location.reload(true)
        })
        this.$storyblok.on('published', () => {
            location.reload(true)
        })
    },
    data () {
        return { story: { content: {} } }
    },
    asyncData (context) {
        // Check if we are in the editor mode
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
        // Load the JSON from the API
        return context.app.$storyapi.get(`cdn/stories`, {
            starts_with: 'blog',
            version: version
        }).then((res) => {
            return res.data
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
        })
    },
    head() {
        return {
            title: this.$t('pages.blog.title')
        }
    }
}
</script>