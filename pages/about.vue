<template>
  <div class="wrapper">
    <div class="py-10">
      <div class="container is-small">
        <h1 class="h1 text-center">
          {{ page.title }}
        </h1>
      </div>
    </div>
    <hr>
    <div class="section">
      <div class="container is-small">
        <div
          class="content"
          v-html="page.text"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
	head() {
		return this.$seo.head({
			title: this.page.seo_title,
			description: this.page.seo_description
		});
	},
	async asyncData ({env, app}) {   
		return {
			page: await app.$squidex.about(app.i18n.locale)
		};
	}
};
</script>
