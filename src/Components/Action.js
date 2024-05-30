import { CREATE_USER,DELETE_USER,UPDATE_USER,FETCH_ID_USER,FETCH_USER } from "./Type";

export const createUser = (user) => ({
  type: CREATE_USER,
  payload: user,
});
export const updateUser = (user,id) => ({
  type: UPDATE_USER,
  payload: user,id,
});
export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});
export const fetchUser = (id) => ({
  type: FETCH_USER,
  payload: id,
});
export const fetchIdUser = () => ({
  type: FETCH_ID_USER,
  
});