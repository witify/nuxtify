<template>
  <nav
    class="fixed z-10 w-full"
    :class="navbarClass"
    role="navigation"
  >
    <div class="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
      <div class="flex items-center h-16 md:h-20 mr-4 md:mr-8">
        <nuxt-link
          :to="localePath('index')"
          rel="home"
        >
          <img
            v-show="!transparent || active"
            :src="globals.logo"
            :alt="$config.app.name + ' logo'"
            height="40"
            width="40"
          >
          <img
            v-show="!(!transparent || active)"
            :src="globals.logoWhite"
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
          class="flex items-center"
          type="button"
        >
          <svg
            class="h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              class="fill-current"
              :class="pathClass"
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            />
          </svg>
        </button>
      </div>
      <div
        class="w-full md:visible md:w-auto md:flex-grow md:flex md:items-center"
        :class="{'hidden': !active}"
      >
        <ul class="flex flex-col -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
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
        <ul class="flex flex-col my-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:my-0 md:pt-0 md:border-0">
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
		},
		navbarClass () {
			if (this.transparent && !this.active) {
				return "bg-transparent";
			}
			return "bg-white shadow";
		},
		pathClass () {
			if (this.transparent && !this.active) {
				return "text-white";
			}
			return "text-gray-900";
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
		window.addEventListener("resize", this.handleResize);
		this.handleScroll();
	},
	destroyed () {
		window.removeEventListener("scroll", this.handleScroll);
		window.removeEventListener("resize", this.handleResize);
	},
	methods: {
		isTransparent() {
			if (this.$nuxt.$route.name) {
				return this.$nuxt.$route.name.includes("index__");
			}
			return false;
		},
		toggle () {
			this.active = !this.active;
		},
		handleScroll (event) {
			let top = window.pageYOffset;
			this.transparent = this.isTransparent() && top < 10;
		},
		handleResize (event) {
			if (window.innerWidth >= 768) {
				this.active = false;
			}
		}
	}
};
</script>
