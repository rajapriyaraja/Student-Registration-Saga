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
    <div>RegistrationDetails</div>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>DateofBirth</th>
                <th>Department</th>
                <th>Mobile Number</th>
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
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    </>
  )
}
