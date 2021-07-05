import { handleActions } from 'redux-actions';
import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  SELECTED_USER_START,
  SELECTED_USER_SUCCESS,
  SELECTED_USER_FAIL,
  DELETE_USERS_START,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAIL,
} from '../../../../constants/ActionTypes';

const initialState = {
  userList: [],
  successMessage: {},
  selectedUser: null,
  editUserID: null,
  deleteUserID: null,
  error: null,
};

export default handleActions(
  {
    [GET_USERS_START]: (state) => ({
      ...state,
      selectedUser: null,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      userList: action.payload,
    }),
    [GET_USERS_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [SELECTED_USER_START]: (state, action) => ({
      ...state,
      editUserID: action.payload,
    }),
    [SELECTED_USER_SUCCESS]: (state, action) => ({
      ...state,
      selectedUser: action.payload,
    }),
    [SELECTED_USER_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [DELETE_USERS_START]: (state, action) => ({
      ...state,
      deleteUserID: action.payload,
    }),
    [DELETE_USERS_SUCCESS]: (state, action) => ({
      ...state,
      successMessage: action.payload,
    }),
    [DELETE_USERS_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);
