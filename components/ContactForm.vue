<template>
    <div>
        <transition name="scale" mode="out-in">
        
            <form v-if="!sent" class="form" v-loading="loading" @submit.prevent="send()">

                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label for="" class="label">{{ $t('pages.contact.name') }}</label>
                            <input class="input" type="text" name="name" v-model="form.name" required />
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label for="" class="label">{{ $t('pages.contact.email') }}</label>
                            <input class="input" type="email" name="email" v-model="form.email" required />
                        </div>
                    </div>
                </div>

                <div class="field">
                    <label class="label">{{ $t('pages.contact.message') }}</label>
                    <textarea cols="20" rows="5" class="textarea" v-model="form.message" minlength="3" required></textarea>
                </div>

                <div class="field">
                    <label class="label">{{ $t('pages.contact.contacted-by-phone') }}</label>
                </div>

                <div class="field">

                    <label class="radio" required>
                        <input type="radio" v-model="form.contact_by_phone" :value="false" />
                        {{ $t('pages.contact.no') }}
                    </label>

                    <label class="radio" required>
                        <input type="radio" v-model="form.contact_by_phone" :value="true" />
                        {{ $t('pages.contact.yes-please') }}
                    </label>

                </div>

                <div v-show="form.contact_by_phone" class="mb-15">
                    <div class="field">
                        <label class="label">{{ $t('pages.contact.phone') }}</label>
                        <input class="input" type="text" name="phone" v-model="form.phone" :required="this.form.contact_by_phone" />
                    </div>

                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label">{{ $t('pages.contact.when-available') }}</label>
                            </div>

                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox" value="Monday" v-model="form.day">
                                    {{ $t('pages.contact.monday') }}
                                </label>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox" value="Tuesday" v-model="form.day">
                                    {{ $t('pages.contact.tuesday') }}
                                </label>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox" value="Wednesday" v-model="form.day">
                                    {{ $t('pages.contact.wednesday') }}
                                </label>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox" value="thursday" v-model="form.day">
                                    {{ $t('pages.contact.thursday') }}
                                </label>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox" value="friday" v-model="form.day">
                                    {{ $t('pages.contact.friday') }}
                                </label>
                            </div>
                        </div>

                        <div class="column">
                            <div class="field">
                                <label class="label">{{ $t('pages.contact.which-time') }}</label>
                            </div>

                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox" v-model="form.time" value="AM" />
                                    AM
                                </label>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox" v-model="form.time" value="PM" />
                                    PM
                                </label>
                            </div>
                        </div>

                    </div>
                </div>

                <button class="button is-primary is-rounded is-medium mt-20">
                    <span>{{ $t('pages.contact.submit') }}</span>
                </button>

            </form>
            <div v-else class="sent has-text-centered">
                <div>
                    <span class="icon is-large has-text-success">
                        <i class="mdi mdi-checkbox-marked-circle-outline mdi-48px"></i>
                    </span>
                    <br>
                    <h3 class="title is-3">{{ $t('pages.contact.message-sent') }}</h3>
                    <h4 class="subtitle is-5">{{ $t('pages.contact.back-to-you') }}</h4>
                </div>
            </div>

        </transition>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
        data () {
            return {
                form: {
                    name: '',
                    email: '',
                    message: '',
                    contact_by_phone: false,
                    phone: '',
                    day: [],
                    time: []
                },
                sent: false,
                loading: false,
            }
        },
        methods: {
            send () {
                this.loading = true
                this.sendRequest()
            },
            sendRequest() {
                let data = {
                    "text": "New message " + this.$config.app.url + " 🤗",
                    "attachments": [
                        {
                            "title": this.form.name + ' @' + this.form.email,
                            "text": this.form.message + '\n' + this.form.phone + '\n' + this.form.day.join(', ') + '\n' + this.form.time.join(' + ') + '\n'
                        }
                    ]
                }
                axios.post('https://hooks.slack.com/services/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', JSON.stringify(data))
                .then(response => {
                    this.sent = true
                    this.loading = false
                })
                .catch(error => {
                    this.loading = false
                    alert('The contact form is not working currently! Please contact us directly :)')
                })
            }
        }
    }
</script>

<style scoped>
.sent {
    padding: 30px 0;
}
</style>