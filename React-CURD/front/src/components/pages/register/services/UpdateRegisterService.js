import { call, put } from 'redux-saga/effects';
import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run(action) {
  try {
    const { data } = yield call(api.put, `/users/${action.payload.id}`, {
      name: action.payload.name,
      profile: action.payload.profile,
    });

    yield put({ type: UPDATE_USER_SUCCESS, payload: data });

    action.payload.history.push('/');
  } catch (e) {
    yield put({
      type: UPDATE_USER_FAIL,
      payload: 'データを更新できませんでした',
    });
  }
}
