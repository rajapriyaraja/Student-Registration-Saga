import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { fetchUser, deleteUser, updateUser } from "./Action";

export const RegistrationDetails = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (user) => {
    // Navigate to the edit form with user data
    navigate(`/edit/${user.id}`, { state: { user } });
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2>Registration Details</h2>
      </div>
      <div className="d-flex justify-content-center">
        <table className="table table-striped table-bordered w-75 mt-3">
          <thead className="thead-dark">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Roll Number</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Department</th>
              <th>Mobile Number</th>
              <th>Nationality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.roll}</td>
                <td>{user.gender}</td>
                <td>{user.date}</td>
                <td>{user.department}</td>
                <td>{user.number}</td>
                <td>{user.national}</td>
                <td>
                  <button 
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
