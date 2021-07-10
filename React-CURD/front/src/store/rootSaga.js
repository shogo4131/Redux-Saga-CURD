import { all } from 'redux-saga/effects';

import HomeController from '../components/pages/home/controller/HomeController';
import RegisterController from '../components/pages/register/controller/RegisterController';

function* rootSaga() {
  yield all([...HomeController, ...RegisterController]);
}

export default rootSaga;
