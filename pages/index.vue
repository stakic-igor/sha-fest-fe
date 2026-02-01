<script setup lang="ts">
import NewsSection from '~/components/News/NewsSection/NewsSection.vue';


useHead({
  title: 'Home Page',
})

</script>

<template>
  <main>
    <h1>Home Page</h1>
    <HomeHero />
    <NewsSection :limit-news-items="2" :unlimited="false" />
  </main>
</template>

