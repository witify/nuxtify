<template>
  <div>
    <div class="relative pt-20 pb-10 sm:py-32 bg-purple-800">
      <div class="container is-small">
        <h1 class="h1 text-center text-white">
          {{ page.title }}
        </h1>
      </div>

      <div class="absolute hidden sm:block w-full bottom-0 mb-5">
        <div
          v-scroll-to="'#content'"
          class="rounded-full p-2 shadow h-10 w-10 flex justify-center mx-auto bg-white"
        >
          <svg
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div
      id="content"
      class="section"
    >
      <div class="container is-small">
        <div
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
			page: await app.$squidex.homepage(app.i18n.locale)
		};
	}
};
</script>
