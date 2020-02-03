import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import logger from '../middleware/logger';
import censure from '../middleware/censure';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;   