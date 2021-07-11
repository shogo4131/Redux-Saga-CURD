import { call, takeEvery } from 'redux-saga/effects';
import {
  POST_USER_START,
  UPDATE_USER_START,
} from '../../../../constants/ActionTypes';

import RegisterService from '../services/RegisterService';
import UpdateUserService from '../services/UpdateRegisterService';

function* postUser(action) {
  yield call(RegisterService, action);
}

function* updateUser(action) {
  yield call(UpdateUserService, action);
}

const RegisterController = [
  takeEvery(POST_USER_START, postUser),
  takeEvery(UPDATE_USER_START, updateUser),
];

export default RegisterController;
