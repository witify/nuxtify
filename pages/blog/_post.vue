<template>
  <div class="wrapper">
    <section class="section post">
      <div class="container is-small">
        <img
          class="post-picture"
          :src="`${$squidex.asset(post.picture)}?width=800&Crop`"
          :alt="post.title"
        >
        <h1 class="title">
          {{ post.title }}
        </h1>
        <div
          class="content"
          v-html="post.text" 
        />
      </div>
    </section>
  </div>
</template>

<script>

export default {
	head() {
		return this.$seo.head({
			title: this.post.seo_title,
			description: this.post.seo_description
		});
	},
	async asyncData ({app, store}) {
		let data = await app.$squidex.post(app.context.params.post, app.i18n.locale);
		let post = app.$squidex.formatPost(data, app.i18n.locale);
    
		let slug = data.data.slug;
    
		let slugs = {};
		app.i18n.locales.map(locale => {
			slugs[locale.code] = { post: slug[locale.code] };
		});
    
		await store.dispatch("i18n/setRouteParams", slugs);
    
		return {
			post: post
		};
	}
};
</script>