import { wordpressService } from '../services/wordpress.service';

export default defineEventHandler((event) => {
    const id = getRouterParam(event, 'id')

    const data =  wordpressService.getSingleNews(Number(id));
    
    return data;

});
