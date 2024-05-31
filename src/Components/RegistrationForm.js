import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from './Action';
import { useNavigate } from 'react-router-dom';

export const RegistrationForm = () => {
  const [sname, setSname] = useState("");
  const [roll, setRoll] = useState("");
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("");
  const [number, setNumber] = useState("");
  const[gender,setGender]=useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Reset = () => {
    setSname("");
    setRoll("");
    setDate("");
    setDepartment("");
    setNumber("");
    setGender("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({
      sname, roll, date, department, number,gender
    }));
    navigate('/RegistrationDetails');
  
    Reset();
  }

  return (
    <div className='container justify-content-center text-center d-grid pt-4'>
      <form className='border rounded  p-5 bg-secondary' onSubmit={handleSubmit}>
        <h3>Student Registration</h3>
        <div className='d-grid text-start'>
          <label>Name</label>
          <input
            className='mt-1 p-2 rounded border-primary '
            type='text'
            value={sname}
            onChange={(e) => setSname(e.target.value)}
            placeholder='Enter your name'
          />
        </div>
        <div className='d-grid mt-2 text-start '>
          <label>Roll Number</label>
          <input
            className='mt-1 p-2  rounded border-primary'
            type='number'
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            placeholder='Enter your Roll Number'
          />
        </div>
        {/* <div  className='d-grid mt-2 text-start'>
          <label>Gender</label>
          <input
          className='mt-1 p-2  rounded border-primary'
          type='text'
          value={gender}
          onChange={(e)=>setGender(e.target.value)}
          placeholder='Select any one'/>
        </div> */}
        <div className='d-grid mt-2 text-start'>
          <label>Date of Birth</label>
          <input
            className='mt-1 p-2 rounded border-primary'
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder='Enter your Date of Birth'
          />
        </div>
        <div className='d-grid mt-2 text-start'>
          <label>Department</label>
          <input
            className='mt-1 p-2  rounded border-primary'
            type='text'
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder='Enter your Department'
          />
        </div>
        <div className='d-grid text-start mt-2'>
          <label>Mobile Number</label>
          <input
            className='mt-1 p-2  rounded border-primary'
            type='number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder='Enter your number'
          />
        </div>
        <div className='mt-4'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={Reset}
          >
            Reset
          </button>
          <button
            type='submit'
            className='btn btn-danger ms-3'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
