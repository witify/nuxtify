<template>
  <div>
    <v-navigation />
    <nuxt />
    <v-footer />
  </div>
</template>

<script>
import Navigation from "../components/navigation/Navigation.vue";
import Footer from "../components/Footer.vue";

export default {
	components: {
		"v-navigation": Navigation,
		"v-footer": Footer
	},
	head () {
		return this.$nuxtI18nSeo();
	},
	jsonld() {
		return {
			"@context": "http://schema.org",
			"@type": "WebSite",
			url: process.env.URL,
			name: process.env.NAME
		};
	},
};
</script>
