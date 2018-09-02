import Vue from 'vue'

import CTA from '@/components/CTA.vue'
import Socials from '@/components/Socials.vue'

// Storyblok
import Post from '@/components/storyblok/Post.vue'

Vue.component('socials', Socials)
Vue.component('cta', CTA)

// Storyblok
Vue.component('post', Post)

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

Vue.prototype.$resizeImage = function(image, option) {
    if (image === undefined) {
        return ''
    }
    let imageService = '//img2.storyblok.com/'
    let path = image.replace('//a.storyblok.com', '')
    return imageService + option + path
}

Vue.prototype.$limit = function(text, max = 100) {
    if (text === undefined) {
        return ''
    }
    if (text.length > max) text = text.substring(0, max) + '...'
    return text
}
