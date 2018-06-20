<template>

    <div class="wrapper">
        <div class="projects-page">

            <section class="hero is-main">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">Featured projects.</h1>
                        <h2 class="subtitle">In turpis. Aenean massa. Nullam accumsan lorem in dui. Vivamus euismod mauris. Phasellus accumsan cursus velit.</h2>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="columns is-variable is-8 is-multiline">

                        <div class="column is-half">
                            <div class="project-card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="~assets/img/projects/start-alberta/thumbnail.jpg" alt="Start Alberta">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <h2 class="title">Start Alberta</h2>
                                    <h3 class="subtitle">Alberta's startup community</h3>
                                </div>
                            </div>
                        </div>

                        <div class="column is-half">
                            <div class="project-card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="~assets/img/projects/pneus-a-petits-prix/thumbnail.jpg" alt="Start Alberta">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <h2 class="title">Low cost tires</h2>
                                    <h3 class="subtitle">E-commerce specialized on tires</h3>
                                </div>
                            </div>
                        </div>

                        <div class="column is-half">
                            <div class="project-card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="~assets/img/projects/boursify/thumbnail.jpg" alt="Boursify">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <h2 class="title">Boursify</h2>
                                    <h3 class="subtitle">Stock market simulations</h3>
                                </div>
                            </div>
                        </div>

                        <div class="column is-half">
                            <div class="project-card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="~assets/img/projects/mcc/thumbnail.jpg" alt="Ministère de la culture et de l'éducation">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <h2 class="title">Quebec history</h2>
                                    <h3 class="subtitle">Cultural Heritage Platform</h3>
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
                                    <h2 class="title">Jussaume</h2>
                                    <h3 class="subtitle">Digital discoveries for Jussaume</h3>
                                </div>
                            </div>
                        </div>

                        <div class="column is-half">
                            <div class="project-card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="~assets/img/projects/sauver/thumbnail.jpg" alt="Mobilier Jussaume">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <h2 class="title">SAUVéR Systems</h2>
                                    <h3 class="subtitle">Real-time car sharing platform</h3>
                                </div>
                            </div>
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
