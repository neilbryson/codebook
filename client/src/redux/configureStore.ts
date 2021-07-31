import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { connectRoutes } from 'redux-first-router';

import { rootReducer } from './rootReducer';
import { routesMap } from './routing/routesMap';

const { reducer, middleware, enhancer } = connectRoutes(routesMap);
const reducers = combineReducers({ ...rootReducer, location: reducer });
const middlewares = applyMiddleware(middleware);
const enhancers = composeWithDevTools(enhancer, middlewares);
export const store = createStore(reducers, enhancers);

export type RootState = ReturnType<typeof store.getState>;
export type LocationState = ReturnType<typeof reducer>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
