import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../action/postAction'

class Posts extends Component {

  componentWillMount(){
    console.log(this.props)
    this.props.fetchPosts()
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
  //fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts.items,
  ownProps: 123
})


export default connect(mapStateToProps, {fetchPosts})(Posts);
