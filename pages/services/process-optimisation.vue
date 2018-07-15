<template>

    <div class="page-process-optimisation">

        <section class="hero is-main is-half is-process-optimisation is-bold is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="icon is-circle is-dark">
                        <i class="mdi mdi-rocket"></i>
                    </div>
                    <h1 class="title">Process optimisation</h1>
                    <h2 class="subtitle">Ut varius tincidunt libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.</h2>
                </div>
            </div>

            <div class="scroll-to" v-scroll-to="'#content'">
                <div class="icon">
                    <i class="mdi mdi-chevron-down"></i>
                </div>
            </div>
        </section>

        <section id="content" class="hero">
            <div class="hero-body">
                <div class="container is-sm">
                    <p class="is-size-3 has-text-centered is-tight">
                        Intégrer des solutions <strong>personnalisées</strong> dans son environnement de travail afin de <strong>maximiser la vitesse de production</strong> et <strong>diminuer les coûts.</strong>
                    </p>
                </div>
            </div>
        </section>

        <section class="diptych is-border-bottom is-grey">
            <div class="container">
                <div class="diptych-body">
                    <div class="icon is-large mb-20">
                        <i class="mdi mdi-trending-up mdi-48px has-text-process-optimisation"></i>
                    </div>
                    <h3 class="title">Have you reached a growth plateau?</h3>
                    <p class="is-medium">Our services are optimal for companies that are growing or want to grow, already posting some revenue stability and <strong>ready to invest in their expansion.</strong></p>
                </div>
            </div>
            <div class="diptych-image is-cover">
                <img src="~assets/img/bg/office.jpg" alt="Witify can help you scale faster">
            </div>
        </section>

        <section class="section has-text-centered">
            <div class="container is-sm">
                <h2 class="title is-size-2">Our services</h2>
                <h2 class="subtitle is-size-4 mb-40">Nous offrons une gamme de services complète pour un accompagnement et un développement clé en main de A à Z.</h2>

                <div class="columns is-mobile is-multiline">

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-circle has-text-process-optimisation">
                                <i class="mdi mdi-database-search"></i>
                            </div>
                            <h2 class="title">Centralized</h2>
                            <h3 class="subtitle">information</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-circle has-text-process-optimisation">
                                <i class="mdi mdi-clipboard-pulse-outline"></i>
                            </div>
                            <h2 class="title">Result analysis</h2>
                            <h3 class="subtitle">and measurements</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-circle has-text-process-optimisation">
                                <i class="mdi mdi-gauge-full"></i>
                            </div>
                            <h2 class="title">Process</h2>
                            <h3 class="subtitle">acceleration</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-circle has-text-process-optimisation">
                                <i class="mdi mdi-web"></i>
                            </div>
                            <h2 class="title">Accessible</h2>
                            <h3 class="subtitle">from anywhere</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-circle has-text-process-optimisation">
                                <i class="mdi mdi-security"></i>
                            </div>
                            <h2 class="title">Security</h2>
                            <h3 class="subtitle">banking level security</h3>
                        </div>
                    </div>

                    <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
                        <div class="service-item">
                            <div class="icon is-circle has-text-process-optimisation">
                                <i class="mdi mdi-tune-vertical"></i>
                            </div>
                            <h2 class="title">Operation</h2>
                            <h3 class="subtitle">standardization</h3>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section class="hero is-light has-text-centered">
            <div class="hero-body">
                <div class="container">

                    <h2 class="title is-size-2">Our method in 4 phases</h2>
                    <h3 class="subtitle is-size-4 mb-50">Ut varius tincidunt libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.</h3>

                    <div class="columns is-multiline">

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <div class="phase" v-scroll-to="'#phase1'">
                                <div class="tag is-process-optimisation">
                                    1
                                </div>
                                <h3 class="title">Strategic meeting</h3>
                            </div>
                        </div>

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <div class="phase" v-scroll-to="'#phase2'">
                                <div class="tag is-process-optimisation">
                                    2
                                </div>
                                <h3 class="title">Process analysis</h3>
                            </div>
                        </div>

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <div class="phase" v-scroll-to="'#phase3'">
                                <div class="tag is-process-optimisation">
                                    3
                                </div>
                                <h3 class="title">Implementation</h3>
                            </div>
                        </div>

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <div class="phase" v-scroll-to="'#phase4'">
                                <div class="tag is-process-optimisation">
                                    4
                                </div>
                                <h3 class="title">Project report</h3>
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
                            <div class="icon is-circle mb-20 has-text-process-optimisation">
                                <i class="mdi mdi-account"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 1
                            </span>

                            <h2 class="title">
                                Rencontre stratégique
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        La rencontre stratégique est dédiée à l’écoute du client, le ciblage des besoins prioritaires, la compréhension de l’entreprise et son positionnement actuel dans son parcours long-terme.
                    </p>

                    <ul class="is-bold">
                        <li>Compréhension globale de l’entreprise et de ses besoins</li>
                        <li>Édification du parcours de l’entreprise et de ses objectifs</li>
                        <li>Recherche et définition des « Pain Points » et opportunités d’ajouts de valeur</li>
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
                            <div class="icon is-circle mb-20 has-text-process-optimisation">
                                <i class="mdi mdi-chart-pie"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 2
                            </span>

                            <h2 class="title">
                                Analyse des procédés
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        L’analyse des procédés se consacre à la compréhension profonde des systèmes, routines et méthodes utilisées pour le besoin cible du projet.
                    </p>

                    <ul class="is-bold">
                        <li>Détecter et de cibler les inefficacités courantes (redondance, intégration, objectivité externe, goulot et erreurs humaines)</li>
                        <li>Établir une solution optimale avec une analyse haut-niveau facile de compréhension (coûts, complexité, temps)</li>
                        <li>Planifier la transition vers le statut actuel au statut désiré</li>
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
                            <div class="icon is-circle mb-20 has-text-process-optimisation">
                                <i class="mdi mdi-remote-desktop"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 3
                            </span>

                            <h2 class="title">
                                Implémentation de la solution
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        L’implémentation de la solution est réalisée de façon personnalisée par nos professionnels de la technologie en gardant en tête la priorité de l’expérience d’utilisation du client.
                    </p>

                    <ul class="is-bold">
                        <li>Augmenter le ROI du département fonctionnel ou du projet ciblé (réduction d’erreurs humaines, moins de duplication)</li>
                        <li>Systèmes d’analyse haut-niveau afin de fournissant une vue d’ensemble pour les gestionnaires/VP en charge de la solution tout en connectant les divers acteurs</li>
                        <li>Intégration simple, facile et efficace dans les systèmes actuels afin de fournir une expérience clé-en-main (formations, intégration, etc.)</li>
                    </ul>
                </div>
            </div>

            <div class="diptych-image pt-60 pb-60">
                <img src="~assets/img/services/process-optimisation/phase3.svg" alt="Phase 3">
            </div>
        </section>

        <section id="phase4" class="diptych is-right is-imageless-mobile">
            <div class="container">
                <div class="diptych-body">
                    
                    <div class="media mb-20">
                        <div class="media-left">
                            <div class="icon is-circle mb-20 has-text-process-optimisation">
                                <i class="mdi mdi-file-chart"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <span class="heading">
                                Phase 4
                            </span>

                            <h2 class="title">
                                Rapport de projet
                            </h2>
                        </div>
                    </div>

                    <p class="is-medium mb-40">
                        Le rapport de projet se déroule en deux temps : une analyse immédiate de la solution et de son intégration et des opportunités liées, puis un retour quelques mois après afin d’établir un suivi sur l’intégration dans le mode d’entreprise.
                    </p>

                    <ul class="is-bold">
                        <li>Confirmer la transition du positionnement de l’ancien statut au nouveau statut</li>
                        <li>Établir les opportunités futures liées au projet, pouvant être abordées dans un avenir à déterminer.</li>
                        <li>Mesurer et justifier l’impact du logiciel dans l’entreprise auprès des différents acteurs</li>
                    </ul>

                </div>

            </div>

            <div class="diptych-image pt-60 pb-60">
                <img src="~assets/img/services/process-optimisation/phase4.svg" alt="Phase 4">
            </div>

        </section>

    </div>

</template>

<script>
export default {
    layout: 'default',
    nuxtI18n: {
        paths: {
            en: '/process-optimisation',
            fr: '/optimisation-de-processus'
        }
    },
    head() {
        return {
            title: this.$t('pages.services.process-optimisation')
        }
    }
}
</script>
