export const wordpressService = {
    baseUrl: 'http://localhost/shafest/wp-json/wp/v2',
  
    async getNews() {
        return await $fetch(`${this.baseUrl}/news`);
    },

    async getSingleNews(id: number) {
        return await $fetch(`${this.baseUrl}/news/${id}`);
    },

    async getBlogPosts() {
        return await $fetch(`${this.baseUrl}/blog`);
    }
}
