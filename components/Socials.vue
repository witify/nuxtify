<template>
  <div class="block text-center">
    <a
      v-for="socialMedia in $store.state.socialMedia"
      :key="socialMedia.url"
      :href="socialMedia.url"
      :arial-label="socialMedia.name"
      :title="socialMedia.name"
      class="mr-4 inline-block"
    >
      <div class="text-gray-600 text-2xl">
        <i :class="`mdi mdi-${socialMedia.icon}`" />
      </div>
    </a>
  </div>
</template>