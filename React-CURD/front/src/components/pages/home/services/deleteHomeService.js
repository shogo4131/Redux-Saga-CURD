import { call, put } from 'redux-saga/effects';
import {
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAIL,
  GET_USERS_START,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run(action) {
  try {
    const { data } = yield call(api.delete, `/users/${action.payload.id}`);

    yield put({ type: DELETE_USERS_SUCCESS, payload: data });
    yield put({ type: GET_USERS_START });
  } catch (e) {
    yield put({
      type: DELETE_USERS_FAIL,
      payload: 'データを取得できませんでした',
    });
  }
}
