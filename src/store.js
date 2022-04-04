import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { requestRobots, searchRobots } from './reducers';

const logger = createLogger()

const rootReducers = combineReducers({requestRobots, searchRobots})

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))
