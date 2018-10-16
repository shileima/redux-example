import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initialState = {};

const middleware = [thunk];
// 此处将producer 返回的数据绑定到store上，最终放到 Provider 上挂载到全局
const store = createStore(
  rootReducer, 
  initialState, 
  applyMiddleware(...middleware)
);

export default store;