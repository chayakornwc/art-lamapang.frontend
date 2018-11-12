import axios from 'axios';
import queryString from 'query-string';
import moment from 'moment';
import  {POST_ACTION}  from '../reducers/post';
import {BASE_API} from '../../../config';
export const composeFetchUrl = query => {
    return `${BASE_API}`;
};

export const fetchPosts  = ((url=null)=> (dispatch)=>{
    if(!url){
        url = composeFetchUrl();
    }
    dispatch({type:POST_ACTION.FETCHING});
    return axios.get(`${url}posts?filter[order]=publishedDate%20DESC&filter[limit]=9`,{}).then((res)=>{
        dispatch({
            type:POST_ACTION.FETCHED,
            payload:res.data
        });
    }).catch(err =>{
        dispatch({
            type:POST_ACTION.ERROR,
            payload:err.message
        });
    });
});
