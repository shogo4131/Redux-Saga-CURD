import { createAction } from 'redux-actions';
import {
  GET_USERS_START,
  SELECTED_USER_START,
  DELETE_USERS_START,
} from '../../../../constants/ActionTypes';

const homeAction = {
  getUser: createAction(GET_USERS_START),
  selectedUser: createAction(SELECTED_USER_START),
  deleteUser: createAction(DELETE_USERS_START),
};

export default homeAction;
