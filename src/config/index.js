
let base_api = '';
    if(process.NODE_ENV==='production'){
        base_api = 'api.bamboo.in.th';
    }else{
        base_api = 'http://localhost:3031/api/';
    }
export const BASE_API = base_api;