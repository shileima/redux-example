import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

export const fetchPost = () => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }))
}