/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './sagas';

export default (initialState = {}) => {
 // ======================================================
 // Window Vars Config
 // ======================================================

 // ======================================================
 // Middleware Configuration
 // ======================================================
 const middleware = [
  // This is where you add other middleware like redux-observable
 ];

 // ======================================================
 // Store Enhancers
 // ======================================================

 const enhancers = [];
 const __DEV__ = true;

 if (__DEV__) {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
   enhancers.push(devToolsExtension());
  }
 }

 const sagaMiddleware = createSagaMiddleware();

 initialState = {};

 const store = createStore(
  rootReducer,
  initialState,
  compose(
   applyMiddleware(...middleware, sagaMiddleware),
   ...enhancers
  )
 );

 store.asyncReducers = {};

 sagaMiddleware.run(rootSaga);

 return store;
};
