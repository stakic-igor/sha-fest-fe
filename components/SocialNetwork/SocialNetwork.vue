<script lang="ts" setup>
import type { SocialNetwork } from '~/types/social-networks';

const socialNetworks: SocialNetwork[] = [
    {
        id: 1,
        name: 'Instagram',
        url: 'https://www.instagram.com/shafest/?hl=en',
    },
    {
        id: 2,
        name: 'Facebook',
        url: 'https://www.facebook.com/ShaFestival/',
    },
    {
        id: 3,
        name: 'LinkedIn',
        url: 'https://ba.linkedin.com/company/%C5%A1a-fest',
    },
];

</script>

<template>
    <a 
        v-for="network in socialNetworks" 
        :key="network.id" 
        :href="network.url"
        :title="network.name" rel="noopener noreferrer" target="_blank"
        class="mr-4"
        >
        {{ network.name }}
    </a>
</template>
