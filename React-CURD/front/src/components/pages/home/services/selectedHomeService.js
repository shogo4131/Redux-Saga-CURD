import { call, put } from 'redux-saga/effects';
import {
  SELECTED_USER_SUCCESS,
  SELECTED_USER_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run(action) {
  const { id, history } = action.payload;

  try {
    const { data } = yield call(api.get, `/users/${id}`);

    yield put({ type: SELECTED_USER_SUCCESS, payload: data });

    history.push({ pathname: '/register' });
  } catch (e) {
    yield put({
      type: SELECTED_USER_FAIL,
      payload: 'データを取得できませんでした',
    });
  }
}
