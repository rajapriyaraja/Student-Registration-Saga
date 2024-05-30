import { createStore, applyMiddleware } from 'redux';
import studentReducer from '../Components/Reducer';
import { thunk } from 'redux-thunk';


const store = createStore(studentReducer, applyMiddleware(thunk));

export default store;
