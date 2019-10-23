<template>
  <div class="wrapper">
    <div class="py-10">
      <v-container size="small">
        <h1 class="title text-center font-semibold text-xl sm:text-3xl">
          {{ page.title }}
        </h1>
      </v-container>
    </div>
    <hr>
    <v-section class="section">
      <v-container size="small">
        <div v-html="page.text" />
      </v-container>
    </v-section>
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
