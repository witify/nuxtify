<template>
  <div class="wrapper">
    <section class="hero is-main">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $t('pages.blog.title') }}
          </h1>
          <h2 class="subtitle">
            {{ $t('pages.blog.subtitle') }}
          </h2>
        </div>
      </div>
    </section>
    
    <hr>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div
            v-for="post in posts"
            :key="post.id"
            class="column is-one-third"
          >
            <nuxt-link :to="`${localePath('blog')}/${post.slug}`">
              <div class="card">
                <div class="card-image">
                  <img
                    :src="`${post.picture.url}?fm=jpg&q=80&fit=fill&w=400&h=200`"
                    :alt="post.title"
                  >
                </div>
                <div class="card-content">
                  <div class="content">
                    <h2 class="title is-size-6">
                      {{ post.title }}
                    </h2>
                    <p
                      v-if="post.description"
                      class="subtitle is-size-6 has-text-grey"
                    >
                      {{ $utils.limit(post.description, 100) }}
                    </p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>

        <div
          v-if="posts.length == 0"
          class="has-text-centered"
        >
          <span class="icon is-size-1 mb-30">
            <i class="mdi mdi-newspaper" />
          </span>
          <h2 class="title is-size-4 has-text-grey">
            {{ $t('pages.blog.empty') }}
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { createClient, formatPosts } from "~/plugins/contentful.js";

export default {
	head() {
		return {
			title: this.$t("pages.blog.title")
		};
	},
	async asyncData ({env, app}) {
		const client = createClient();
    
		let data = await client.getEntries({
			content_type: env.CTF_BLOG_POST_TYPE_ID,
			order: "-sys.createdAt",
			locale: "*"
		});
    
    
		return {
			posts: formatPosts(data, app.$utils.currentLocaleISO())
		};
	}
};
</script>