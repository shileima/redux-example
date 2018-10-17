import { FETCH_POSTS, NEW_POSTS } from '../action/types';

export const fetchPosts = () => dispatch => {
  console.log('postAction ')
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }))
}

export const createPost = (post) => dispatch => {
  console.log('postAction NEW_POSTS')
  fetch('http://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(newPost => dispatch({
      type: NEW_POSTS,
      payload: newPost
    }))
}