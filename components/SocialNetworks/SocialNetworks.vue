<script lang="ts" setup>
import type { SocialNetwork } from '~/types/social-networks';

interface Props {
    layout?: 'horizontal' | 'vertical'; // TS Union type
}

const { layout = 'horizontal' } = defineProps<Props>();

const layoutClass = computed(() => {
    if (layout === 'vertical') {
        return 'flex-col';
    } else {
        return 'flex-row';
    }
});

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
    <div class="flex" :class="layoutClass">
        <a v-for="network in socialNetworks" 
        :key="network.id" 
        :href="network.url"
        :title="network.name" rel="noopener noreferrer" target="_blank"
        class="mr-4"
        >
        {{ network.name }}
        </a>
    </div>
</template>
