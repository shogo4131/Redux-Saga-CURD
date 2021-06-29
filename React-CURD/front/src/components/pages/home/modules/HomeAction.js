import { createAction } from 'redux-actions';
import { GET_USERS_START } from '../../../../constants/ActionTypes';

const homeAction = {
  getUser: createAction(GET_USERS_START),
};

export default homeAction;
