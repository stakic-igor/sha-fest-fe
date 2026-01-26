<script lang="ts" setup>
import { type NewsItem } from '~/types/news';

const route = useRoute();

const { data } = await useFetch<NewsItem>(`http://localhost/shafest/wp-json/wp/v2/news/${route.params.id}`, {
    method: 'GET'
});

</script>
<template>
    <div>
        <div class="text-2xl" v-html="data?.title?.rendered"></div>
        <div v-html="data?.content?.rendered"></div>
    </div>
</template>
