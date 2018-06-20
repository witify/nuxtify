<template>
    <div class="wrapper">
        <div class="page-about">
            
            <section class="hero is-main">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">About</h1>
                        <h2 class="subtitle">Praesent ut ligula non mi varius sagittis. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. In ut quam vitae odio lacinia tincidunt. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Etiam ultricies nisi vel augue.</h2>
                    </div>
                </div>
            </section>

            <section class="section is-medium">
                <div class="container">
                    <div class="columns is-variable is-7">
                        <div class="column">
                            <h2 class="title is-size-3 is-spaced">Excellence</h2>
                            <h3 class="subtitle is-size-5 has-text-grey">Curabitur turpis. Fusce fermentum. Nulla porta dolor. Phasellus gravida semper nisi. Nullam dictum felis eu pede mollis pretium. Donec mollis hendrerit risus. Curabitur at lacus ac velit ornare lobortis. Nunc nulla. Aenean massa. Vestibulum volutpat pretium libero.</h3>
                            <br>
                        </div>
                        <div class="column">
                            <h2 class="title is-size-3 is-spaced">Collaboration</h2>
                            <h3 class="subtitle is-size-5 has-text-grey">Curabitur turpis. Fusce fermentum. Nulla porta dolor. Phasellus gravida semper nisi. Nullam dictum felis eu pede mollis pretium. Donec mollis hendrerit risus. Curabitur at lacus ac velit ornare lobortis. Nunc nulla. Aenean massa. Vestibulum volutpat pretium libero.</h3>
                            <br>
                        </div>
                        <div class="column">
                            <h2 class="title is-size-3 is-spaced">Audacity</h2>
                            <h3 class="subtitle is-size-5 has-text-grey">Curabitur turpis. Fusce fermentum. Nulla porta dolor. Phasellus gravida semper nisi. Nullam dictum felis eu pede mollis pretium. Donec mollis hendrerit risus. Curabitur at lacus ac velit ornare lobortis. Nunc nulla. Aenean massa. Vestibulum volutpat pretium libero.</h3>
                            <br>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>

<script>
export default {
    layout: 'default',
    nuxtI18n: {
        paths: {
            en: '/about-us',
            fr: '/a-propos'
        }
    }
}
</script>
