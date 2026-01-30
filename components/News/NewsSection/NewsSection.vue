<script lang="ts" setup>

const { data } = await useFetch('/api/news');

console.log(data);
</script>

<template>
    <section class="flex gap-2">
       
        <div v-for="item in data"">
            <NewsNewsItem :item />
        </div>
    </section>
</template>
