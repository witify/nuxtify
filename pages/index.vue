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

import { createClient, renderer } from "~/plugins/contentful";

export default {
	head() {
		return this.$seo.head({
			title: this.page.seo_title,
			description: this.page.seo_description
		});
	},
	async asyncData ({env, app}) {
		const client = createClient();
    
		let data = await client.getEntries({
			content_type: "page.home",
			locale: app.$utils.currentLocaleISO(),
			limit: 1
		});
    
		return {
			page: {
				seo_title: data.items[0].fields.seo_title || data.items[0].fields.title,
				seo_description: data.items[0].fields.seo_description || data.items[0].fields.title,
				title: data.items[0].fields.title,
				text: renderer(data.items[0].fields.text),
			}
		};
	}
};
</script>
