import { call, put, select } from 'redux-saga/effects';
import {
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run() {
  const { searchName } = yield select((state) => state.home);

  try {
    const res = yield call(api.get, `/search/?name=${searchName}`);

    yield put({ type: SEARCH_USERS_SUCCESS, payload: res.data });
  } catch (e) {
    yield put({
      type: SEARCH_USERS_FAIL,
      payload: 'データを取得できませんでした',
    });
  }
}
