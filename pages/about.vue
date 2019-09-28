<template>
  <div class="wrapper">
    <div class="page-about">
      <section class="hero has-text-centered is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              {{ page.title }}
            </h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container is-small">
          <div
            class="content"
            v-html="page.text"
          />
        </div>
      </section>
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
