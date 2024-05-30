import { CREATE_SUCCESS, UPDATE_SUCCESS, DELETE_SUCCESS, FETCH_ID_SUCCESS, FETCH_SUCCESS } from "./Type";
const initialState = {
  users: [],
  user: ""
}
const user = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case FETCH_ID_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}

export default user;