<template>
    <div class="wrapper">
        <div class="page-contact">

            <section class="hero is-main">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">{{ $t('pages.contact.title') }}</h1>
                        <h2 class="subtitle">{{ $t('pages.contact.subtitle') }}</h2>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="columns">
                        <div class="column is-one-third-desktop">
                            <h2 class="title">{{ $t('pages.contact.coordinates') }}</h2>
                            
                            <div class="is-size-5">
                                <strong>{{ $t('pages.contact.email') }}</strong><br>
                                <div class="mb-30"><a href="mailto:info@witify.io">info@witify.io</a></div>

                                <strong>{{ $t('pages.contact.phone') }}</strong><br>
                                <div class="mb-30"><a href="tel:(514) 916-3026">(514) 916-3026</a></div>

                                <strong>{{ $t('pages.contact.address') }}</strong><br>
                                <div>333 Sherbrooke E, 705</div>
                                <div>Montréal (Québec) H2X 4E3</div>
                                <div class="mb-25">Canada</div>

                                <div class="mb-30">
                                    <a href="https://twitter.com/WitifyInc">
                                        <div class="icon">
                                            <i class="mdi mdi-twitter"></i>
                                        </div>
                                    </a>
                                    <a href="https://dribbble.com/francoislevesque">
                                        <div class="icon">
                                            <i class="mdi mdi-dribbble"></i>
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/company/witify">
                                        <div class="icon">
                                            <i class="mdi mdi-linkedin"></i>
                                        </div>
                                    </a>
                                    <a href="https://www.facebook.com/witify/">
                                        <div class="icon">
                                            <i class="mdi mdi-facebook"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <contact-form></contact-form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
export default {
    nuxtI18n: {
        paths: {
            en: '/contact-us',
            fr: '/nous-joindre'
        }
    },
    components: {
        'contact-form': ContactForm
    },
    head() {
        return {
            title: this.$t('pages.contact.title')
        }
    }
}
</script>