import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { apiSlice } from "./api/apiSlice"
import authReducer from "./reducers/authSlice"
import {
  FLUSH, PAUSE,
  PERSIST, persistReducer, persistStore, PURGE,
  REGISTER, REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const appReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'auth/logOut') {
    // for all keys defined in your persistConfig(s)
    storage.removeItem('persist:root')
    // storage.removeItem('persist:otherKey')

    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(apiSlice.middleware),
  // set false when deploy
  devTools: true
})

export const persistor = persistStore(store)