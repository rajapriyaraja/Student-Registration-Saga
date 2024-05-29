// import { GET_SUCCESS, FETCH_SUCCESS, UPDATE_SUCCESS, DELETE_SUCCESS,POST_SUCCESS } from "./Type";

// const initialState = {
//     students: [],
//     student: null,
// };
// const student = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_SUCCESS:
//             return {
//                 ...state,
//                 students: [...state.students, action.payload],
//             };
//         case GET_FAILURE:
//             return {
//                 ...state,
//             };
//         case GET_REQUEST:
//             return {
//                 ...state,
//             };
        
//         case POST__SUCCESS:
//             return {
//                 ...state,
//                 students: [...state.students, action.payload],
//             };
//         case POST_FAILURE:
//             return {
//                 ...state,
//             };
//         case POST_REQUEST:
//             return {
//                 ...state,
//             };
        
//         case FETCH_SUCCESS:
//             return {
//                 ...state,
//                 students: [...state.students, action.payload],
//             };
//         case FETCH_FAILURE:
//             return {
//                 ...state,
//             };
//         case FETCH_REQUEST:
//             return {
//                 ...state,
//             };
        
//         case UPDATE_SUCCESS:
//             return {
//                 ...state,
//                 students: [...state.students, action.payload],
//             };
//         case UPDATE_FAILURE:
//             return {
//                 ...state,
//             };
//         case UPDATE_REQUEST:
//             return {
//                 ...state,
//             };
        
//         case DELETE_SUCCESS:
//             return {
//                 ...state,
//                 students: [...state.students, action.payload],
//             };
//         case DELETE_FAILURE:
//             return {
//                 ...state,
//             };
//         case DELETE_REQUEST:
//             return {
//                 ...state,
//             };
        
//     }
// }





import { 
  GET_SUCCESS, GET_FAILURE, GET_REQUEST,
  POST_SUCCESS, POST_FAILURE, POST_REQUEST,
  FETCH_SUCCESS, FETCH_FAILURE, FETCH_REQUEST,
  UPDATE_SUCCESS, UPDATE_FAILURE, UPDATE_REQUEST,
  DELETE_SUCCESS, DELETE_FAILURE, DELETE_REQUEST
} from './Type';

const initialState = {
  students: [],
  student: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUCCESS:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case GET_FAILURE:
    case GET_REQUEST:
      return state;

    case POST_SUCCESS:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case POST_FAILURE:
    case POST_REQUEST:
      return state;

    case FETCH_SUCCESS:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case FETCH_FAILURE:
    case FETCH_REQUEST:
      return state;

    case UPDATE_SUCCESS:
      return {
        ...state,
        students: state.students.map(student =>
          student.id === action.payload.id ? action.payload : student
        ),
      };
    case UPDATE_FAILURE:
    case UPDATE_REQUEST:
      return state;

    case DELETE_SUCCESS:
      return {
        ...state,
        students: state.students.filter(student => student.id !== action.payload.id),
      };
    case DELETE_FAILURE:
    case DELETE_REQUEST:
      return state;

    default:
      return state;
  }
};

export default studentReducer;
