import { FETCH_POSTS } from '../action/types';

export const fetchPosts = () => dispatch => {
  console.log('postAction')
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }))
}