<template>
  <div
    class="container px-5 sm:px-7"
    :class="sizeClass"
  >
    <slot />
  </div>
</template>

<script>
export default {
	props: {
		size: {
			type: String,
			default: "medium"
		}
	},
	computed: {
		sizeClass () {
			if (this.size == "tiny") {
				return "max-w-xl";
			}
			if (this.size == "small") {
				return "max-w-3xl";
			}
			return "";
		}
	}
};
</script>