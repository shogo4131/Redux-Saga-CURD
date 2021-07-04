import { handleActions } from 'redux-actions';
import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  DELETE_USERS_START,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAIL,
} from '../../../../constants/ActionTypes';

const initialState = {
  userList: [],
  deleteMessage: {},
  deleteUserID: null,
  error: null,
};

export default handleActions(
  {
    [GET_USERS_START]: (state) => ({
      ...state,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      userList: action.payload,
    }),
    [GET_USERS_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [DELETE_USERS_START]: (state, action) => ({
      ...state,
      deleteUserID: action.payload,
    }),
    [DELETE_USERS_SUCCESS]: (state, action) => ({
      ...state,
      deleteMessage: action.payload,
    }),
    [DELETE_USERS_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);
