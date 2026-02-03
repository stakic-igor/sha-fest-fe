import { wordpressService } from "../services/wordpress.service";

export default defineEventHandler(async (event) => {

    const data = await wordpressService.getBlogPosts();

    return data;
    
});
