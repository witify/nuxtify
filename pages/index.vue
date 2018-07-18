<template>
  <div class="page-home">

    <section class="hero is-half main-hero is-black">
      <div class="hero-body">
        <div class="container">

          <h1 class="title is-spaced">
            <no-ssr>
              <home-title></home-title>
            </no-ssr>
          </h1>

          <h2 class="subtitle" v-html="$t('pages.home.subtitle')"></h2>

          <nuxt-link :to="localePath('projects')" class="button is-danger is-large mb-10 mr-10">
            <span class="icon">
              <i class="mdi mdi-clipboard-text"></i>
            </span>
            <span>
              {{ $t('pages.home.case-studies') }}
            </span>
          </nuxt-link>

          <nuxt-link :to="localePath('services')" class="button is-white is-large">
            <span class="icon">
              <i class="mdi mdi-google-circles-extended"></i>
            </span>
            <span>
              {{ $t('pages.home.our-services') }}
            </span>
          </nuxt-link>
        </div>
      </div>

      <div class="scroll-to" v-scroll-to="'#content'">
        <div class="icon">
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </div>
    </section>

    <section id="content" class="section section-expertise is-medium">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column">

            <h2 class="title is-size-2" v-html="$t('pages.home.expertise-header')"></h2>
            <p class="subtitle is-size-4">{{ $t('pages.home.expertise-paragraph') }}</p>

          </div>
        </div>
      </div>

      <div class="services">
        <div class="container">
          <div class="columns is-desktop">
            <div class="column">
              <service-card :title="$t('pages.services.process-optimisation')" slug="process-optimisation" icon="rocket"></service-card>
            </div>
            <div class="column">
              <service-card :title="$t('pages.services.e-commerce')" slug="e-commerce" icon="store"></service-card>
            </div>
            <div class="column">
              <service-card :title="$t('pages.services.custom-application')" slug="custom-application" icon="server-network"></service-card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section project is-start-alberta is-left">

        <div class="container">
          <div class="project-body">
            <h2 class="title">
              <img class="project-logo" src="~assets/img/projects/start-alberta/logo.png" label="Start Alberta" />
              <span>Start Alberta</span>
            </h2>
            <p class="is-medium">
              {{ $t('pages.home.start-alberta-resume') }}
            </p>
            <nuxt-link :to="localePath('projects-start-alberta')" class="button is-medium is-start-alberta">
              <span>
                {{ $t('project.general.read-case-study') }}
              </span>
              <span class="icon">
                <i class="mdi mdi-arrow-right"></i>
              </span>
            </nuxt-link>
          </div>
        </div>

        <div class="project-media">
            <img src="~assets/img/projects/start-alberta/iphone.png" alt="Start Alberta interface on iphone" class="project-iphone" v-vpshow />
            <div class="project-bg" v-vpshow></div>
        </div>

    </section>

    <section class="section project is-pneus-a-petits-prix is-right">
    
        <div class="container">
          <div class="project-body">
            <h2 class="title">
              <img class="project-logo" src="~assets/img/projects/pneus-a-petits-prix/logo.png" label="Pneus à petits prix" />
              <span>{{ $t('project.low-cost-tires.title') }}</span>
            </h2>
            <p class="is-medium">
              {{ $t('pages.home.low-cost-tires-resume') }}
            </p>
            <a href="#" class="button is-medium is-pneus-a-petits-prix">
              <span>
                {{ $t('project.general.read-case-study') }}
              </span>
              <span class="icon">
                <i class="mdi mdi-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>

        <div class="project-media">
            <img src="~assets/img/projects/pneus-a-petits-prix/iphone.png" alt="Low Cost tires interface on iphone" class="project-iphone" v-vpshow />
            <div class="project-bg" v-vpshow></div>
        </div>

    </section>

    <section class="section section-review">
      <div class="container">
        <h2 class="title">{{ $t('pages.home.we-are-awesome') }}</h2>
        <img src="~assets/img/home/stars.svg" alt="5 stars rating review" class="stars">
      </div>
      <v-reviews></v-reviews>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="clients">
          <div class="client">
            <img src="~/assets/img/clients/bromont.png" alt="Witify Clients - Bromont Ville branchée">
          </div>
          <div class="client">
            <img src="~/assets/img/clients/mcc.png" alt="Witify Clients - Ministère de la culture et des communications">
          </div>
          <div class="client">
            <img src="~/assets/img/clients/poly.png" alt="Witify Clients - École polytechnique de Montréal">
          </div>
          <div class="client">
            <img src="~/assets/img/clients/brio.png" alt="Witify Clients - Brioconcept custom electrical engineering">
          </div>
        </div>
      </div>
    </section>
  
    <section class="hero is-default is-dark has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h2 class="title">Tell us about your next big idea</h2>
          <nuxt-link :to="localePath('contact')" class="button is-white is-medium is-outlined">
            <span>Contact us now</span>
            <span class="icon">
              <i class="mdi mdi-arrow-right"></i>
            </span>
          </nuxt-link>
        </div>
      </div>
    </section>
    
  </div>

</template>

<script>
import HomeTitle from '../components/HomeTitle.vue'

export default {
  head() {
    return {
      title: this.$t('pages.index')
    }
  },
  components: {
    HomeTitle
  }
}
</script>
