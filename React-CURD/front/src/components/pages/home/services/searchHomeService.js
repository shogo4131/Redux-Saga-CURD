import { call, put } from 'redux-saga/effects';
import {
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run(action) {
  try {
    const { data } = yield call(
      api.get,
      `/search/?name=${action.payload.searchWord}`
    );

    yield put({ type: SEARCH_USERS_SUCCESS, payload: data });
  } catch (e) {
    yield put({
      type: SEARCH_USERS_FAIL,
      payload: 'データを取得できませんでした',
    });
  }
}
