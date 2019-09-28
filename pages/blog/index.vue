<template>
  <div class="wrapper">
    <section class="hero is-main">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ page.title }}
          </h1>
          <div
            class="content"
            v-html="page.text"
          />
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
import { createClient, formatPosts, renderer } from "~/plugins/contentful.js";

export default {
	head() {
		return this.$seo.head({
			title: this.page.seo_title,
			description: this.page.seo_description
		});
	},
	async asyncData ({env, app}) {
		const client = createClient();
    
		let posts = await client.getEntries({
			content_type: "post",
			order: "-sys.createdAt",
			locale: "*"
		});
    
		let page = await client.getEntries({
			content_type: "page.blog",
			locale: app.$utils.currentLocaleISO(),
			limit: 1
		});
    
		page = page.items[0];
    
		return {
			page: {
				seo_title: page.fields.seo_title || page.fields.title,
				seo_description: page.fields.seo_description || page.fields.title,
				title: page.fields.title,
				text: renderer(page.fields.text),
			},
			posts: formatPosts(posts, app.$utils.currentLocaleISO())
		};
	}
};
</script>