<template>
    <div class="is-cta hero has-text-centered has-border-bottom has-border-top is-bold" :class="'is-' + selected">

        <div class="hero-body" :class="'is-' + selected">

            <h1 class="heading ">
                {{ $t('pages.cta.title') }}
            </h1>

            <div class="buttons mt-10">

                <button class="button is-medium is-rounded is-process-optimisation" :class="{'is-inverted is-outlined': selected !== 'process-optimisation'}" @click="selected = 'process-optimisation'">
                    <div class="icon">
                        <i class="mdi mdi-rocket"></i>
                    </div>
                    <span>{{ $t('pages.services.process-optimisation') }}</span>
                </button>

                <button class="button is-medium is-rounded is-e-commerce" :class="{'is-inverted is-outlined': selected !== 'e-commerce'}" @click="selected = 'e-commerce'">
                    <div class="icon">
                        <i class="mdi mdi-store"></i>
                    </div>
                    <span>{{ $t('pages.services.e-commerce') }}</span>
                </button>

                <button class="button is-medium is-rounded is-custom-application" :class="{'is-inverted is-outlined': selected !== 'custom-application'}" @click="selected = 'custom-application'">
                    <div class="icon">
                        <i class="mdi mdi-server-network"></i>
                    </div>
                    <span>{{ $t('pages.services.custom-application') }}</span>
                </button>

            </div>
            
            <transition name="cta" mode="out-in">

                <div v-if="selected == 'process-optimisation'" class="service" key="1">

                    <h2 class="title">{{ $t('pages.cta.process-optimisation-text') }}</h2>
                    <nuxt-link :to="localePath('contact')" class="button is-medium is-white">
                        <span>{{ $t('pages.cta.free-business-analysis') }}</span>
                        <span class="icon">
                            <i class="mdi mdi-arrow-right"></i>
                        </span>
                    </nuxt-link>

                </div>

                <div v-if="selected == 'e-commerce'" class="service" key="1">

                    <h2 class="title">{{ $t('pages.cta.e-commerce-text') }}</h2>
                    <nuxt-link :to="localePath('contact')" class="button is-medium is-white">
                        <span>{{ $t('pages.cta.free-business-analysis') }}</span>
                        <span class="icon">
                            <i class="mdi mdi-arrow-right"></i>
                        </span>
                    </nuxt-link>

                </div>

                <div v-if="selected == 'custom-application'" class="service" key="1">

                    <h2 class="title">{{ $t('pages.cta.custom-application-text') }}</h2>
                    <nuxt-link :to="localePath('contact')" class="button is-medium is-white">
                        <span>{{ $t('pages.cta.free-business-analysis') }}</span>
                        <span class="icon">
                            <i class="mdi mdi-arrow-right"></i>
                        </span>
                    </nuxt-link>

                </div>

            </transition>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 'process-optimisation'
        }
    }
}
</script>
