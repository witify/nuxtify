<template>
    <div class="page-custom-application">

        <section class="hero is-main is-half is-bold is-custom-application is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="icon is-circle is-dark">
                        <i class="mdi mdi-server-network"></i>
                    </div>
                    <h1 class="title">Custom applications</h1>
                    <h2 class="subtitle">Ut varius tincidunt libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.</h2>
                </div>
            </div>

            <div class="scroll-to" v-scroll-to="'#content'">
                <div class="icon">
                    <i class="mdi mdi-chevron-down"></i>
                </div>
            </div>
        </section>

        <section id="content" class="section pb-0">
            <div class="container is-sm">
                <h2 class="title">Vous avez une idée d'application unique qui changera le monde?</h2>
                <p class="is-medium">L’équipe Witify prend en charge le développement du logiciel pour transformer votre vision en application complète de grande qualité. Nous savons que votre projet possède ses propres objectifs, ses contraintes et ses caractéristiques uniques. Notre équipe est prête à s’adapter à vos besoins tout en vous guidant afin de garantir votre succès.</p>
            </div>
            <div class="container">    
                <nuxt-link :to="localePath('projects-sauver')" class="clickable show-on-mobile mt-30">
                    <div class="clickable-button">
                        <button class="button is-black is-medium">
                            <span>Étude de cas: SAUVéR</span>
                            <span class="icon">
                                <i class="mdi mdi-chevron-right"></i>
                            </span>
                        </button>
                    </div>
                    <div class="clickable-content">
                        <img src="~assets/img/projects/sauver/overview.jpg" alt="Complete eco-system">
                    </div>
                </nuxt-link>
            </div>
        </section>

        <section class="diptych is-border-bottom is-grey">
            <div class="container">
                <div class="diptych-body">
                    <div class="icon is-large mb-20">
                        <i class="mdi mdi-account-convert mdi-48px has-text-custom-application"></i>
                    </div>
                    <h3 class="title">Nous nous adaptons à votre réalité</h3>
                    <p class="is-medium mb-15">Que vous désiriez initialement concevoir un prototype ou rapidement atteindre une version commercialisable, nous nous adaptons à votre réalité. </p>
                    <p class="is-medium mb-15">Notre équipe tient à vous appuyer dans les tâches où vous manquez de temps ou d’expertise; que ce soit en « Product Management », en design, en développement d’expérience-utilisateur, en ingénierie logicielle, en assurance-qualité ou en intégration en environnement technologique.</p>
                    <p class="is-medium mb-15"><strong>Concentrez-vous sur vos forces, nous nous occupons du reste.</strong></p>
                </div>
            </div>
            <div class="diptych-image is-cover">
                <img src="~assets/img/services/custom-application/collaboration.jpg" alt="Witify can help you scale faster">
            </div>
        </section>

        <section id="content" class="section pb-0">
            <div class="container is-sm has-text-centered">
                <h2 class="title">Des produits de qualité, toujours.</h2>
                <p class="is-medium">Un bon produit numérique doit être intuitif, performant et évolutif. Witify vous aide à atteindre vos objetifs avec excellence, sans jamais compromettre la qualité.</p>
            </div>
            <div class="container">
                <nuxt-link :to="localePath('projects-sauver')" class="clickable show-on-mobile mt-30">
                    <div class="clickable-button">
                        <button class="button is-black is-medium">
                            <span>Étude de cas: Start Alberta</span>
                            <span class="icon">
                                <i class="mdi mdi-chevron-right"></i>
                            </span>
                        </button>
                    </div>
                    <div class="clickable-content">
                        <img src="~assets/img/projects/start-alberta/mobile-ui.jpg" alt="Complete eco-system">
                    </div>
                </nuxt-link>
            </div>
        </section>

        <section class="hero is-light has-text-centered">
            <div class="hero-body">
                <div class="container is-sm">
                    <h2 class="title">Notre méthode en 3 phases</h2>
                    <p class="is-medium mb-50">Notre méthodologie en 3 étapes s’appuie sur une écoute active et une communication fluide qui maximisera le succès de votre produit. Nous voulons comprendre vos objectifs, votre clientèle et réellement mettre en œuvre la meilleure solution pour votre projet.</p>
                </div>

                <div class="container">
                    <div class="columns is-multiline">

                        <div class="column is-one-third-desktop">
                            <div class="phase" v-scroll-to="'#phase1'">
                                <div class="tag is-custom-application">
                                    1
                                </div>
                                <h3 class="title">Analyse du projet</h3>
                            </div>
                        </div>

                        <div class="column is-one-third-desktop">
                            <div class="phase" v-scroll-to="'#phase2'">
                                <div class="tag is-custom-application">
                                    2
                                </div>
                                <h3 class="title">Développement de l’application</h3>
                            </div>
                        </div>

                        <div class="column is-one-third-desktop">
                            <div class="phase" v-scroll-to="'#phase3'">
                                <div class="tag is-custom-application">
                                    3
                                </div>
                                <h3 class="title">Lancement et revues par itération</h3>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <section id="phase1" class="diptych is-border-bottom is-imageless-mobile">

            <div class="container">
                <div class="diptych-body">
                    <div class="media pb-35">
                        <div class="media-left">
                            <div class="icon is-circle mb-20 has-text-custom-application">
                                <i class="mdi mdi-account"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 1
                            </span>

                            <h2 class="title">
                                Analyse du projet
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        La phase d'analyse permet de cibler les besoins prioritaires, mieux compendre de l’entreprise et son positionnement actuel et long-terme.
                    </p>

                    <ul class="is-bold">
                        <li>Analyse des objectifs du projet</li>
                        <li>Définition de l’utilisateur-type</li>
                        <li>Vision de l’entreprise et marque graphique</li>
                        <li>Planification de l'échéancier des diverses phases de prototypage et de mise en commercialisation</li>
                    </ul>
                </div>
            </div>

            <div class="diptych-image pt-60 pb-60">
                <img src="~assets/img/services/process-optimisation/phase1.svg" alt="Phase 1">
            </div>

        </section>

        <section id="phase2" class="diptych is-right is-border-bottom is-imageless-mobile">
            <div class="container">
                <div class="diptych-body">

                    <div class="media mb-20">
                        <div class="media-left">
                            <div class="icon is-circle mb-20 has-text-custom-application">
                                <i class="mdi mdi-chart-pie"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 2
                            </span>

                            <h2 class="title">
                                Développement de l’application
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        Des suivis fréquents nous permettent de communiquer rapidement et efficacement à travers le processus de développement.
                    </p>

                    <ul class="is-bold">
                        <li>Conception des maquettes visuelles et optimisation de l’expérience-utilisateur</li>
                        <li>Développement logiciel back-end et front-end</li>
                        <li>Tests et assurance qualité</li>
                    </ul>

                </div>
            </div>

            <div class="diptych-image">
                <img src="~assets/img/services/process-optimisation/phase2.svg" alt="Phase 2">
            </div>

        </section>

        <section id="phase3" class="diptych is-border-bottom is-imageless-mobile">
            <div class="container">
                <div class="diptych-body">
                    <div class="media mb-20">
                        <div class="media-left">
                            <div class="icon is-circle mb-20 has-text-custom-application">
                                <i class="mdi mdi-remote-desktop"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 3
                            </span>

                            <h2 class="title">
                                Déploiement et revues par itération
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        Un produit numérique est en constante évolution et doit constamment être peaufiner pour satisfaire sa clientèle cible. 
                    </p>

                    <ul class="is-bold">
                        <li>Déploiement et mise en place des outils de suivi</li>
                        <li>Documentation des métriques internes (technologique et affaire)</li>
                        <li>Formation</li>
                        <li>Suivis et revues itératives</li>
                    </ul>
                </div>
            </div>

            <div class="diptych-image pt-60 pb-60">
                <img src="~assets/img/services/process-optimisation/phase3.svg" alt="Phase 3">
            </div>
        </section>

        <section class="hero is-custom-application is-bold has-text-centered">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title">Tell us your next big idea & discover unsuspected benefits</h2>
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
export default {
    layout: 'default',
    nuxtI18n: {
        paths: {
            en: '/custom-application',
            fr: '/application-sur-mesure'
        }
    },
    head() {
        return {
            title: this.$t('pages.services.custom-application')
        }
    }
}
</script>
