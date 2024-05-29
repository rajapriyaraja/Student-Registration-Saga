import { createStore, applyMiddleware } from 'redux';
import studentReducer from '../Components/Reducer';
import { thunk } from 'redux-thunk';


const Store = createStore(studentReducer, applyMiddleware(thunk));

export default Store;