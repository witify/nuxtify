import Vue from 'vue'


import ServiceCard from '../components/ServiceCard.vue'
import CTA from '../components/CTA.vue'
import Footer from '../components/Footer.vue'
import Reviews from '../components/Reviews.vue'
import Navigation from '../components/Navigation.vue'
import ContactForm from '../components/ContactForm.vue'
import Socials from '../components/Socials.vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

Vue.component('socials', Socials)
Vue.component('service-card', ServiceCard)
Vue.component('cta', CTA)
Vue.component('v-footer', Footer)
Vue.component('v-reviews', Reviews)
Vue.component('v-navigation', Navigation)
Vue.component('contact-form', ContactForm)

/*
 |--------------------------------------------------------------------------
 | Vue Scroll
 |--------------------------------------------------------------------------
 */

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {
    offset: -67,
    duration: 200
})

/*
 |--------------------------------------------------------------------------
 | Directives
 |--------------------------------------------------------------------------
 */ 

Vue.directive('loading', {
    inserted (el, binding, vnode) {
        let loadingMask = document.createElement('div')
        loadingMask.className = 'loading-mask'
        el.appendChild(loadingMask)
    },
    update (el, binding, vnode) {
        let loadingMask = el.getElementsByClassName('loading-mask')[el.getElementsByClassName('loading-mask').length - 1] // Get the last div in the node
        if (binding.value) {
            loadingMask.className += ' is-active'
        } else {
            loadingMask.className = 'loading-mask'
        }
    }
})
