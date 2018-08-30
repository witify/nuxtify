<template>
  <div>
    <v-navigation></v-navigation>
    <nuxt/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    'v-navigation': Navigation,
    'v-footer': Footer
  }
}
</script>
