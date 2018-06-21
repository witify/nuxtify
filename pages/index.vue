<template>
  <div class="page-home">

    <section class="hero is-large main-hero is-black">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-spaced">We build better <br>digital products.</h1>
          <h2 class="subtitle">Witify is a design & engineering team crafting high-end digital products.</h2>

          <div class="field is-grouped">
            <p class="control">
              <nuxt-link :to="localePath('projects')" class="button is-danger is-medium">Case studies</nuxt-link>
            </p>
            <p class="control">
              <nuxt-link :to="localePath('services')" class="button is-white is-medium">Our services</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-expertise is-medium">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column">

            <h2 class="title is-size-1 is-spaced">
              Thorough <br>
              <strong>web</strong> & <strong>application</strong><br>
              expertise.
            </h2>
            <p class="is-medium">Maecenas egestas arcu quis ligula mattis placerat. Donec vitae orci sed dolor rutrum auctor. In ac felis quis tortor malesuada pretium.</p>

            <br>

            <nuxt-link :to="localePath('services')" class="button is-primary is-medium">
              <span>What we do</span>
              <span class="icon">
                <i class="mdi mdi-arrow-right"></i>
              </span>
            </nuxt-link>
          </div>
          <div class="column">
          </div>
        </div>
      </div>

      <div class="services">
        <div class="container">
          <div class="columns is-desktop">
            <div class="column">
              <service-card title="Process optimisation" slug="process-optimisation" icon="rocket"></service-card>
            </div>
            <div class="column">
              <service-card title="E-commerce" slug="e-commerce" icon="store"></service-card>
            </div>
            <div class="column">
              <service-card title="Custom application" slug="custom-application" icon="server-network"></service-card>
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
              Start Alberta is a web-community bringing together funders, investors and organizations in a comprehensible and interactive ecosystem. It is and will remain an open resource for everyone.
            </p>
            <a href="#" class="button is-medium is-start-alberta">
              <span>
                Read the case study
              </span>
              <span class="icon">
                <i class="mdi mdi-arrow-right"></i>
              </span>
            </a>
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
              <span>Low cost tires</span>
            </h2>
            <p class="is-medium">
              Start Alberta is a web-community bringing together funders, investors and organizations in a comprehensible and interactive ecosystem. It is and will remain an open resource for everyone.
            </p>
            <a href="#" class="button is-medium is-pneus-a-petits-prix">
              <span>
                Read the case study
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
        <h2 class="title">Apparently, we are awesome!</h2>
        <img src="~assets/img/home/stars.svg" alt="5 stars rating review" class="stars">
      </div>
      <v-reviews></v-reviews>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="clients">
          <img src="~/assets/img/clients/bromont.png" alt="Witify Clients - Bromont Ville branchée">
          <img src="~/assets/img/clients/mcc.png" alt="Witify Clients - Ministère de la culture et des communications">
          <img src="~/assets/img/clients/poly.png" alt="Witify Clients - École polytechnique de Montréal">
          <img src="~/assets/img/clients/brio.png" alt="Witify Clients - Brioconcept custom electrical engineering">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pages.index')
    }
  }
}
</script>
