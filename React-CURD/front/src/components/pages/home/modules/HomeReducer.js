import { handleActions } from 'redux-actions';
import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  SELECTED_USER_START,
  SELECTED_USER_SUCCESS,
  SELECTED_USER_FAIL,
  SEARCH_USERS_START,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAIL,
  DELETE_USERS_START,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAIL,
} from '../../../../constants/ActionTypes';

const initialState = {
  loading: false,
  userList: [],
  successMessage: {},
  searchName: null,
  selectedUser: null,
  editUserID: null,
  deleteUserID: null,
  error: null,
};

export default handleActions(
  {
    [GET_USERS_START]: (state) => ({
      ...state,
      loading: false,
      selectedUser: null,
      searchName: null,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: true,
      userList: action.payload,
    }),
    [GET_USERS_FAIL]: (state, action) => ({
      ...state,
      loading: false,
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
    [SEARCH_USERS_START]: (state, action) => ({
      ...state,
      searchName: action.payload,
    }),
    [SEARCH_USERS_SUCCESS]: (state, action) => ({
      ...state,
      userList: action.payload,
    }),
    [SEARCH_USERS_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [DELETE_USERS_START]: (state, action) => ({
      ...state,
      deleteUserID: action.payload,
      successMessage: null,
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
