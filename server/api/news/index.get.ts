import { wordpressService } from '../services/wordpress.service';

export default defineEventHandler((event) => {

    const data =  wordpressService.getNews();
    
    return data;

});
