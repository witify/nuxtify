<template>
  <div>
    <transition
      name="scale"
      mode="out-in"
    >
      <form
        v-if="!sent"
        v-loading="loading"
        class="form"
        @submit.prevent="send()"
      >
        <div class="columns">
          <div class="column">
            <div class="field">
              <label
                for=""
                class="label"
              >{{ $t('pages.contact.name') }}</label>
              <input
                v-model="form.name"
                class="input"
                type="text"
                name="name"
                required
              >
            </div>
          </div>
          <div class="column">
            <div class="field">
              <label
                for=""
                class="label"
              >{{ $t('pages.contact.email') }}</label>
              <input
                v-model="form.email"
                class="input"
                type="email"
                name="email"
                required
              >
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">{{ $t('pages.contact.message') }}</label>
          <textarea
            v-model="form.message"
            cols="20"
            rows="5"
            class="textarea"
            minlength="3"
            required 
          />
        </div>

        <div class="field">
          <label class="label">{{ $t('pages.contact.contacted_by_phone') }}</label>
        </div>

        <div class="field">
          <label
            class="radio"
            required
          >
            <input
              v-model="form.contact_by_phone"
              type="radio"
              :value="false"
            >
            {{ $t('pages.contact.no') }}
          </label>

          <label
            class="radio"
            required
          >
            <input
              v-model="form.contact_by_phone"
              type="radio"
              :value="true"
            >
            {{ $t('pages.contact.yes_please') }}
          </label>
        </div>

        <div
          v-show="form.contact_by_phone"
          class="mb-15"
        >
          <div class="field">
            <label class="label">{{ $t('pages.contact.phone') }}</label>
            <input
              v-model="form.phone"
              class="input"
              type="text"
              name="phone"
              :required="this.form.contact_by_phone"
            >
          </div>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">{{ $t('pages.contact.when_available') }}</label>
              </div>

              <div class="field">
                <label class="checkbox">
                  <input
                    v-model="form.day"
                    type="checkbox"
                    value="Monday"
                  >
                  {{ $t('pages.contact.monday') }}
                </label>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input
                    v-model="form.day"
                    type="checkbox"
                    value="Tuesday"
                  >
                  {{ $t('pages.contact.tuesday') }}
                </label>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input
                    v-model="form.day"
                    type="checkbox"
                    value="Wednesday"
                  >
                  {{ $t('pages.contact.wednesday') }}
                </label>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input
                    v-model="form.day"
                    type="checkbox"
                    value="Thursday"
                  >
                  {{ $t('pages.contact.thursday') }}
                </label>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input
                    v-model="form.day"
                    type="checkbox"
                    value="Friday"
                  >
                  {{ $t('pages.contact.friday') }}
                </label>
              </div>
            </div>

            <div class="column">
              <div class="field">
                <label class="label">{{ $t('pages.contact.which_time') }}</label>
              </div>

              <div class="field">
                <label class="checkbox">
                  <input
                    v-model="form.time"
                    type="checkbox"
                    value="AM"
                  >
                  AM
                </label>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input
                    v-model="form.time"
                    type="checkbox"
                    value="PM"
                  >
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
      <div
        v-else
        class="sent has-text-centered"
      >
        <div>
          <span class="icon is-large has-text-success">
            <i class="mdi mdi-checkbox-marked-circle-outline mdi-48px" />
          </span>
          <br>
          <h3 class="title is-3">
            {{ $t('pages.contact.message_sent') }}
          </h3>
          <h4 class="subtitle is-5">
            {{ $t('pages.contact.back_to_you') }}
          </h4>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";

export default {
	data () {
		return {
			form: {
				name: "",
				email: "",
				message: "",
				contact_by_phone: false,
				phone: "",
				day: [],
				time: []
			},
			sent: false,
			loading: false,
		};
	},
	methods: {
		send () {
			this.loading = true;
			this.sendRequest();
		},
		sendRequest() {
			axios.post(
				"https://mailer.witify.io/api/mail/submit",
				{
					subject: "New message on " + this.$config.app.url,
					data: this.form
				},
				{
					headers: {Authorization: "Bearer $2y$10$H9h9sKYqiLkOQagh.OcSm.aNVPCOfkYdfKSRhUgOEvEbWVggexNWq"}
				}
			)
				.then(response => {
					this.sent = true;
					this.loading = false;
				})
				.catch(error => {
					this.loading = false;
					alert("The contact form is not working currently! Please contact us directly :)");
				});
		}
	}
};
</script>

<style scoped>
.sent {
    padding: 30px 0;
}
</style>