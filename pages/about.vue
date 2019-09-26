<template>
  <div class="wrapper">
    <div class="page-about">
      <section class="hero has-text-centered is-medium is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              {{ $t('pages.about.title') }}
            </h1>
            <h2
              class="subtitle"
              v-html="$t('pages.about.subtitle')"
            />
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
    </div>
  </div>
</template>

<script>
export default {
	head() {
		return {
			title: this.$t("pages.about.title")
		};
	}
};
</script>
