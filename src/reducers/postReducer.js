const postReducer = (state = dummyPosts, action) => {
    switch(action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post)=>post.id !== action.id);
        case 'EDIT_POST':
            return state.map((post)=>post.id === action.id ? {...post, editing:!post.editing}:post)
        case 'UPDATE':
            return state.map((post)=>{
                if(post.id === action.id) {
                    return {
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        editing: !post.editing,
                    }
                } else return post
            });
        case 'UPVOTE':
            return state.map((post)=> {
                if(post.id === action.id) {
                return {
                    ...post,
                    votes: post.votes + 1
                }
            } else return post
            })
        default:
            return state;
    }
}

const dummyPosts = [{
    id: 1,
    title: 'Went Gym',
    message: '2 hours',
    votes: 0,
    editing: false
},
{
    id: 2,
    title: 'Did Laundry',
    message: 'shorts and t-shirts',
    votes: 0,
    editing: false
}]

export default postReducer