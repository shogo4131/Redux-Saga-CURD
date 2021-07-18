import { call, put } from 'redux-saga/effects';
import {
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run() {
  try {
    const { data } = yield call(api.get, '/users');

    yield put({ type: GET_USERS_SUCCESS, payload: data });
  } catch (e) {
    yield put({
      type: GET_USERS_FAIL,
      payload: 'データを取得できませんでした',
    });
  }
}
