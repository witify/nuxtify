<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <h2 class="footer-title">
              {{ $t('pages.footer.about') }}
            </h2>
            <p>{{ globals.footerText }}</p>
          </div>
          <div class="column is-one-quarter">
            <h2 class="footer-title">
              {{ $t('nav.home') }}
            </h2>
            <nuxt-link
              :to="localePath('index')"
              class="footer-link"
            >
              {{ $t('nav.home') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('about')"
              class="footer-link"
            >
              {{ $t('nav.about') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('blog')"
              class="footer-link"
            >
              {{ $t('nav.blog') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('contact')"
              class="footer-link"
            >
              {{ $t('nav.contact') }}
            </nuxt-link>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <img
              src="~assets/img/logo-black.svg"
              :alt="`$(${$config.app.name}) logo`"
            >
            <span>{{ $config.app.name }}. {{ $t('pages.footer.all_rights_reserved') }}</span>
          </div>
          <div class="footer-bottom-right">
            <socials />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
	computed: {
		globals () {
			return this.$store.getters.globals(this.$utils.currentLocaleISO());
		}
	},
};
</script>