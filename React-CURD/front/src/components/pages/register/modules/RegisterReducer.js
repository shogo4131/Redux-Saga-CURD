import { handleActions } from 'redux-actions';
import {
  POST_USER_START,
  POST_USER_SUCCESS,
  POST_USER_FAIL,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from '../../../../constants/ActionTypes';

const initialState = {
  userInfo: {},
  successMessage: {},
  error: null,
};

export default handleActions(
  {
    [POST_USER_START]: (state) => ({
      ...state,
      successMessage: null,
    }),
    [POST_USER_SUCCESS]: (state, action) => ({
      ...state,
      successMessage: action.payload,
    }),
    [POST_USER_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [UPDATE_USER_START]: (state) => ({
      ...state,
      successMessage: null,
    }),
    [UPDATE_USER_SUCCESS]: (state, action) => ({
      ...state,
      successMessage: action.payload,
    }),
    [UPDATE_USER_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);
