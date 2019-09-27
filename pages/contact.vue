<template>
  <div class="wrapper">
    <div class="page-contact">
      <section class="hero has-border-bottom">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              {{ $t('pages.contact.title') }}
            </h1>
            <h2 class="subtitle">
              {{ $t('pages.contact.subtitle') }}
            </h2>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-one-third-desktop">
              <h2 class="title">
                {{ $t('pages.contact.coordinates') }}
              </h2>
                            
              <div class="is-size-5">
                <strong>{{ $t('pages.contact.email') }}</strong><br>
                <div class="mb-30">
                  <a :href="`mailto:${globals.email}`">{{ globals.email }}</a>
                </div>

                <strong>{{ $t('pages.contact.phone') }}</strong><br>
                <div class="mb-30">
                  <a :href="`tel:${globals.phone}`">{{ globals.phone }}</a>
                </div>

                <strong>{{ $t('pages.contact.address') }}</strong><br>
                <div style="white-space: pre;">
<!--
                  -->{{ globals.address }}
                </div>

                <div class="mb-30">
                  <a href="https://twitter.com/WitifyInc">
                    <div class="icon">
                      <i class="mdi mdi-twitter" />
                    </div>
                  </a>
                  <a href="https://dribbble.com/francoislevesque">
                    <div class="icon">
                      <i class="mdi mdi-dribbble" />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/witify">
                    <div class="icon">
                      <i class="mdi mdi-linkedin" />
                    </div>
                  </a>
                  <a href="https://www.facebook.com/witify/">
                    <div class="icon">
                      <i class="mdi mdi-facebook" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="column">
              <contact-form />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
export default {
	nuxtI18n: {
		paths: {
			en: "/contact-us",
			fr: "/nous-joindre"
		}
	},
	components: {
		"contact-form": ContactForm
	},
	computed: {
		globals () {
			return this.$store.getters.globals(this.$i18n.locale);
		}
	},
	head() {
		return {
			title: this.$t("pages.contact.title")
		};
	}
};
</script>