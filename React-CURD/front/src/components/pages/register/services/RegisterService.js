import { call, put } from 'redux-saga/effects';
import {
  POST_USER_SUCCESS,
  POST_USER_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run(action) {
  try {
    const { data } = yield call(api.post, '/users', {
      name: action.payload.name,
      profile: action.payload.profile,
    });

    yield put({ type: POST_USER_SUCCESS, payload: data });

    action.payload.history.push('/');
  } catch (e) {
    yield put({
      type: POST_USER_FAIL,
      payload: 'データを登録できませんでした',
    });
  }
}
