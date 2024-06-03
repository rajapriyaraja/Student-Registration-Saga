
import { CREATE_FAILURE, CREATE_SUCCESS, DELETE_FAILURE, DELETE_SUCCESS, FETCH_FAILURE, FETCH_ID_FAILURE, FETCH_ID_SUCCESS, FETCH_SUCCESS, UPDATE_FAILURE, UPDATE_SUCCESS } from "./Type";

const initialState = {
  users: [],
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SUCCESS:
      return { ...state, users: [...state.users, action.payload], error: null };
    case UPDATE_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) => 
          user.id === action.payload.id ? action.payload : user
        ),
        error: null,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
        error: null,
      };
    case FETCH_SUCCESS:
      return { ...state, users: action.payload, error: null };
    case FETCH_ID_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case CREATE_FAILURE:
    case UPDATE_FAILURE:
    case DELETE_FAILURE:
    case FETCH_FAILURE:
    case FETCH_ID_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
