import http from './http.js';

export default{
    async getMainSlideBanners(){
        return http.get('api/banner.json')
    }
}