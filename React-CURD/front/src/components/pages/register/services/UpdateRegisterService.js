import { select, call, put } from 'redux-saga/effects';
import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run() {
  const { userInfo } = yield select((state) => state.register);

  try {
    const { data } = yield call(api.put, `/users/${userInfo.id}`, {
      name: userInfo.name,
      profile: userInfo.profile,
    });

    yield put({ type: UPDATE_USER_SUCCESS, payload: data });
  } catch (e) {
    yield put({
      type: UPDATE_USER_FAIL,
      payload: 'データを更新できませんでした',
    });
  }
}
