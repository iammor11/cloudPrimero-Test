import { ADD_POST, GET_POSTS, ERROR, POST_LOADING } from "../types";

const initialState = {
  loading: false,
  posts: undefined,
  initialPosts: [],
};

const post = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        initialPosts: payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...(state.posts || state.initialPosts)],
        loading: false,
      };
    case POST_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default post;
