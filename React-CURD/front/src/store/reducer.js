import { combineReducers } from 'redux';
import homeReducer from '../components/pages/home/modules/HomeReducer';
import registerReducer from '../components/pages/register/modules/RegisterReducer';

/* 各Reducerを登録 */
const rootReducer = combineReducers({
  home: homeReducer,
  register: registerReducer,
});

export default rootReducer;
