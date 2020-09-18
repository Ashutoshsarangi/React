import { combineReducers } from 'redux';

import AuthReducer from './authReducer/authReducer';
import BookReducer from './bookReducer/bookReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // LocalStorage

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer']
}

const RootReducer = combineReducers({
  authReducer: AuthReducer,
  bookReducer: BookReducer
});

const PersistedReducer = persistReducer(persistConfig, RootReducer);

export default PersistedReducer;