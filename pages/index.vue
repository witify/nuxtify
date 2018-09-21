<template>
  <div class="page-home">

    <section class="hero has-text-centered is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">

          <h1 class="title">{{ $t('pages.home.title') }}</h1>
          <h2 class="subtitle" v-html="$t('pages.home.subtitle')"></h2>
          
        </div>
      </div>

      <div class="scroll-to" v-scroll-to="'#content'">
        <div class="icon">
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </div>
    </section>

  </div>

</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pages.home.title')
    }
  }
}
</script>
