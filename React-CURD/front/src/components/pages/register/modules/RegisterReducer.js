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
  error: null,
};

export default handleActions(
  {
    [POST_USER_START]: (state, action) => ({
      ...state,
      userInfo: action.payload,
    }),
    [POST_USER_SUCCESS]: (state, action) => ({
      ...state,
      userInfo: {},
    }),
    [POST_USER_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [UPDATE_USER_START]: (state, action) => ({
      ...state,
      userInfo: action.payload,
    }),
    [UPDATE_USER_SUCCESS]: (state, action) => ({
      ...state,
      userInfo: {},
    }),
    [UPDATE_USER_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);
