import { createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './reducers/index';


export default createStore(reducer,applyMiddleware(createLogger(),thunkMiddleware));