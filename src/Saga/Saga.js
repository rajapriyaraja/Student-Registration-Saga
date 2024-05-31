import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { 
    CREATE_USER,
    UPDATE_USER,
    FETCH_ID_USER,
    FETCH_USER,
    DELETE_USER,
    CREATE_SUCCESS,
    UPDATE_SUCCESS,
    DELETE_SUCCESS,
    FETCH_ID_SUCCESS,
    FETCH_SUCCESS 
} from "../Components/Type";
import { API_URL } from "../Assets/mockapi";

// Watcher Sagas
function* watchCreateUser() {
    yield takeEvery(CREATE_USER, handleCreateUser);
}
function* watchUpdateUser() {
    yield takeEvery(UPDATE_USER, handleUpdateUser);
}
function* watchDeleteUser() {
    yield takeEvery(DELETE_USER, handleDeleteUser);
}
function* watchFetchUser() {
    yield takeEvery(FETCH_USER, handleFetchUser);
}
function* watchFetchIdUser() {
    yield takeEvery(FETCH_ID_USER, handleFetchIdUser);
}

// Worker Sagas
function* handleCreateUser(action) {
    try {
        const response = yield call(axios.post, API_URL, action.payload);
        yield put({ type: CREATE_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

function* handleUpdateUser(action) {
    try {
        const response = yield call(
            axios.put,
            `${API_URL}/${action.payload.id}`,
            action.payload.user
        );
        yield put({ type: UPDATE_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("Error updating user:", error);
    }
}

function* handleDeleteUser(action) {
    try {
        yield call(axios.delete, `${API_URL}/${action.payload}`);
        yield put({ type: DELETE_SUCCESS, payload: action.payload });
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}

function* handleFetchUser() {
    try {
        const response = yield call(axios.get, API_URL);
        yield put({ type: FETCH_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

function* handleFetchIdUser(action) {
    try {
        const response = yield call(axios.get, `${API_URL}/${action.payload}`);
        yield put({ type: FETCH_ID_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

// Root Saga
export default function* rootSaga() {
    yield all([
        watchCreateUser(),
        watchUpdateUser(),
        watchDeleteUser(),
        watchFetchUser(),
        watchFetchIdUser(),
    ]);
}
