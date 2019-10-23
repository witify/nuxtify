<template>
  <div class="wrapper">
    <div class="py-6 sm:py-10 text-center">
      <v-container>
        <h1 class="font-semibold text-xl sm:text-3xl">
          {{ page.title }}
        </h1>
        <div
          class="content"
          v-html="page.text"
        />
      </v-container>
    </div>
    
    <hr>

    <v-section>
      <v-container>
        <div class="sm:flex sm:-mx-5">
          <div
            v-for="post in posts"
            :key="post.id"
            class="w-full sm:w-1/2 md:w-1/3 mb-5 sm:px-5 sm:mb-0"
          >
            <nuxt-link
              :to="`${localePath('blog')}/${post.slug}`"
              class="block"
            >
              <div class="w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
                <img
                  class="w-full"
                  :src="`${$squidex.asset(post.picture)}?width=400&height=200&Crop`"
                  :alt="post.title"
                >
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">
                    {{ post.title }}
                  </div>
                  <p class="text-gray-700 text-base">
                    {{ $utils.limit(post.description, 120) }}
                  </p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>

        <div
          v-if="posts.length == 0"
          class="has-text-centered"
        >
          <span class="icon is-size-1 mb-30">
            <i class="mdi mdi-newspaper" />
          </span>
          <h2 class="title is-size-4 has-text-grey">
            {{ $t('pages.blog.empty') }}
          </h2>
        </div>
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
			page: await app.$squidex.blog(app.i18n.locale),
			posts: await app.$squidex.posts(app.i18n.locale)
		};
	}
};
</script>