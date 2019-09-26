<template>
  <nav
    class="navbar is-fixed-top"
    :class="{'is-transparent': transparent, 'is-active': active}"
  >
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item"
          :to="localePath('index')"
        >
          <img
            v-show="!transparent || active"
            src="~assets/img/logo.svg"
            :alt="$config.app.name + ' logo'"
          >
          <img
            v-show="transparent && !active"
            src="~assets/img/logo-white.svg"
            :alt="$config.app.name + ' logo'"
          >
        </nuxt-link>
        <div
          class="navbar-burger"
          @click="toggle()"
        >
          <div class="icon">
            <i
              v-if="!active"
              class="mdi mdi-menu"
            />
            <i
              v-else
              class="mdi mdi-close" 
            />
          </div>
        </div>
      </div>

      <div
        class="navbar-menu"
        :class="{'is-active': active}"
      >
        <div class="navbar-start">
          <nuxt-link
            :to="localePath('index')"
            class="navbar-item is-bold"
          >
            {{ $t('pages.home.title') }}
          </nuxt-link>

          <nuxt-link
            :to="localePath('about')"
            class="navbar-item is-bold"
          >
            {{ $t('pages.about.title') }}
          </nuxt-link>

          <nuxt-link
            :to="localePath('blog')"
            class="navbar-item is-bold"
          >
            {{ $t('pages.blog.title') }}
          </nuxt-link>

          <nuxt-link
            :to="localePath('contact')"
            class="navbar-item is-bold"
          >
            {{ $t('pages.contact.index') }}
          </nuxt-link>
        </div>

        <div class="navbar-end">
          <nuxt-link 
            v-for="locale in $i18n.locales"
            v-show="locale.code !== $i18n.locale"
            :key="locale.code"
            class="navbar-item"
            :to="switchLocalePath(locale.code)"
          >
            {{ locale.name }}
          </nuxt-link>

          <div class="navbar-bottom is-hidden-desktop">
            <socials />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
	data () {
		return {
			active: false,
			transparent: true
		};
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
				return this.$nuxt.$route.name.includes("index__");
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
