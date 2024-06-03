import { CREATE_USER, DELETE_USER, UPDATE_USER, FETCH_ID_USER, FETCH_USER } from "./Type";

export const createUser = (user) => ({
  type: CREATE_USER,
  payload: user
});

export const updateUser = (id, user) => ({
  type: UPDATE_USER,
  payload: { id, user }
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const fetchIdUser = (id) => ({
  type: FETCH_ID_USER,
  payload: id,
});
