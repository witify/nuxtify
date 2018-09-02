<template>
    <div class="quote">
    
        <div class="container">
        
            <div class="quote-content">
                <transition name="slideLeftRight" mode="out-in">
                    <q v-if="key == 1" class="quote-text" key="1">
                        {{ $t('pages.reviews.nordresa-feedback') }}
                    </q>
                    <q v-else-if="key == 2" class="quote-text" key="2">
                        {{ $t('pages.reviews.mcc-feedback') }}
                    </q>
                    <q v-else-if="key == 3" class="quote-text" key="3">
                        {{ $t('pages.reviews.sauver-feedback') }}
                    </q>
                </transition>
            </div>

            <div class="quote-clients">

                <button class="quote-client" :class="{'is-active': key == 1}" @click="select(1)">
                    <div class="media">
                        <div class="media-left">
                            <div class="profile-picture" :style="{ 'background-image': 'url(' + castonguay + ')' }"></div>
                        </div>
                        <div class="media-content">
                            <h3 class="title is-size-5">Sylvain Castonguay</h3>
                            <h4 class="subtitle is-size-6" v-html="$t('pages.reviews.nordresa-role')"></h4>
                        </div>
                    </div>
                </button>

                <button class="quote-client" :class="{'is-active': key == 2}" @click="select(2)">
                    <div class="media">
                        <div class="media-left">
                            <div class="profile-picture" :style="{ 'background-image': 'url(' + michon + ')' }"></div>
                        </div>
                        <div class="media-content">
                            <h3 class="title is-size-5">Philippe Michon</h3>
                            <h4 class="subtitle is-size-6" v-html="$t('pages.reviews.mcc-role')"></h4>
                        </div>
                    </div>
                </button>

                <button class="quote-client" :class="{'is-active': key == 3}" @click="select(3)">
                    <div class="media">
                        <div class="media-left">
                            <div class="profile-picture"></div>
                        </div>
                        <div class="media-content">
                            <h3 class="title is-size-5">John Doe</h3>
                            <h4 class="subtitle is-size-6" v-html="$t('pages.reviews.sauver-role')"></h4>
                        </div>
                    </div>
                </button>
                
            </div>

            <div class="icon is-circle is-grey quote-arrow quote-arrow-left" @click="prev()">
                <i class="mdi mdi-chevron-left"></i>
            </div>
            <div class="icon is-circle is-grey quote-arrow quote-arrow-right" @click="next()">
                <i class="mdi mdi-chevron-right"></i>
            </div>

        </div>

    </div>
</template>

<script>
    import castonguay from '~/assets/img/home/castonguay.jpg'
    import michon from '~/assets/img/home/michon.jpg'

    export default {
        created() {
            setInterval(() => {
                if (!this.hasClicked) {
                    this.next()
                }
                this.hasClicked = false
            }, 10000)
        },
        data() {
            return {
                key: 1,
                hasClicked: false,
                castonguay: castonguay,
                michon: michon,
            }
        },
        methods: {
            select(key) {
                this.key = key
                this.hasClicked = true
            },
            prev() {
                if (this.key > 1) {
                    this.key--
                } else {
                    this.key = 3
                }
            },
            next() {
                if (this.key < 3) {
                    this.key++
                } else {
                    this.key = 1
                }
            }
        }
    }
</script>
