<template>
  <div class="socials">
    <a
      v-for="socialMedia in $store.state.socialMedia"
      :key="socialMedia.url"
      :href="socialMedia.url"
      :arial-label="socialMedia.name"
      :title="socialMedia.name"
    >
      <div class="icon">
        <i :class="`mdi mdi-${socialMedia.icon}`" />
      </div>
    </a>
  </div>
</template>