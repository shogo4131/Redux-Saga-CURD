import { all } from 'redux-saga/effects';

import HomeController from '../components/pages/home/controller/HomeController';

function* rootSaga() {
  yield all([...HomeController]);
}

export default rootSaga;
