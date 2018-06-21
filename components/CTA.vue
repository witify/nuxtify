<template>
    <div class="cta">

        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container is-small">
                    <h1 class="title">
                        See what Witify can do for your business
                    </h1>
                    <h2 class="subtitle">
                        Fill out the form to get instant insights regarding your business
                    </h2>
                    <div class="icon is-circle">
                        <i class="mdi mdi-arrow-down has-text-white"></i>
                    </div>
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
                    <div class="selection-label">Process optimisation</div>
                </button>
                <button class="selection is-e-commerce" :class="{'is-active': selected == 'e-commerce'}" @click="selected = 'e-commerce'">
                    <div class="selection-circle"></div>
                    <div class="selection-icon icon">
                        <i class="mdi mdi-store"></i>
                    </div>
                    <div class="selection-label">E-commerce</div>
                </button>
                <button class="selection is-custom-application" :class="{'is-active': selected == 'custom-application'}" @click="selected = 'custom-application'">
                    <div class="selection-circle"></div>
                    <div class="selection-icon icon">
                        <i class="mdi mdi-server-network"></i>
                    </div>
                    <div class="selection-label">Custom application</div>
                </button>
            </div>

            <transition name="cta" mode="out-in">

                <div v-if="selected == 'process-optimisation'" class="service" key="1">
                    <div class="columns is-gapless">
                        <div class="column is-half">
                            <div class="service-image-wrapper">
                                <img src="~assets/img/services/process-optimisation/illustration.svg" alt="Process optimisation service" class="service-image">
                            </div>
                        </div>
                        <div class="column is-half">
                            <div class="service-content">
                                <p class="is-medium">Praesent blandit laoreet nibh. Praesent venenatis metus at tortor pulvinar varius. Vestibulum dapibus nunc ac augue. Etiam vitae tortor. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Praesent adipiscing. Praesent egestas neque eu enim.</p>
                                <button class="button is-medium is-process-optimisation">
                                    <span>Begin a free business analysis</span>
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
                                <img src="~assets/img/services/e-commerce/illustration.svg" alt="E-commerce service" class="service-image">
                            </div>
                        </div>
                        <div class="column is-half">
                            <div class="service-content">
                                <p class="is-medium">Praesent blandit laoreet nibh. Praesent venenatis metus at tortor pulvinar varius. Vestibulum dapibus nunc ac augue. Etiam vitae tortor. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Praesent adipiscing. Praesent egestas neque eu enim.</p>
                                <button class="button is-medium is-e-commerce">
                                    <span>Begin a free business analysis</span>
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
                                <img src="~assets/img/services/custom-application/illustration.svg" alt="Custom application service" class="service-image">
                            </div>
                        </div>
                        <div class="column is-half">
                            <div class="service-content">
                                <p class="is-medium">Praesent blandit laoreet nibh. Praesent venenatis metus at tortor pulvinar varius. Vestibulum dapibus nunc ac augue. Etiam vitae tortor. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Praesent adipiscing. Praesent egestas neque eu enim.</p>
                                <button class="button is-medium is-custom-application">
                                    <span>Begin a free business analysis</span>
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
