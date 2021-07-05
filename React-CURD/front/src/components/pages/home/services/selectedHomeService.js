import { call, put, select } from 'redux-saga/effects';
import {
  SELECTED_USER_SUCCESS,
  SELECTED_USER_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run() {
  const { editUserID } = yield select((state) => state.home);

  try {
    const res = yield call(api.get, `/users/${editUserID}`);
    yield put({ type: SELECTED_USER_SUCCESS, payload: res.data });
  } catch (e) {
    yield put({
      type: SELECTED_USER_FAIL,
      payload: 'データを取得できませんでした',
    });
  }
}
