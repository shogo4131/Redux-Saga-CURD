import { call, put, select } from 'redux-saga/effects';
import {
  DELETE_USERS_SUCCESS,
  DELETE_USERS_FAIL,
  GET_USERS_START,
} from '../../../../constants/ActionTypes';
import api from '../../../../api/api';

export default function* run(action) {
  const { id, toast } = action.payload;

  try {
    const { data } = yield call(api.delete, `/users/${id}`);

    yield put({ type: DELETE_USERS_SUCCESS, payload: data });

    const { successMessage } = yield select((state) => state.home);

    toast.success(successMessage.message);

    yield put({ type: GET_USERS_START });
  } catch (e) {
    yield put({
      type: DELETE_USERS_FAIL,
      payload: 'データを取得できませんでした',
    });
  }
}
