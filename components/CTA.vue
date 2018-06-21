<template>
    <div class="cta">

        <div class="hero is-black">
            <div class="hero-body">
                <div class="container is-small">
                    <h1 class="title">
                        {{ $t('pages.cta.see-what-witify') }}
                    </h1>
                    <h2 class="subtitle">
                        {{ $t('pages.cta.fill-the-form') }}
                    </h2>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="selections">
                <button class="selection is-process-optimisation" :class="{'is-active': selected == 'process-optimisation'}" @click="selected = 'process-optimisation'">
                    <div class="selection-circle"></div>
                    <div class="selection-icon icon">
                        <i class="mdi mdi-rocket"></i>
                    </div>
                    <div class="selection-label">{{ $t('pages.services.process-optimisation') }}</div>
                </button>
                <button class="selection is-e-commerce" :class="{'is-active': selected == 'e-commerce'}" @click="selected = 'e-commerce'">
                    <div class="selection-circle"></div>
                    <div class="selection-icon icon">
                        <i class="mdi mdi-store"></i>
                    </div>
                    <div class="selection-label">{{ $t('pages.services.e-commerce') }}</div>
                </button>
                <button class="selection is-custom-application" :class="{'is-active': selected == 'custom-application'}" @click="selected = 'custom-application'">
                    <div class="selection-circle"></div>
                    <div class="selection-icon icon">
                        <i class="mdi mdi-server-network"></i>
                    </div>
                    <div class="selection-label">{{ $t('pages.services.custom-application') }}</div>
                </button>
            </div>

            <transition name="cta" mode="out-in">

                <div v-if="selected == 'process-optimisation'" class="service" key="1">
                    <div class="columns is-gapless">
                        <div class="column is-half">
                            <div class="service-image-wrapper">
                                <img src="~assets/img/cta/process-optimisation.jpg" alt="Process optimisation service" class="service-image">
                            </div>
                        </div>
                        <div class="column is-half">
                            <div class="service-content">
                                <p>{{ $t('pages.cta.process-optimisation-text') }}</p>
                                <button class="button is-medium is-process-optimisation">
                                    <span>{{ $t('pages.cta.free-business-analysis') }}</span>
                                    <span class="icon">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="selected == 'e-commerce'" class="service" key="2">
                    <div class="columns is-gapless">
                        <div class="column is-half">
                            <div class="service-image-wrapper">
                                <img src="~assets/img/cta/e-commerce.jpg" alt="E-commerce service" class="service-image">
                            </div>
                        </div>
                        <div class="column is-half">
                            <div class="service-content">
                                <p>{{ $t('pages.cta.e-commerce-text') }}</p>
                                <button class="button is-medium is-e-commerce">
                                    <span>{{ $t('pages.cta.free-business-analysis') }}</span>
                                    <span class="icon">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="selected == 'custom-application'" class="service" key="3">
                    <div class="columns is-gapless">
                        <div class="column is-half">
                            <div class="service-image-wrapper">
                                <img src="~assets/img/cta/custom-application.jpg" alt="Custom application service" class="service-image">
                            </div>
                        </div>
                        <div class="column is-half">
                            <div class="service-content">
                                <p>{{ $t('pages.cta.custom-application-text') }}</p>
                                <button class="button is-medium is-custom-application">
                                    <span>{{ $t('pages.cta.free-business-analysis') }}</span>
                                    <span class="icon">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
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
