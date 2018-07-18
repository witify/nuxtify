<template>
    <div class="page-start-alberta is-project">

        <div class="hero is-main is-fullheight is-dark is-center">
            <div class="hero-body">
                <div class="container">
                    <span class="heading">{{ $t('project.general.case-study') }}</span>
                    <h1 class="title">{{ $t('project.start-alberta.title') }}</h1>
                    <h2 class="subtitle">{{ $t('project.start-alberta.subtitle') }}</h2>
                </div>
            </div>

            <div class="scroll-to" v-scroll-to="'#content'">
                <div class="icon">
                    <i class="mdi mdi-chevron-down"></i>
                </div>
            </div>
        </div>

        <section id="content" class="section is-medium pb-60">
            <div class="container">
                <div class="columns is-variable is-6 is-desktop">
                    <div class="column is-one-third-desktop">
                        <div class="project-summary">
                            <div class="project-summary-item">
                                <h2 class="heading">Client</h2>
                                <a href="//startalberta.com" target="_blank">
                                    <span>
                                    Start Alberta
                                    </span>
                                    <span class="icon">
                                        <i class="mdi mdi-open-in-new"></i>
                                    </span>
                                </a>
                            </div>
                            <div class="project-summary-item">
                                <h2 class="heading">{{ $t('project.general.type') }}</h2>
                                <p class="is-medium">{{ $t('project.general.custom-app') }}</p>
                                <p class="is-medium">{{ $t('project.general.social-network') }}</p>
                                <p class="is-medium">{{ $t('project.general.business') }}</p>
                            </div>
                            <div class="project-summary-item">
                                <h2 class="heading">{{ $t('project.general.services') }}</h2>
                                <p class="is-medium">{{ $t('project.general.software-dev') }}</p>
                                <p class="is-medium">{{ $t('project.general.ux-dev') }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <p class="is-lead mb-20">{{ $t('project.start-alberta.header-1') }}</p>
                        <p class="is-medium">{{ $t('project.start-alberta.subheader-1') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section is-paddingless">
            <div class="container">
                <img src="~assets/img/projects/start-alberta/explore.jpg" alt="Complete eco-system">
            </div>
        </section>

        <section class="section is-medium">
            <div class="container">
                <h1 class="title is-size-2">
                {{ $t('project.general.approach') }}
                </h1>

                <div class="columns is-variable is-8">
                    <div class="column">
                        <p class="is-medium">{{ $t('project.start-alberta.approach-1') }}</p>
                    </div>
                    <div class="column">
                        <p class="is-medium">{{ $t('project.start-alberta.approach-2') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section is-paddingless">
            <div class="container">
                <img src="~assets/img/projects/start-alberta/mobile-ui.jpg" alt="Complete eco-system">
            </div>
        </section>

        <section class="hero is-quote is-custom-application">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h2 class="title" v-html="$t('project.start-alberta.header-2')"></h2>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <img src="~assets/img/projects/start-alberta/profiles.jpg" alt="Create and manages profiles">
            </div>
        </section>

        <section class="diptych is-border-bottom">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">Phase 1 : {{ $t('project.start-alberta.mvp') }}</h3>
                    <p class="is-medium mb-20">{{ $t('project.start-alberta.phase-1-paragraph-1') }}</p>
                    <p class="is-medium">{{ $t('project.start-alberta.phase-1-paragraph-2') }}</p>
                </div>
            </div>
            <div class="diptych-image pt-50">
                <img src="~assets/img/projects/start-alberta/mvp.jpg" alt="Start Alberta minimal viable product" class="has-shadow">
            </div>
        </section>

        <section class="diptych is-border-bottom">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">Phase 2 : {{ $t('project.start-alberta.refinement') }}</h3>
                    <p class="is-medium mb-20">{{ $t('project.start-alberta.phase-2-paragraph-1') }}</p>
                    <p class="is-medium">{{ $t('project.start-alberta.phase-2-paragraph-2') }}</p>
                </div>
            </div>
            <div class="diptych-image pt-50">
                <img src="~assets/img/projects/start-alberta/v1.jpg" alt="Start Alberta first release v1" class="has-shadow">
            </div>
        </section>

        <section class="section is-medium">
            <div class="container">
                <h2 class="title is-size-2">{{ $t('project.general.results') }}</h2>
                <p class="is-medium mb-50">{{ $t('project.start-alberta.results') }}</p>

                <div class="columns">
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">100+</div>
                        <span class="has-text-grey is-size-5">{{ $t('project.start-alberta.news') }}</span>
                    </div>
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">250+</div>
                        <span class="has-text-grey is-size-5">{{ $t('project.start-alberta.companies') }}</span>
                    </div>
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">20 000+</div>
                        <span class="has-text-grey is-size-5">{{ $t('project.start-alberta.visits') }}</span>
                    </div>
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">100+</div>
                        <span class="has-text-grey is-size-5">{{ $t('project.start-alberta.investors-organizations') }}</span>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    nuxtI18n: {
        paths: {
            en: '/projects/start-alberta',
            fr: '/projets/start-alberta'
        }
    },
    head() {
        return {
            title: this.$t('pages.projects.start-alberta')
        }
    }
}
</script>