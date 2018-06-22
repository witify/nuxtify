<template>

    <div class="wrapper">
        <div class="projects-page">

            <section class="hero is-main">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">{{ $t('pages.projects.featured-projects') }}</h1>
                        <h2 class="subtitle">{{ $t('pages.projects.subtitle') }}</h2>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="columns is-variable is-8 is-multiline">

                        <div class="column is-half">
                            <nuxt-link :to="localePath('projects-start-alberta')" class="project-card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="~assets/img/projects/start-alberta/thumbnail.jpg" alt="Start Alberta">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <h2 class="title">{{ $t('project.start-alberta.title') }}</h2>
                                    <h3 class="subtitle">{{ $t('project.start-alberta.subtitle') }}</h3>
                                </div>
                            </nuxt-link>
                        </div>

                        <div class="column is-half">
                            <div class="project-card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="~assets/img/projects/pneus-a-petits-prix/thumbnail.jpg" alt="Low Cost Tires">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <h2 class="title">{{ $t('project.low-cost-tires.title') }}</h2>
                                    <h3 class="subtitle">{{ $t('project.low-cost-tires.subtitle') }}</h3>
                                </div>
                            </div>
                        </div>

                        <div class="column is-half">
                            <nuxt-link :to="localePath('projects-boursify')" class="project-card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="~assets/img/projects/boursify/thumbnail.jpg" alt="Boursify">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <h2 class="title">{{ $t('project.boursify.title') }}</h2>
                                    <h3 class="subtitle">{{ $t('project.boursify.subtitle') }}</h3>
                                </div>
                            </nuxt-link>
                        </div>

                        <div class="column is-half">
                            <div class="project-card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="~assets/img/projects/mcc/thumbnail.jpg" alt="Ministère de la culture et de l'éducation">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <h2 class="title">{{ $t('project.mcc.title') }}</h2>
                                    <h3 class="subtitle">{{ $t('project.mcc.subtitle') }}</h3>
                                </div>
                            </div>
                        </div>

                        <div class="column is-half">
                            <div class="project-card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="~assets/img/projects/jussaume/thumbnail.jpg" alt="Mobilier Jussaume">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <h2 class="title">{{ $t('project.jussaume.title') }}</h2>
                                    <h3 class="subtitle">{{ $t('project.jussaume.subtitle') }}</h3>
                                </div>
                            </div>
                        </div>

                        <div class="column is-half">
                            <nuxt-link :to="localePath('projects-sauver')" class="project-card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="~assets/img/projects/sauver/thumbnail.jpg" alt="SAUVéR">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <h2 class="title">{{ $t('project.sauver.title') }}</h2>
                                    <h3 class="subtitle">{{ $t('project.sauver.subtitle') }}</h3>
                                </div>
                            </nuxt-link>
                        </div>

                    </div>
                </div>
            </section>
        
        </div>
    </div>

</template>

<script>
export default {
    nuxtI18n: {
        paths: {
            en: '/projects',
            fr: '/projets'
        }
    },
    head() {
        return {
            title: this.$t('pages.projects.index')
        }
    }
}
</script>
