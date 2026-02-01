<script lang="ts" setup>


</script>
<template>
    <nav>
        <ul class="flex gap-4">
            <li class="hover:underline"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="hover:underline"><NuxtLink to="/lineup">Lineup</NuxtLink></li>
            <li class="hover:underline"><NuxtLink to="/news">News</NuxtLink></li>
            <li class="hover:underline"><NuxtLink to="/blog">Blog</NuxtLink></li>
            <li class="hover:underline"><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
        <SocialNetworks layout="horizontal" />
    </nav>
</template>
