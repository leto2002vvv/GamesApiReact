import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartItemsReducer from '../slices/cartCounterSlice'
import isGameAddedReducer from '../slices/isGameAddedSlice'
import gameSlice from '../slices/gameSlice'
import { apiSlice } from '../services/apiSlice'

const rootReducer = combineReducers({
	cartReducer: cartItemsReducer,
	booleanAddedReducer: isGameAddedReducer,
	gameReducer: gameSlice,
	[apiSlice.reducerPath]: apiSlice.reducer,
})

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['booleanAddedReducer'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(apiSlice.middleware),
})

export const persistor = persistStore(store)

export default store
