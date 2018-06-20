import Vue from 'vue'


import ServiceCard from '../components/ServiceCard.vue'
import CTA from '../components/CTA.vue'
import Footer from '../components/Footer.vue'
import Reviews from '../components/Reviews.vue'
import Navigation from '../components/Navigation.vue'
import ContactForm from '../components/ContactForm.vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate);

Vue.component('service-card', ServiceCard)
Vue.component('cta', CTA)
Vue.component('v-footer', Footer)
Vue.component('v-reviews', Reviews)
Vue.component('v-navigation', Navigation)
Vue.component('contact-form', ContactForm)


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
