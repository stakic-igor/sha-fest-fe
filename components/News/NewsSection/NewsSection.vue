<script lang="ts" setup>
import type { NewsItem } from '~/types/news';

interface Props {
    limitNewsItems?: number;
    unlimited?: boolean;
    showMoreLink?: boolean;
}
const { limitNewsItems, unlimited = false, showMoreLink = true } = defineProps<Props>();

const { data } = await useFetch<NewsItem[]>('/api/news');

const showLatestNews = computed(() => {
    if (unlimited || !limitNewsItems) return data.value;
    return data.value?.slice(0, limitNewsItems);
});

</script>

<template>
    <section class="flex gap-2">
        <div v-for="item in showLatestNews" :key="item.id">
            <NewsNewsItem :item />
        </div>
        <NuxtLink to="/news" v-if="showMoreLink && showLatestNews && (!unlimited && limitNewsItems && data && data.length > limitNewsItems)">Vise Novosti</NuxtLink>
    </section>
</template>
