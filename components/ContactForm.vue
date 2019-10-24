<template>
  <div>
    <transition
      name="scale"
      mode="out-in"
    >
      <form
        v-if="!sent"
        v-loading="loading"
        @submit.prevent="send()"
      >
        <div class="flex-auto md:flex md:-mx-2 overflow-hidden">
          <div class="md:w-1/2 md:px-2">
            <div class="mb-4">
              <v-label>{{ $t('pages.contact.name') }}</v-label>
              <v-input
                v-model="form.name"
                type="text"
                name="name"
                :placeholder="$t('pages.contact.name')"
                required
              />
            </div>
          </div>
          <div class="md:w-1/2 md:px-2">
            <div class="mb-4">
              <v-label>
                {{ $t('pages.contact.email') }}
              </v-label>
              <v-input
                v-model="form.email"
                type="email"
                name="email"
                :placeholder="$t('pages.contact.email')"
                required
              />
            </div>
          </div>
        </div>

        <div class="mb-4">
          <v-label>{{ $t('pages.contact.message') }}</v-label>
          <v-textarea
            v-model="form.message"
            cols="20"
            rows="5"
            name="message"
            minlength="3"
            required 
          />
        </div>

        <div class="mb-1">
          <v-label>{{ $t('pages.contact.contacted_by_phone') }}</v-label>
        </div>

        <div class="mb-4">
          <label
            class="mr-2"
            required
          >
            <input
              v-model="form.contact_by_phone"
              type="radio"
              :value="false"
            >
            {{ $t('pages.contact.no') }}
          </label>

          <label required>
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
          class="mb-4"
        >
          <div class="mb-4">
            <v-label>
              {{ $t('pages.contact.phone') }}
            </v-label>
            <v-input
              v-model="form.phone"
              type="text"
              name="phone"
              placeholder="123 456 7890"
              :required="form.contact_by_phone"
            />
          </div>

          <div class="">
            <div class="mb-4">
              <div class="mb-1">
                <v-label>{{ $t('pages.contact.when_available') }}</v-label>
              </div>

              <div class="mb-1">
                <label class="checkbox">
                  <input
                    v-model="form.day"
                    type="checkbox"
                    value="Monday"
                  >
                  {{ $t('pages.contact.monday') }}
                </label>
              </div>
              <div class="mb-1">
                <label class="checkbox">
                  <input
                    v-model="form.day"
                    type="checkbox"
                    value="Tuesday"
                  >
                  {{ $t('pages.contact.tuesday') }}
                </label>
              </div>
              <div class="mb-1">
                <label class="checkbox">
                  <input
                    v-model="form.day"
                    type="checkbox"
                    value="Wednesday"
                  >
                  {{ $t('pages.contact.wednesday') }}
                </label>
              </div>
              <div class="mb-1">
                <label class="checkbox">
                  <input
                    v-model="form.day"
                    type="checkbox"
                    value="Thursday"
                  >
                  {{ $t('pages.contact.thursday') }}
                </label>
              </div>
              <div class="mb-1">
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

            <div class="mb-4">
              <div class="mb-1">
                <v-label>{{ $t('pages.contact.which_time') }}</v-label>
              </div>

              <div class="mb-1">
                <label class="checkbox">
                  <input
                    v-model="form.time"
                    type="checkbox"
                    value="AM"
                  >
                  AM
                </label>
              </div>
              <div class="mb-1">
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

        <button class="button is-primary mt-4 mb-4">
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
			this.$axios.post(
				"https://mailer.witify.io/api/mail/submit",
				{
					subject: "New message on " + this.$config.app.name,
					data: this.form
				},
				{
					headers: {Authorization: `Bearer ${process.env.MAILER_TOKEN}`}
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