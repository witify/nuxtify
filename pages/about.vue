<template>
    <div class="page-about">

        <div class="hero is-main is-fullheight is-dark is-center">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-spaced">{{ $t('pages.about.title') }}</h1>
                    <h2 class="subtitle" v-html="$t('pages.about.subtitle')"></h2>
                </div>
            </div>

            <div class="scroll-to" v-scroll-to="'#content'">
                <div class="icon">
                    <i class="mdi mdi-chevron-down"></i>
                </div>
            </div>
        </div>

        <section id="content" class="section is-excellence">
            <div class="container">

                <div class="columns">
                    <div class="column is-half">

                        <div class="media is-aligned mb-40">
                            <div class="media-left">
                                <div class="icon is-circle has-text-primary">
                                    <i class="mdi mdi-trophy"></i>
                                </div>
                            </div>
                            <div class="media-content">
                                <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.excellence') }}</h2>
                            </div>
                        </div>

                        <p class="is-lead mb-20">{{ $t('pages.about.excellence-text-1') }}</p>
                        <p class="is-medium">{{ $t('pages.about.excellence-text-2') }}</p>

                        <div class="mt-50">
                            <h2 class="title is-size-3 has-text-weight-normal">What makes our products <strong class="has-text-weight-bold">SUPER</strong></h2>
                            <p class="is-medium mb-50">We combine talent and hard work to provide the best tools and the best results. Our team understands your desire to differentiate itself.</p>

                            <h3 class="title is-size-5 mb-5">Secure</h3>
                            <p class="is-medium mb-30">All our web applications are protected against the common <strong>cyper-attacks</strong> and apply the best practices in terms of privacy and <strong>data protection</strong>.</p>

                            <h3 class="title is-size-5 mb-5">Usable</h3> 
                            <p class="is-medium mb-30">Each digital product we craft is built to offer the <strong>best user experience</strong> possible. Our interfaces are fast and easy to use and learn.</p>

                            <h3 class="title is-size-5 mb-5">Powerful</h3>
                            <p class="is-medium mb-30">Every product we build is custom made and specificaly tailored for our client. By switching to a custom solution, many of our clients saw a <strong>hude upgrade in terms of performance, efficiency and usability</strong>.</p>
                            
                            <h3 class="title is-size-5 mb-5">Efficient</h3>
                            <p class="is-medium mb-30">Our products are blazing fast on every plaforms. They are tailored to our clients needs, <strong>making every action faster and easier to learn</strong>.</p>
                                  
                            <h3 class="title is-size-5 mb-5">Reliable</h3>
                            <p class="is-medium mb-30">Each web solution is hosted on entreprise-level servers. Your data is safely stored and duplicated on the cloud. The high quality of our code allows for easy updates and greater reliability.</p>

                        </div>

                    </div>
                </div>
                
            </div>
        </section>

        <section class="section is-grey">
            <div class="container">

                <div class="media is-aligned mb-40">
                    <div class="media-left">
                        <div class="icon is-circle is-grey has-text-primary">
                            <i class="mdi mdi-account-group"></i>
                        </div>
                    </div>
                    <div class="media-content">
                        <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.collaboration') }}</h2>
                    </div>
                </div>

                <div class="columns is-variable is-8">
                    <div class="column">
                        <p class="is-lead mb-20">We believe that every success comes from a strong and sincere cooperation.</p>
                        <p class="is-medium">At witify, we place great importance on teamwork. Whether internally, ensuring a strong self-help dynamic. Or with our clientele, which is built on transparency and accessible communication at all times. We are here, we are humans and we want to build the bridges of a lasting relationship.</p>
                    </div>
                    <div class="column">
                        <p class="is-size-4 is-italic">"Witify is one of the few web agencies that really listens to its customers. My projects have always been completed with care and speed."</p>
                        <div class="has-text-right-tablet mt-20">
                            <p class="is-size-3 has-text-weight-semibold" style="line-height: 1">John Doe</p>
                            <span>CTO at Acme</span>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <section class="diptych">
            <div class="container">
                <div class="diptych-body">
                    <div class="media is-aligned mb-40">
                        <div class="media-left">
                            <div class="icon is-circle has-text-primary">
                                <i class="mdi mdi-fire"></i>
                            </div>
                        </div>
                        <div class="media-content">
                            <h2 class="title is-size-3 is-spaced">{{ $t('pages.about.boldness') }}</h2>
                        </div>
                    </div>

                    <p class="is-lead mb-20">Our team is bold and innovative. We dare to seize opportunities and turn the challenges that may be in your way into assets.</p>
                    <p class="is-medium">Each event is an opportunity to push the boundaries of innovation and creativity. We believe that it is important to undertake projects, to overcome obstacles and to constantly aspire to better than the status quo.</p>

                </div>
            </div>
            <div class="diptych-image">
                <img src="~assets/img/projects/start-alberta/mobile-ui.jpg" alt="Boldness in Witify's projects">
            </div>
        </section>

        <cta></cta>
        
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
    },
    head() {
        return {
            title: this.$t('pages.about.title')
        }
    }
}
</script>
