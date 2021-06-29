import { combineReducers } from 'redux';
import homeReducer from '../components/pages/home/modules/HomeReducer';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
