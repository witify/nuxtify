import Vue from 'vue'

import VueParallaxy from 'vue-parallaxy'

import ServiceCard from '../components/ServiceCard.vue'
import CTA from '../components/CTA.vue'
import Footer from '../components/Footer.vue'
import Reviews from '../components/Reviews.vue'
import Navigation from '../components/Navigation.vue'

Vue.component('parallax', VueParallaxy)

Vue.component('service-card', ServiceCard)
Vue.component('cta', CTA)
Vue.component('v-footer', Footer)
Vue.component('v-reviews', Reviews)
Vue.component('v-navigation', Navigation)

Vue.directive('vpshow', {
    inViewport (el) {
      var rect = el.getBoundingClientRect()
      return !(rect.bottom < 0 || rect.right < 0 || 
               rect.left > window.innerWidth ||
               rect.top > window.innerHeight)
    },
  
    bind(el, binding) {
        el.classList.add('before-enter')
        el.$onScroll = function() {
            if (binding.def.inViewport(el)) {
                el.classList.add('enter')
                el.classList.remove('before-enter')
            } else {
                el.classList.remove('enter')
                el.classList.add('before-enter')
            }
        }
        document.addEventListener('scroll', el.$onScroll)
    },
  
    inserted(el, binding) {
        el.$onScroll()  
    },

    unbind(el, binding) {    
        document.removeEventListener('scroll', el.$onScroll)
        delete el.$onScroll
    }  
})
