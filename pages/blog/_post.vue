<template>
  <div class="wrapper">
    <v-section class="pt-5 sm:pt-10">
      <v-container size="small">
        <img
          class="mb-5 sm:mb-10"
          :src="`${$squidex.asset(post.picture)}?width=800&Crop`"
          :alt="post.title"
        >
        <h1 class="font-semibold text-xl sm:text-3xl mb-2 sm:mb-5">
          {{ post.title }}
        </h1>
        <div
          class="content"
          v-html="post.text" 
        />
      </v-container>
    </v-section>
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