import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from 'react'
import { fetchUser } from "./Action";

export const RegistrationDetails = () => {
  const users=useSelector((state)=>state.users);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    dispatch(fetchUser());
  },[dispatch]);
  return (
    <>
    <div>
    <div className="text-center mt-5">
      <h2>RegistrationDetails</h2>
      </div>
      <div className="d-flex justify-content-center align-self-center">
    <table className="table table-striped table-secondary w-50 mt-5 pt-5">
        <thead>
            <tr>
                <th>Name</th>
                <th>Roll Number</th>
                {/* <th>Gender</th> */}
                <th>DateofBirth</th>
                <th>Department</th>
                <th>Mobile Number</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.sname}</td>
                    <td>{user.roll}</td>
                    <td>{user.date}</td>
                    <td>{user.department}</td>
                    <td>{user.number}</td>
                    <td>{user.gender}</td>
                    <td> <button>Edit</button>
            <button>Delete</button></td> 
                </tr>
                
            ))}
        </tbody>
    </table>
    </div>
    </div>
    </>
  )
}