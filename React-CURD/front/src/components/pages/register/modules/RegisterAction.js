import { createAction } from 'redux-actions';
import {
  POST_USER_START,
  UPDATE_USER_START,
} from '../../../../constants/ActionTypes';

const registerAction = {
  postUser: createAction(POST_USER_START),
  updateUser: createAction(UPDATE_USER_START),
};

export default registerAction;
