import { defineAction } from 'redux-define';
export const POST_ACTION = defineAction('POSTS', ['FETCHING', 'FETCHED', 'ERROR', 'SUCCESS', 'INITIAL', 'FETCHED_TOTAL_CATEGORIES']);
const initialState = {
    fetching: false,
    list: [],
    next: null,
    prev: null,
    isError:false,
    recomended:null
  }
  const reducer = (state = initialState, { type, payload, isNext }) => {
    switch (type) {
      case POST_ACTION.INITIAL: {
        return initialState
      }
      case POST_ACTION.FETCHING: {
        return {
          ...state,
          fetching: true,
        }
      }
      case POST_ACTION.ERROR: {
        return {
            ...state,
            isError:true
        }
      }
      case POST_ACTION.FETCHED: {
        let recomended = payload.find((item, index) => {
           return index == 0
        });
        let list = payload.filter((item, index)=>{
            return index >0
        })
        return {
          ...state,
          fetching: false,
          list : list,
          recomended: recomended
        }
      }
      case POST_ACTION.FETCHED_TOTAL_CATEGORIES: {
        return {
          ...state,
          total_category: payload,
        }
      }
      default: {
        return state
      }
    }
  }
  
  export default reducer 
  

