import { CREATE_USER,DELETE_USER,UPDATE_USER,FETCH_ID_USER,FETCH_USER } from "./Type";

export const createUser = (user) => {
  return {
    type: CREATE_USER,
    payload: user
  };
};

export const updateUser = (user,id) => ({
  type: UPDATE_USER,
  payload: user,id,
});
export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});
export const fetchUser = () => {
  return {
    type: FETCH_USER
  };
};
export const fetchIdUser = () => ({
  type: FETCH_ID_USER,
  
});
