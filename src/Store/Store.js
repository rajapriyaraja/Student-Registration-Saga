import { createStore, applyMiddleware } from 'redux';
import studentReducer from '../Components/Reducer';
import rootSaga from '../Saga/Saga';
import createSagaMiddleware from "redux-saga";


const sagaMiddle=createSagaMiddleware();
const store=createStore(studentReducer, applyMiddleware(sagaMiddle));
sagaMiddle.run(rootSaga);
export default store;
