import { FETCH_POSTS } from '../action/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_POSTS:
    // 通过 actions -> postAction 里 dispatch 出 action.type 处理类型 和 action.payload 数据
     console.log("producer:", action.payload)
      return {
        ...state,
        items: action.payload
      };
    default: 
      return state;
  }
}