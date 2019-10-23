<template>
  <input
    :type="type"
    :value="value"
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    @change="$emit('change', $event)"
  >
</template>

<script>
export default {
	props: {
		value: {
			required: false
		},
		type: {
			default: "text",
			type: String,
		}
	}
};
</script>