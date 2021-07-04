import { call, put, select } from 'redux-saga/effects';
import {
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run() {
  //   const id = 6;
  try {
    // const res = yield call(api.delete, `/users/${id}`);
    // yield put({ type: DELETE_USERS_SUCCESS, payload: res.data });
  } catch (e) {
    yield put({
      type: DELETE_USERS_FAIL,
      payload: 'データを取得できませんでした',
    });
  }
}
