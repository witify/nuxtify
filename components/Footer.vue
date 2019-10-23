<template>
  <footer class="bg-gray-200 py-10 sm:pb-15 sm:pt-24">
    <v-container class="text-center sm:text-left">
      <div class="overflow-hidden">
        <div class="sm:flex sm:-mx-10">
          <div class="mb-6 sm:w-1/2 sm:px-10">
            <h2 class="font-bold mb-4">
              {{ $t('footer.about') }}
            </h2>
            <p>{{ globals.footerText }}</p>
          </div>
          <div class="mb-6 sm:w-1/4 sm:px-10">
            <h2 class="font-bold mb-4">
              {{ $t('footer.pages') }}
            </h2>
            <nuxt-link
              :to="localePath('index')"
              class="block mb-1"
            >
              {{ $t('nav.home') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('about')"
              class="block mb-1"
            >
              {{ $t('nav.about') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('blog')"
              class="block mb-1"
            >
              {{ $t('nav.blog') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('contact')"
              class="block mb-1"
            >
              {{ $t('nav.contact') }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="mt-16 sm:flex sm:justify-between">
        <div class="flex justify-center items-center">
          <img
            :src="globals.logoBlack"
            :alt="`$(${$config.app.name}) logo`"
            class="h-6 w-6 mr-3"
          >
          <span class="text-sm">{{ $config.app.name }}. {{ $t('footer.all_rights_reserved') }}</span>
        </div>
        <div class="mt-5 sm:mt-0">
          <socials />
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script>
export default {
	computed: {
		globals () {
			return this.$store.getters.globals(this.$i18n.locale);
		}
	},
};
</script>