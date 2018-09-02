<template>
    <div class="wrapper">
        <section class="section">
            <div class="container is-sm">
                <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
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
        return context.app.$storyapi.get(`cdn/stories/blog/${context.params.post}`, {
            version: version
        }).then((res) => {
            return res.data
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
        })
    },
    head() {
        return {
            title: this.story.content.title
        }
    }
}
</script>