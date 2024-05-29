import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from 'react'

export const RegistrationDetails = () => {
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
            {students.map((student) => (
                <tr key={student.id}>
                    <td>{student.sname}</td>
                    <td>{student.roll}</td>
                    <td>{student.date}</td>
                    <td>{student.department}</td>
                    <td>{student.number}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    </>
  )
}

