import { call, takeEvery } from 'redux-saga/effects';
import {
  GET_USERS_START,
  SELECTED_USER_START,
  DELETE_USERS_START,
} from '../../../../constants/ActionTypes';

import getHomeService from '../services/getHomeServices';
import selectedHomeService from '../services/selectedHomeService';
import deleteHomeService from '../services/deleteHomeService';

function* getUsers() {
  yield call(getHomeService);
}

function* selectedUser() {
  yield call(selectedHomeService);
}

function* deleteUser() {
  yield call(deleteHomeService);
}

const HomeController = [
  takeEvery(GET_USERS_START, getUsers),
  takeEvery(SELECTED_USER_START, selectedUser),
  takeEvery(DELETE_USERS_START, deleteUser),
];

export default HomeController;
