import { select, call, put } from 'redux-saga/effects';
import {
  POST_USER_SUCCESS,
  POST_USER_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run() {
  const { userInfo } = yield select((state) => state.register);

  try {
    const { data } = yield call(api.post, '/users', {
      name: userInfo.name,
      profile: userInfo.profile,
    });

    yield put({ type: POST_USER_SUCCESS, payload: data });
  } catch (e) {
    yield put({
      type: POST_USER_FAIL,
      payload: 'データを登録できませんでした',
    });
  }
}
