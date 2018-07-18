<template>
    <div class="quote">
        <div class="container">
            <transition name="slideLeftRight" mode="out-in">
                <q v-if="key == 1" class="quote-text" key="1">
                    Avec Witify, on n’a simplement plus besoin d’autre chose. C’est une solution clé-en-main, exactement comme on le souhaitait, quand on en avait besoin dans les délais qui nous convenait. Franchement, si tous les fournisseurs étaient de cette trempe, les affaires seraient tellement facile ! Merci Witify
                </q>
                <q v-else-if="key == 2" class="quote-text" key="2">
                    Par son professionnalisme et sa sensibilité au contenu, Witify a mis sur pied rapidement une interface dynamique et innovante permettant la compréhension d’un jeu de données complexe. Je n’hésiterai pas à faire de nouveau appel à Witify pour un prochain projet!
                </q>
                <q v-else-if="key == 3" class="quote-text" key="3">
                    Witify has operated as our in-house dev and design team supporting us on our startup journey, and have exceeded our expectations as a reflection of their passion for their work.
                </q>
            </transition>
        </div>
        <div class="container">
            <div class="quote-clients">

                <button class="quote-client" :class="{'is-active': key == 1}" @click="select(1)">
                    <div class="media">
                        <div class="media-left">
                            <div class="profile-picture" :style="{ 'background-image': 'url(' + castonguay + ')' }"></div>
                        </div>
                        <div class="media-content">
                            <h3 class="title is-size-5">Sylvain Castonguay</h3>
                            <h4 class="subtitle is-size-6">Founder and CEO of <br>Nordresa</h4>
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
                            <h4 class="subtitle is-size-6">Consultant en informatique <br>appliquée à l'histoire</h4>
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
                            <h4 class="subtitle is-size-6">Co-Founder and CTO of <br>BC communications</h4>
                        </div>
                    </div>
                </button>
                
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
                    if (this.key < 3) {
                        this.key++
                    } else {
                        this.key = 1
                    }
                }
                this.hasClicked = false
            }, 5000)
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
            }
        }
    }
</script>
