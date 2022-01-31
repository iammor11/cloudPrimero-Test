import axios from 'axios';
import {
  ADD_POST,
  GET_POSTS,
  ERROR,
  POST_LOADING,
} from '../types';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LOADING, payload: true });
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res)
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: ERROR, payload: err?.response?.data });
  }
};

export const addPost = (data) => async (dispatch) => {
  try {
    dispatch({ type: POST_LOADING, payload: true });
    dispatch({ type: ADD_POST, payload: data });
    console.log('1', data)
    return true;
  } catch (err) {
    console.log(err);
    dispatch({ type: ERROR, payload: err?.response?.data });
    return false;
  }
};