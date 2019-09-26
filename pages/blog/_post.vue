<template>
  <div class="wrapper">
    <section class="section post">
      <div class="container is-small">
        <img
          class="post-picture"
          :src="`${post.picture.url}?fm=jpg&fl=progressive&q=80&fit=scale&w=800`"
          :alt="post.title"
        >
        <h1 class="title">
          {{ post.title }}
        </h1>
        <div
          class="content"
          v-html="post.body" 
        />
      </div>
    </section>
  </div>
</template>

<script>

import { createClient, formatPosts } from "~/plugins/contentful.js";

const client = createClient();

export default {
	head() {
		return {
			title: this.post.title
		};
	},
	computed: {
		locale ({app}) {
			return this.$utils.currentLocaleISO();
		}
	},
	async asyncData ({ env, app, store }) {

		let locale = app.$utils.currentLocaleISO();

		let query = {
			content_type: env.CTF_BLOG_POST_TYPE_ID,
			locale: "*",
			limit: 1
		};

		query[`fields.slug.${locale}`] = app.context.params.post;
    
		let data = await client.getEntries(query);
    
		let slug = data.items[0].fields.slug;
    
		await store.dispatch("i18n/setRouteParams", {
			en: { post: slug["en-US"] },
			fr: { post: slug["fr-CA"] },
		});

		return {
			post: formatPosts(data, locale)[0]
		};
	}
};
</script>