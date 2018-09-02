<template>
    <div class="post" v-editable="blok">
        <img :src="$resizeImage(blok.picture, '800x600')" :alt="blok.title" class="post-picture">
        <h1 class="title">{{ blok.title }}</h1>
        <div class="content" v-html="body"></div>
        <hr class="mt-50 mb-50">
        <vue-disqus shortname="witify" :identifier="blok._uid" :url="`https://witify.io${$route.path}`"></vue-disqus>
    </div>
</template>

<script>
import marked from 'marked'

export default {
    props: ['blok'],
    computed: {
        body () {
            return marked(this.blok.text)
        }
    }
}
</script>