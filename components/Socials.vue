<template>
  <div class="socials">
    <a
      v-for="(url, name) in $config.socials"
      :key="url"
      :href="url"
      :arial-label="name"
    >
      <div class="icon">
        <i :class="`mdi mdi-${name}`" />
      </div>
    </a>
  </div>
</template>