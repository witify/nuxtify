<template>
  <div class="page-home">
    <section class="hero has-text-centered is-medium is-primary is-bold is-top">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ page.title }}
          </h1>
        </div>
      </div>

      <div
        v-scroll-to="'#content'"
        class="scroll-to"
      >
        <div class="icon">
          <i class="mdi mdi-chevron-down" />
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
</template>

<script>

export default {
	head() {
		return {
			title: this.page.seo_title
		};
	},
	async asyncData ({env, app}) {   
		return {
			page: await app.$squidex.homepage(app.i18n.locale)
		};
	}
};
</script>
