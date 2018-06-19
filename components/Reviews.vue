<template>
    <div class="quote">
        <div class="container">
            <transition name="slideLeftRight" mode="out-in">
                <q v-if="key == 1" class="quote-text" key="1">
                    Witify has operated as our in-house dev and design team supporting us on our startup journey, and have exceeded our expectations as a reflection of their passion for their work.
                </q>
                <q v-else-if="key == 2" class="quote-text" key="2">
                    Witify has operated as our in-house dev and design team supporting us on our startup journey, and have exceeded our expectations as a reflection of their passion for their work.
                </q>
                <q v-else-if="key == 3" class="quote-text" key="3">
                    Witify has operated as our in-house dev and design team supporting us on our startup journey, and have exceeded our expectations as a reflection of their passion for their work.
                </q>
            </transition>
        </div>
        <div class="container">
            <div class="quote-clients">
                <div class="columns">

                    <div class="column">
                        <button class="quote-client" :class="{'is-active': key == 1}" @click="select(1)">
                            <div class="media">
                                <div class="media-left">
                                    <div class="profile-picture"></div>
                                </div>
                                <div class="media-content">
                                    <h3 class="title is-size-5">John Doe</h3>
                                    <h4 class="subtitle is-size-6">Co-Founder and CTO of <br>BC communications</h4>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div class="column">
                        <button class="quote-client" :class="{'is-active': key == 2}" @click="select(2)">
                            <div class="media">
                                <div class="media-left">
                                    <div class="profile-picture"></div>
                                </div>
                                <div class="media-content">
                                    <h3 class="title is-size-5">John Doe</h3>
                                    <h4 class="subtitle is-size-6">Co-Founder and CTO of <br>BC communications</h4>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div class="column">
                        <button class="quote-client" :class="{'is-active': key == 3}" @click="select(3)">
                            <div class="media">
                                <div class="media-left">
                                    <div class="profile-picture"></div>
                                </div>
                                <div class="media-content">
                                    <h3 class="title is-size-5">John Doe</h3>
                                    <h4 class="subtitle is-size-6">Co-Founder and CTO of <br>BC communications</h4>
                                </div>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            setInterval(() => {
                if (!this.hasClicked) {
                    if (this.key < 3) {
                        this.key++
                    } else {
                        this.key = 1
                    }
                }
                this.hasClicked = false
            }, 3000)
        },
        data() {
            return {
                key: 1,
                hasClicked: false
            }
        },
        methods: {
            select(key) {
                this.key = key
                this.hasClicked = true
            }
        }
    }
</script>
