<template>
    <div class="page-sauver is-project">

        <div class="hero is-main is-fullheight is-dark is-center">
            <div class="hero-body">
                <div class="container">
                    <span class="heading">{{ $t('project.general.case-study') }}</span>
                    <h1 class="title">{{ $t('project.sauver.title') }}</h1>
                    <h2 class="subtitle">{{ $t('project.sauver.subtitle') }}</h2>
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
                                <a href="//www.yhcenvironnement.com/" target="_blank">
                                    <span>
                                        YHC Environnement
                                    </span>
                                    <span class="icon">
                                        <i class="mdi mdi-open-in-new"></i>
                                    </span>
                                </a>
                            </div>
                            <div class="project-summary-item">
                                <h2 class="heading">Type</h2>
                                <p class="is-medium">Application sur mesure</p>
                                <p class="is-medium">Autopartage</p>
                                <p class="is-medium">Gestion de flotte</p>
                                <p class="is-medium">Environnement</p>
                            </div>
                            <div class="project-summary-item">
                                <h2 class="heading">Services</h2>
                                <p class="is-medium">Développement logiciel</p>
                                <p class="is-medium">Conception de l'expérience utilisateur</p>
                                <p class="is-medium">Gestion de flotte en temps réel</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <p class="is-lead mb-20">
                        L'autopartage de voitures électriques est de plus en plus populaire dans les municipalités. Cependant, sans système de gestion en place, l'autopartage devient difficile et peu efficace. 
                        </p>
                        <p>
                        Afin de rentabiliser leur flotte, YHC Environnement a établi divers partenariats a travers les municipalités québécoises afin de répandre le système d’autopartage, en plus de favoriser une approche verte avec les voitures électriques. Ils nous ont ensuite approché pour bâtir leur plateforme web d'autopartage.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section is-paddingless has-border-bottom">
            <div class="container">
                <img src="~assets/img/projects/sauver/overview.jpg" alt="Complete eco-system">
            </div>
        </section>

        <section class="section is-medium">
            <div class="container">
                <h1 class="title is-size-2">
                {{ $t('project.general.approach') }}
                </h1>

                <div class="columns is-variable is-8">
                    <div class="column">
                        <p class="is-medium">Le client a dû s’équiper d’experts de divers domaines afin de créer une offre de service complète pour ses partenaires. Witify devait donc collaborer avec une firme d’ingénierie et prendre en charge l’aspect logiciel du projet.</p>
                    </div>
                    <div class="column">
                        <p class="is-medium">
                        Le développement du produit web a été laissé sous l’expertise de l’équipe Witify afin de favoriser un produit facile d’utilisation pour ses divers utilisateurs.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section is-paddingless">
            <div class="container">
                <img src="~assets/img/projects/sauver/mobile-ui.jpg" alt="Complete eco-system">
            </div>
        </section>

        <section class="hero is-quote">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h2 class="title">
                    Un <strong>algorithme sophistiqué</strong> a été développé afin de prendre en compte autant les besoins de <strong>sécurité</strong>, de <strong>convenance</strong> et de <strong>logistique de gestion</strong>. Il analyse, réagit et effectue des actions en <strong>temps réel</strong> afin <strong>d'automatiser</strong> l'autopartage dans les municipalités.
                    </h2>
                </div>
            </div>
        </section>

        <section class="diptych is-border-bottom">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">Gestion de flotte en temps réel</h3>
                    <p class="is-medium">Initialement, l’équipe Witify a dû cibler les outils nécessaires afin de monitorer en temps réel l’ensemble des voitures pour chacune des municipalités. Les développeurs devaient pouvoir communiquer avec les divers véhicules, grâce à une API fournie par la firme d’ingénierie partenaire. Un algorithme sophistiqué a été développé afin de prendre en compte autant les besoins de sécurité, de convenance et de logistique de gestion. Il analyse, réagit et effectue des actions en temps réel afin d'automatiser l'autopartage 24 heures sur 24.</p>
                </div>
            </div>
            <div class="diptych-image pt-80">
                <img src="~assets/img/projects/sauver/gestion.jpg" alt="Gestion de flotte en temps réel" class="has-shadow">
            </div>
        </section>

        <section class="diptych is-border-bottom is-right">
            <div class="container">
                <div class="diptych-body">
                    <h3 class="title">Interface de réservation</h3>
                    <p class="is-medium">L’équipe a confectionné une plateforme sur laquelle les utilisateurs peuvent réserver un véhicule pendant une plage plage horaire qui leur convienne. Les administrateurs, de leur côté, peuvent ajouter et modifier un large éventail de paramètres reliés à leur ville (véhicules, plages horaires, jours fériés, autorisations, etc.)</p>
                </div>
            </div>
            <div class="diptych-image pt-80">
                <img src="~assets/img/projects/sauver/reservation.jpg" alt="Reservation rapide et intuitive sur ordinateur et mobile" class="has-shadow">
            </div>
        </section>

        <section class="section is-medium">
            <div class="container">
                <h2 class="title is-size-2">{{ $t('project.general.results') }}</h2>
                <p class="is-medium mb-50">En tant que <strong>1er projet du genre au Canada</strong>, SAUVéR finit sa phase pilote avec <strong>7 municipalités à travers le Québec</strong>. Lancé en ligne en début janvier 2017, le projet a récolté beaucoup de traction.</p>

                <div class="columns is-multiline is-mobile is-clients mb-60">
                    <div class="column is-half-mobile">
                        <div class="v-center">
                            <img src="~assets/img/projects/sauver/cities/plessisville.png" alt="Plessisville">
                        </div>
                    </div>
                    <div class="column is-half-mobile">
                        <div class="v-center">
                            <img src="~assets/img/projects/sauver/cities/bromont.png" alt="Bromont">
                        </div>
                    </div>
                    <div class="column is-half-mobile">
                        <div class="v-center">
                            <img src="~assets/img/projects/sauver/cities/nicolet.png" alt="Nicolet">
                        </div>
                    </div>
                    <div class="column is-half-mobile">
                        <div class="v-center">
                            <img src="~assets/img/projects/sauver/cities/riviere-du-loup.png" alt="Rivière du loup">
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">10+</div>
                        <span class="has-text-grey is-size-5">véhicules enregistrés</span>
                    </div>
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">100+</div>
                        <span class="has-text-grey is-size-5">utilisateurs actifs</span>
                    </div>
                    <div class="column">
                        <div class="is-size-2 has-text-weight-semibold">1500+</div>
                        <span class="has-text-grey is-size-5">réservations</span>
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
            en: '/projects/sauver',
            fr: '/projets/sauver'
        }
    },
    head() {
        return {
            title: this.$t('pages.projects.sauver')
        }
    }
}
</script>