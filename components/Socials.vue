<template>
    <div class="socials">
        <a v-for="(url, name) in $config.socials" :href="url" :arial-label="name">
            <div class="icon">
                <i :class="`mdi mdi-${name}`"></i>
            </div>
        </a>
    </div>
</template>