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
                                <h2 class="heading">Type</h2>
                                <p class="is-medium">Application sur mesure</p>
                                <p class="is-medium">Réseau social</p>
                                <p class="is-medium">Affaires</p>
                            </div>
                            <div class="project-summary-item">
                                <h2 class="heading">Services</h2>
                                <p class="is-medium">Développement logiciel</p>
                                <p class="is-medium">Conception de l'expérience utilisateur</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <p class="is-lead mb-20">L’économie florissante de l’Alberta, impliquant 4,3 millions de résidents, presque 20 milliers nouvelles entreprises par année et des milliards d’investissements, regorge de projets divers.</p>
                        <p class="is-medium">Cette province canadienne possède un écosystème riche, varié et prometteur. Toutefois, bien que des milliers d’entreprises naissent chaque mois, il reste difficile de recenser tous les détails et les projets spécifiques de ces entrepreneurs. Aucune plateforme unique et publique ne permet d’avoir l’ensemble de ces données, spécifiques à l’Alberta.</p>
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
                        <p class="is-medium">En collaboration avec le client, l’équipe Witify a dû initier une première phase pilote ayant pour objectif de regrouper l’ensemble des entrepreneurs, investisseurs et organisations impliquées dans le monde des « Startups » en Alberta. L’équipe s’est penchée sur la vision d’écosystème et de communauté ouverte afin de conceptualiser le produit et d’y intégrer l’ensemble des fonctionnalités qui permettraient autant de communiquer du contenu pertinent, d’intégrer des nouvelles données et d’engager ses utilisateurs.</p>
                    </div>
                    <div class="column">
                        <p class="is-medium">Il a été décidé d’y aller en plusieurs phases successives afin de jauger l’intérêt de la communauté et de s’adapter continuellement aux commentaires des utilisateurs.</p>
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
                    <h2 class="title">Start Alberta est une ressource <strong>accessible au public</strong>, permettant le <strong>partage</strong> d’histoires de succès, d’innovation et de détermination, dans le monde de l’entreprenariat en Alberta.</h2>
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
                    <h3 class="title">Phase 1 : Produit minimal viable</h3>
                    <p class="is-medium mb-20">La version « Produit Minimum Viable » de StartAlberta devait rapidement pouvoir intégrer une structure flexible et relativement complexe de données entre les diverses entités de l’écosystème : des individus, des organisations, des investisseurs, des compagnies. De plus, il devait être possible de pouvoir enregistrer et communiquer de l’information de façon simple pour chacune de ces entités.</p>
                    <p class="is-medium">L’équipe a développé des modèles flexibles permettant d’accomplir ses objectifs, en plus de leur permettre de connecter entre eux, à la manière d’un réseau social. Chaque utilisateur peut s’enregistrer sans peine et un processus fiable et sécuritaire a été implémenté pour supporter ce besoin. Des outils d’administrateur ont aussi été bâtis afin d’offrir une gestion autonome de la plateforme. Grâce à celle-ci, l’administrateur peut gérer les blogues, les différentes données et assurer la viabilité de l’information.</p>
                </div>
            </div>
            <div class="diptych-image pt-80">
                <img src="~assets/img/projects/start-alberta/mvp.jpg" alt="Start Alberta minimal viable product" class="has-shadow">
            </div>
        </section>

        <section class="diptych is-border-bottom">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">Phase 2 : Raffinement</h3>
                    <p class="is-medium mb-20">Bien que la version pilote remplissait les objectifs de base au niveau « information », celle-ci servait principalement à la validation de la pertinence de la plateforme. Ainsi, lors du développement de la version 1.0, l’équipe de design a pu raffiner la présentation visuelle et la façon de communiquer graphiquement les diverses informations. </p>
                    <p class="is-medium">En se dédiant à améliorer l’expérience-utilisateur, l’équipe a amélioré la structure des pages, le processus d’inscription et ajouter plusieurs fonctionnalités permettant de naviguer aisément à travers la plateforme et d’augmenter l’engagement des utilisateurs. De plus, plusieurs outils ont été ajoutés pour l’administration, tels que des rapports complets d’information, des outils de communication de masse et autre, dans le but de faciliter sa gestion de la plateforme.</p>
                </div>
            </div>
            <div class="diptych-image pt-80">
                <img src="~assets/img/projects/start-alberta/v1.jpg" alt="Start Alberta first release v1" class="has-shadow">
            </div>
        </section>

        <section class="section is-medium">
            <div class="container">
                <h2 class="title is-size-2">{{ $t('project.general.results') }}</h2>
                <p class="is-medium mb-50">Start Alberta a mis en ligne sa première version pilote le 4 décembre 2017, limité à une liste sélecte de beta testeurs, et sa première version complète, dédiée au grand public, le 10 juin 2018. L’association entre « Alberta Enterprise » et « Venture Capital Association of Alberta » a permis de rapidement faire naître une communauté diverse sur la plateforme web.</p>

                <div class="columns">
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">100+</div>
                        <span class="has-text-grey is-size-5">Nouvelles</span>
                    </div>
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">250+</div>
                        <span class="has-text-grey is-size-5">Compagnies</span>
                    </div>
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">20 000+</div>
                        <span class="has-text-grey is-size-5">Visites</span>
                    </div>
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">100+</div>
                        <span class="has-text-grey is-size-5">Investisseurs et organisations</span>
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