<template>
  <div class="page-about">

    <section class="hero has-text-centered is-medium">

      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ $t('pages.about.title') }}</h1>
          <h2 class="subtitle" v-html="$t('pages.about.subtitle')"></h2>
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
      title: this.$t('pages.about.title')
    }
  }
}
</script>
