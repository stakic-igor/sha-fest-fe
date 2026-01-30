<script lang="ts" setup>
import { type NewsItem } from '~/types/news';

const route = useRoute();

const { data } = await useFetch<NewsItem>(`/api/news/${route.params.id}`);

</script>
<template>
    <div>
        <div class="text-2xl" v-html="data?.title?.rendered"></div>
        <div v-html="data?.content?.rendered"></div>
    </div>
</template>
