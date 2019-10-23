<template>
  <div>
    <v-hero class="relative bg-purple-800">
      <v-container size="small">
        <h1 class="text-center font-semibold leading-tight text-white text-xl sm:text-3xl">
          {{ page.title }}
        </h1>
      </v-container>

      <div class="absolute hidden sm:block w-full bottom-0 mb-5">
        <div
          v-scroll-to="'#content'"
          class="rounded-full p-2 shadow h-10 w-10 flex justify-center mx-auto bg-white"
        >
          <div class="icon">
            <i class="mdi mdi-chevron-down" />
          </div>
        </div>
      </div>
    </v-hero>
    <v-section id="content">
      <v-container size="small">
        <div
          v-html="page.text"
        />
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
			page: await app.$squidex.homepage(app.i18n.locale)
		};
	}
};
</script>
