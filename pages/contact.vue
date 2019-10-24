<template>
  <div class="wrapper">
    <div class="py-6 sm:py-10">
      <div class="container">
        <div class="max-w-3xl">
          <h1 class="h1 mb-1">
            {{ $t('pages.contact.title') }}
          </h1>
          <h2 class="h2 font-normal text-gray-600">
            {{ $t('pages.contact.subtitle') }}
          </h2>
        </div>
      </div>
    </div>

    <hr>

    <div class="py-6 sm:py-10">
      <div class="container">
        <div class="md:flex md:-mx-16">
          <div class="md:px-16">
            <h2 class="mb-5 text-xl sm:text-2xl">
              {{ $t('pages.contact.coordinates') }}
            </h2>
                            
            <div class="is-size-5">
              <strong>{{ $t('pages.contact.email') }}</strong><br>
              <div class="mb-5">
                <a
                  :href="`mailto:${globals.email}`"
                  class="text-indigo-600"
                >{{ globals.email }}</a>
              </div>

              <strong>{{ $t('pages.contact.phone') }}</strong><br>
              <div class="mb-5">
                <a
                  :href="`tel:${globals.phone}`"
                  class="text-indigo-600"
                >{{ globals.phone }}</a>
              </div>

              <strong>{{ $t('pages.contact.address') }}</strong><br>
              <div style="white-space: pre;">
<!--
                  -->{{ globals.address }}
              </div>

              <div class="flex mb-5 text-xl text-gray-800">
                <a
                  href="https://twitter.com/WitifyInc"
                  class="mr-3"
                >
                  <i class="mdi mdi-twitter" />
                </a>
                <a
                  href="https://dribbble.com/francoislevesque"
                  class="mr-3"
                >
                  <i class="mdi mdi-dribbble" />
                </a>
                <a
                  href="https://www.linkedin.com/company/witify"
                  class="mr-3"
                >
                  <i class="mdi mdi-linkedin" />
                </a>
                <a
                  href="https://www.facebook.com/witify/"
                  class=""
                >
                  <i class="mdi mdi-facebook" />
                </a>
              </div>
            </div>
          </div>
          <div class="md:px-16 flex-auto">
            <contact-form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
export default {
	head() {
		return this.$seo.head({
			title: this.$t("pages.contact.title"),
			description: this.$t("pages.contact.subtitle")
		});
	},
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
	}
};
</script>