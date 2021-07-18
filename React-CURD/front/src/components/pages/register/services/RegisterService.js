import { call, put, select } from 'redux-saga/effects';
import {
  POST_USER_SUCCESS,
  POST_USER_FAIL,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run(action) {
  const { name, profile, history, toast } = action.payload;

  try {
    const { data } = yield call(api.post, '/users', {
      name,
      profile,
    });

    yield put({ type: POST_USER_SUCCESS, payload: data });

    const { successMessage } = yield select((state) => state.register);

    toast.success(successMessage.message);

    history.push('/');
  } catch (e) {
    yield put({
      type: POST_USER_FAIL,
      payload: 'データを登録できませんでした',
    });
  }
}
