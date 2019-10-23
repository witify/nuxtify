<template>
  <div>
    <section class="relative py-10 sm:py-15 bg-purple-800">
      <div class="container mx-auto">
        <h1 class="text-center text-white text-xl sm:text-3xl mb-5">
          {{ page.title }}
        </h1>
      </div>

      <div class="absolute w-full bottom-0 mb-5">
        <div
          v-scroll-to="'#content'"
          class="rounded-full p-2 shadow h-10 w-10 flex justify-center mx-auto bg-white"
        >
          <div class="icon">
            <i class="mdi mdi-chevron-down" />
          </div>
        </div>
      </div>
    </section>
    <section
      id="content"
      class="py-10 sm:py-20"
    >
      <div class="container mx-auto">
        <div
          v-html="page.text"
        />
      </div>
    </section>
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
