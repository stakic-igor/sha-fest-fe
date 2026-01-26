<script lang="ts" setup>

const { data } = await useFetch(`http://localhost/shafest/wp-json/wp/v2/news`, {
    method: 'GET'
});

</script>

<template>
    <section class="flex gap-2">
       
        <div v-for="item in data"">
            <NewsNewsItem :item />
        </div>
    </section>
</template>
