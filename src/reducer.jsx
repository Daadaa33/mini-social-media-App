const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_POST": {
      // new post
      const newPost = action.payload.posts;

      return { posts: [newPost, ...state.posts] };
    }
    case "DELETE_POST": {
      const deletingPost = action.payload.postId;

      const postNew = state.posts.filter((post) => post.id !== deletingPost);

      return { posts: postNew };
    }
    default:
      return state;
  }
};

export default reducer;
