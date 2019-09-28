<template>
  <div class="wrapper">
    <section class="hero is-main">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ page.title }}
          </h1>
          <div
            class="content"
            v-html="page.text"
          />
        </div>
      </div>
    </section>
    
    <hr>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div
            v-for="post in posts"
            :key="post.id"
            class="column is-one-third"
          >
            <nuxt-link :to="`${localePath('blog')}/${post.slug}`">
              <div class="card">
                <div class="card-image">
                  <img
                    :src="$squidex.asset(post.picture)"
                    :alt="post.title"
                  >
                </div>
                <div class="card-content">
                  <div class="content">
                    <h2 class="title is-size-6">
                      {{ post.title }}
                    </h2>
                    <p
                      v-if="post.description"
                      class="subtitle is-size-6 has-text-grey"
                    >
                      {{ $utils.limit(post.description, 100) }}
                    </p>
                  </div>
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
			page: await app.$squidex.blog(app.i18n.locale),
			posts: await app.$squidex.posts(app.i18n.locale)
		};
	}
};
</script>