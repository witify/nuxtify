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
import { createClient, renderer } from "~/plugins/contentful";

export default {
	head() {
		return {
			title: this.page.seo_title
		};
	},
	async asyncData ({env, app}) {
		const client = createClient();
    
		let data = await client.getEntries({
			content_type: "page.about",
			locale: app.$utils.currentLocaleISO(),
			limit: 1
		});
    
		let page = data.items[0];
    
		return {
			page: {
				seo_title: page.fields.seo_title || page.fields.title,
				title: page.fields.title,
				text: renderer(page.fields.text),
			}
		};
	}
};
</script>
