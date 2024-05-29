import axios from 'axios';
import { GET_REQUEST,POST_REQUEST,FETCH_REQUEST,UPDATE_REQUEST,DELETE_REQUEST } from './Type';
import { type } from '@testing-library/user-event/dist/type';

export const getDataReq = () => {
    return {
      type: GET_REQUEST,
      payload: data,
    };
  };
  export const getDataSuc = (data) => {
    console.log(data);
    return {
      type: GET_SUCCESS,
      payload: data,
    };
  };
  export const getDataFail = (data) => {
    console.log(data);
    return {
      type:GET_FAILED,
      payload: data,
    };
  };
  export const postDataReq=()=>{
    return{
         type:POST_REQUEST,
        payload:data,    
    };
  };
  export const postDataSuc = (data) => {
    console.log(data);
    return {
      type: GET_SUCCESS,
      payload: data,
    };
  };
  export const postDataFail = (data) => {
    console.log(data);
    return {
      type:GET_FAILED,
      payload: data,
    };
  };
  export const updateDataReq=()=>{
    return{
         type:POST_REQUEST,
        payload:data,    
    };
  };
  export const updateDataSuc = (data) => {
    console.log(data);
    return {
      type: GET_SUCCESS,
      payload: data,
    };
  };
  export const updateDataFail = (data) => {
    console.log(data);
    return {
      type:GET_FAILED,
      payload: data,
    };
  };
  export const deleteDataReq=()=>{
    return{
         type:POST_REQUEST,
        payload:data,    
    };
  };
  export const deleteDataSuc = (data) => {
    console.log(data);
    return {
      type: GET_SUCCESS,
      payload: data,
    };
  };
  export const deleteDataFail = (data) => {
    console.log(data);
    return {
      type:GET_FAILED,
      payload: data,
    };
  };
  export const fetchDataReq=()=>{
    return{
         type:POST_REQUEST,
        payload:data,    
    };
  };
  export const fetchDataSuc = (data) => {
    console.log(data);
    return {
      type: GET_SUCCESS,
      payload: data,
    };
  };
  export const fetchDataFail = (data) => {
    console.log(data);
    return {
      type:GET_FAILED,
      payload: data,
    };
  };