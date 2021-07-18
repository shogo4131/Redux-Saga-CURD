import { call, put, select } from 'redux-saga/effects';
import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run(action) {
  const { id, name, profile, history, toast } = action.payload;

  try {
    const { data } = yield call(api.put, `/users/${id}`, {
      name,
      profile,
    });

    yield put({ type: UPDATE_USER_SUCCESS, payload: data });

    const { successMessage } = yield select((state) => state.register);

    toast.success(successMessage.message);

    history.push('/');
  } catch (e) {
    yield put({
      type: UPDATE_USER_FAIL,
      payload: 'データを更新できませんでした',
    });
  }
}
