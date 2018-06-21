<template>
    <div>
        <transition name="scale" mode="out-in">
        <form v-if="!sent" class="form" v-loading="loading" @submit.prevent="send()">

            <b-field :label="$t('pages.contact.name')" :type="errors.has('name') ? 'is-danger': ''" :message="errors.has('name') ? errors.first('name') : ''">
                <b-input type="text" name="name" v-model="form.name" v-validate="'required'"></b-input>
            </b-field>

            <b-field :label="$t('pages.contact.email')" :type="errors.has('email') ? 'is-danger': ''" :message="errors.has('email') ? errors.first('email') : ''">
                <b-input type="email" name="email" v-model="form.email" v-validate="'required|email'"></b-input>
            </b-field>

            <b-field label="Budget"></b-field>

            <b-field>
                <b-radio-button v-model="form.budget"
                    native-value="10 000$ to 20 000$">
                    10k {{ $t('pages.contact.to') }} 20k
                </b-radio-button>
                <b-radio-button v-model="form.budget"
                    native-value="20 000$ to 50 000$">
                    20k {{ $t('pages.contact.to') }} 50k
                </b-radio-button>
                <b-radio-button v-model="form.budget"
                    native-value="50 000$ to 100 000$ ">
                    50k {{ $t('pages.contact.to') }} 100k
                </b-radio-button>
                <b-radio-button v-model="form.budget"
                    native-value="100 000$ +">
                    100k +
                </b-radio-button>
            </b-field>

            <b-field label="Message" :type="errors.has('message') ? 'is-danger': ''" :message="errors.has('message') ? errors.first('message') : ''">
                <b-input type="textarea" name="message" v-model="form.message" v-validate="'required|min:5'"></b-input>
            </b-field>

            <b-field :label="$t('pages.contact.contacted-by-phone')">
                <div class="field">
                    <b-checkbox v-model="form.contact_by_phone"
                        native-value="true">
                        {{ $t('pages.contact.yes-please') }}
                    </b-checkbox>
                </div>
            </b-field>

            <div v-show="form.contact_by_phone" class="mb-15">
                <b-field :label="$t('pages.contact.phone')" :type="errors.has('phone') ? 'is-danger': ''" :message="errors.has('phone') ? errors.first('phone') : ''">
                    <b-input type="text" name="phone" v-model="form.phone" v-validate="{required: this.form.contact_by_phone}"></b-input>
                </b-field>

                <b-field :label="$t('pages.contact.when-available')"></b-field>

                <b-field>
                    <b-checkbox-button v-model="form.day"
                        native-value="Monday">
                        {{ $t('pages.contact.monday') }}
                    </b-checkbox-button>
                    <b-checkbox-button v-model="form.day"
                        native-value="Tuesday">
                        {{ $t('pages.contact.tuesday') }}
                    </b-checkbox-button>
                    <b-checkbox-button v-model="form.day"
                        native-value="Wednesday ">
                        {{ $t('pages.contact.wednesday') }}
                    </b-checkbox-button>
                    <b-checkbox-button v-model="form.day"
                        native-value="Thursday">
                        {{ $t('pages.contact.thursday') }}
                    </b-checkbox-button>
                    <b-checkbox-button v-model="form.day"
                        native-value="Friday">
                        {{ $t('pages.contact.friday') }}
                    </b-checkbox-button>
                    <b-checkbox-button v-model="form.day"
                        native-value="Saturday">
                        {{ $t('pages.contact.saturday') }}
                    </b-checkbox-button>
                    <b-checkbox-button v-model="form.day"
                        native-value="Sunday">
                        {{ $t('pages.contact.sunday') }}
                    </b-checkbox-button>
                </b-field>

                <b-field :label="$t('pages.contact.which-time')"></b-field>

                <b-field>
                    <b-checkbox-button v-model="form.time"
                        native-value="AM">
                        AM
                    </b-checkbox-button>
                    <b-checkbox-button v-model="form.time"
                        native-value="PM">
                        PM
                    </b-checkbox-button>
                </b-field>
            </div>

            <input type="submit" class="button is-primary is-rounded is-medium mt-20" value="Submit">

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
                    budget: null,
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
                this.$validator.validate().then(result => {
                    if (result) {
                        this.sendRequest()
                    } else {
                        this.loading = false
                    }
                });
            },
            sendRequest() {
                let data = {
                    "text": "New message on witify.io 🤗",
                    "attachments": [
                        {
                            "title": this.form.name + ' @' + this.form.email + ' (' + this.form.budget + ')',
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
                    this.$snackbar.open({
                        message: 'The contact form is not working currently! Please contact us directly :)',
                        type: 'is-danger',
                        queue: false
                    })
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