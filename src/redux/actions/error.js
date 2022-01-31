import { CLEAR_ERROR, ERROR } from '../types';

export const clearErrors = () => ({ type: CLEAR_ERROR });
export const setError = (payload) => ({ type: ERROR, payload });