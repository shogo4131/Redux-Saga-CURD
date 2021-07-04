import { call, takeEvery } from 'redux-saga/effects';
import {
  GET_USERS_START,
  DELETE_USERS_START,
} from '../../../../constants/ActionTypes';

import getHomeService from '../services/getHomeServices';
import deleteHomeService from '../services/deleteHomeService';

function* home() {
  yield call(getHomeService);
}

function* deleteUser() {
  yield call(deleteHomeService);
}

const HomeController = [
  takeEvery(GET_USERS_START, home),
  takeEvery(DELETE_USERS_START, deleteUser),
];

export default HomeController;
