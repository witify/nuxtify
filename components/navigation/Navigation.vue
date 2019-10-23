<template>
  <nav
    class="bg-white shadow"
    role="navigation"
  >
    <div class="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
      <div class="mr-4 md:mr-8">
        <nuxt-link
          :to="localePath('index')"
          rel="home"
        >
          <img
            :src="globals.logo"
            :alt="$config.app.name + ' logo'"
            height="40"
            width="40"
          >
        </nuxt-link>
      </div>
      <div
        class="ml-auto md:hidden"
        @click="toggle()"
      >
        <button
          class="flex items-center px-3 py-2 border rounded"
          type="button"
        >
          <svg
            class="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="w-full md:visible md:w-auto md:flex-grow md:flex md:items-center"
        :class="{'hidden': !active}"
      >
        <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
          <v-link
            :to="localePath('index')"
            :label="$t('nav.home')"
          />
          <v-link
            :to="localePath('about')"
            :label="$t('nav.about')"
          />
          <v-link
            :to="localePath('blog')" 
            :label="$t('nav.blog')"
          />
          <v-link
            :to="localePath('contact')"
            :label="$t('nav.contact')"
          />
        </ul>
        <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
          <v-link
            v-for="locale in $i18n.locales"
            v-show="locale.code !== $i18n.locale"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            :label="locale.name"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Link from "./Link.vue";
export default {
	components: {
		"v-link": Link
	},
	data () {
		return {
			active: false,
			transparent: true
		};
	},
	computed: {
		globals () {
			return this.$store.getters.globals(this.$i18n.locale);
		}
	},
	watch: {
		"$nuxt.$route.name"() {
			this.handleScroll();
			this.active = false;
		}
	},
	mounted () {
		window.addEventListener("scroll", this.handleScroll);
		this.handleScroll();
	},
	destroyed () {
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		isTransparent() {
			if (this.$nuxt.$route.name) {
				return this.$nuxt.$route.name.includes("not");
			}
			return false;
		},
		toggle () {
			this.active = !this.active;
		},
		handleScroll (event) {
			let top = window.pageYOffset;
			this.transparent = this.isTransparent() && top < 30;
		}
	}
};
</script>
