<script setup lang="ts">
import type { BlogPost } from '~/types/blog';
import BlogItem from '~/components/Blog/BlogItem/BlogItem.vue';

const { data: blogItem } = await useFetch<BlogPost[]>('/api/blog');

console.log(blogItem);

useHead({
    title: 'Blog!'
})
</script>

<template>
    <div>
        <h1>Blog Page</h1>
        <BlogItem  v-for="item in blogItem" :key="item.id" :item />
    </div>
</template>
