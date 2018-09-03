<template>
    <div class="wrapper">
        <section class="section post">
            <div class="container is-sm">
                <img v-bind="$resizeImage(post.picture.value[0].url, 800, 600)" :alt="post.title.value" class="post-picture">
                <h1 class="title">{{ post.title.value }}</h1>
                <div class="content" v-html="post.body.value"></div>
                <hr class="mt-50 mb-50">
                <vue-disqus shortname="witify" :identifier="post.slug.value" :url="`https://witify.io${$route.path}`"></vue-disqus>
            </div>
        </section>
    </div>
</template>

<script>
import kentico from '@/plugins/kentico'

export default {
    layout: 'default',
    data () {
        return { post: {} }
    },
    asyncData ({ app }) {
         return kentico.send(app.i18n.locale, 'post', app.context.params.post)
            .then(response =>  {
                if (response.data.item) {
                    return {post: response.data.item.elements}
                } else {
                    app.context.error({ statusCode: 404, message: 'Post not found'})
                }
            })
    },
    head() {
        return {
            title: this.post.title.value
        }
    }
}
</script>