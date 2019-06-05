import React, { Component } from 'react';

import { connect } from 'react-redux';

class Post extends Component {
    render() {
        return (
            <div className='post-container'>
                <h2>{this.props.post.title}</h2>
                <p className='post-message'>{this.props.post.message}</p>
                <div className='votes-container'>
                <button className='upvote-button' onClick={()=>this.props.dispatch({type:'UPVOTE', id:this.props.post.id})}>Good Job! :</button>
                <p>{this.props.post.votes}</p>
                </div>
                <div className='button-container'>
                    <button className='edit-button' onClick={()=>this.props.dispatch({type:'EDIT_POST', id:this.props.post.id})}
                >Edit</button>
                    <button className='delete-button' onClick={()=>this.props.dispatch({type: 'DELETE_POST', id:this.props.post.id})}>
                Delete</button>
                </div>
            </div>
        );
    }
}

export default connect()(Post);

/* Comment section to add later
<div>Comments:</div>
                <form>
                <input placeholder='Add Comment' />
                <button>Add Comment</button>
                </form> */