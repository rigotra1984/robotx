import {combineReducers} from 'redux';
import AppReducer from './containers/App/reducers';

const rootReducer = combineReducers({
    AppReducer,
});

export default rootReducer;