<script lang="ts" setup>
import dayjs from 'dayjs';

defineProps<{
    item: any
}>();

</script>

<template>
    <article class="flex flex-col w-75">
        <img :src="item.acf.img" class="w-full" :alt="item.acf['img-alt']" />
        <h3 v-html="item.title.rendered"></h3>
        {{ dayjs(item.date).format('DD.MM.YYYY')}}
        <p>{{ item.acf.description }}</p>
        <NuxtLink :to="`/news/${item.id}`" class="text-right text-amber-300">Read more...</NuxtLink>
    </article>
</template>
