<template>
  <div class="wrapper">
    <div class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <div class="icon mb-20">
            <i class="mdi mdi-alert-circle-outline is-size-1" />
          </div>
          <template v-if="error.statusCode === 404">
            <h1 class="title">
              Page not found
            </h1>
          </template>
          <template v-else>
            <h1 class="title">
              An error occurred
            </h1>
          </template>
          <nuxt-link
            to="/"
            class="button"
          >
            <span class="icon">
              <i class="mdi mdi-home" />
            </span>
            <span>Home page</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: ["error"],
	layout: "default",
	head() {
		return {
			title: this.error.message
		};
	}
};
</script>