import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/reducers'; // Create this file to combine reducers

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;
