import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../action/postAction'

class Posts extends Component {

  componentWillMount(){
    console.log(this.props)
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps){
    this.props.posts.unshift(nextProps.newPost)
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

// const mapStateToProps = (state, ownProps) => ({
//   posts: state.posts.items,
//   ownProps: 123,
//   newPost: state.posts.item
// })

const mapStateToProps = (state, ownProps) => {
  // 如果form提交后引起postAction -> postReducer -> state -> mapStateToProps -> this.props
  // 本组件的componentWillReceiveProps函数触发更新
  console.log('Post state:',state)
  return {
    posts: state.posts.items,
    ownProps: 123,
    newPost: state.posts.item
  }
}


export default connect(mapStateToProps, {fetchPosts})(Posts);
