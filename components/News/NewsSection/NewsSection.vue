<template>
    <section class="flex gap-2">
        <div v-for="n in 3" :key="n">
            <NewsNewsItem />
        </div>
    </section>
</template>
