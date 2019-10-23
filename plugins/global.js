import Vue from "vue";

import Section from "@/components/layout/Section.vue";
import Hero from "@/components/layout/Hero.vue";
import Container from "@/components/layout/Container.vue";

import Label from "@/components/form/Label.vue";
import Input from "@/components/form/Input.vue";
import Textarea from "@/components/form/Textarea.vue";

import Socials from "@/components/Socials.vue";

/*
 |--------------------------------------------------------------------------
 | Global components
 |--------------------------------------------------------------------------
*/

Vue.component("v-section", Section);
Vue.component("v-hero", Hero);
Vue.component("v-container", Container);

Vue.component("v-label", Label);
Vue.component("v-input", Input);
Vue.component("v-textarea", Textarea);

Vue.component("socials", Socials);

/*
 |--------------------------------------------------------------------------
 | Vue Scroll
 |--------------------------------------------------------------------------
*/

import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo, {
	offset: -67,
	duration: 200
});

/*
 |--------------------------------------------------------------------------
 | Directives
 |--------------------------------------------------------------------------
*/ 

Vue.directive("loading", {
	inserted (el, binding, vnode) {
		let loadingMask = document.createElement("div");
		loadingMask.className = "loading-mask";
		el.appendChild(loadingMask);
	},
	update (el, binding, vnode) {
		let loadingMask = el.getElementsByClassName("loading-mask")[el.getElementsByClassName("loading-mask").length - 1]; // Get the last div in the node
		if (binding.value) {
			loadingMask.className += " is-active";
		} else {
			loadingMask.className = "loading-mask";
		}
	}
});

/*
 |--------------------------------------------------------------------------
 | Prototypes
 |--------------------------------------------------------------------------
*/ 

Vue.prototype.$resizeImage = function(image, width = 800, height = 600) {
	let imageSrc = "";
	if (image) {
		imageSrc = image + "?w=" + width + "&h=" + height + "&fit=crop";
	}
	return {
		src: image,
		srcset: imageSrc
	};
};

Vue.prototype.$limit = function(text, max = 100) {
	if (text === undefined) {
		return "";
	}
	if (text.length > max) text = text.substring(0, max) + "...";
	return text;
};
