
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useDispatch } from 'react-redux'
import rootReducer from './reducer';
import rootSaga from './rootSaga';


const persistConfig = {
    key: 'antey',
    storage,
    whitelist: ['cart', 'compare', 'auth', 'wishlist'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch()
sagaMiddleware.run(rootSaga);

export default store;