import { combineReducers } from 'redux';
import dataReducer from '../api/dataSlice';

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
