<template>
  <li>
    <nuxt-link
      class="block px-4 py-1 md:p-2 lg:px-4"
      :class="linkClass"
      :to="to"
      :title="label"
    >
      {{ label }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
	props: {
		to: {
			required: true,
			type: String
		},
		label: {
			required: true,
			type: String
		}
	},
	computed: {
		linkClass () {
			if (this.$parent.transparent) {
				return "md:text-white";
			}
			return "";
		}
	}
};
</script>