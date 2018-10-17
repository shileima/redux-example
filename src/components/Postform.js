import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../action/postAction'

class PostForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:[e.target.value]})
  }

  onSubmit(e){
    e.preventDefault();
    const posts = {
      title: this.state.title,
      body: this.state.body
    }

    // create post action
    this.props.createPost(posts)
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label><br />
            <input type="text" name="title" 
              value={this.state.title} 
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>Body:</label><br />
            <textarea name="body" 
              value={this.state.body} 
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  post: PropTypes.object
}

const mapStateToProps = state => ({ post: state.posts.item })

// const mapStateToProps = state => {
//   console.log('state:',state) // {posts: {item:{},items:[{},{}]}}
//   return {
//     createPost: state.posts.item
//   }
// }

export default connect(mapStateToProps, {createPost})(PostForm);