
import {useState} from "react";
import { useDispatch } from "react-redux";
import { createUser } from "./Action";
import {  useNavigate } from "react-router-dom";
import React from 'react'

export const RegistrationForm = () => {
    const [sname,setSname]=useState("");
    const [roll,setRoll]=useState("");
    const [date,setDate]=useState("");
    const [department,setDepartment]=useState("");
    const [number,setNumber]=useState("");

    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    dispatch(createUser({
        sname,roll,date,department,number
      }))

    const Reset=()=>{
        setSname("");
        setRoll("");
        setDate("");
        setDepartment("");
        setNumber("");
    }

    const  handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <>
     <div className='container justify-content-center text-center d-grid  pt-5 '>
                 <form className='border p-5' onSubmit={handleSubmit}>
                     <h3>Student Registration</h3>
                     <div className='d-grid  text-start'>
                         <label>Name</label>
                         <input
                            className='mt-1 p-1'
                            type='text'
                            value={sname}
                            onChange={(e)=>setSname(e.target.value)}
                            placeholder='Enter your name' />
                    </div>
                    <div className='d-grid  mt-2 text-start '>
                        <label>Roll Number</label>
                        <input
                            className='mt-1 p-1'
                            type='number'
                            value={roll}
                            onChange={(e)=>setRoll(e.target.value)}
                            placeholder='Enter your Roll Number' />
                    </div>
                    <div className='d-grid  mt-2 text-start'>
                        <label>Date of Birth</label>
                        <input
                            className='mt-1 p-1'
                            type='date'
                            value={date}
                            onChange={(e)=>setDate(e.target.value)}
                            placeholder='Enter your Date of Birth' />
                    </div>
                    <div className='d-grid  mt-2 text-start'>
                        <label>Department</label>
                        <input
                            className='mt-1 p-1'
                            type='text'
                            value={department}
                            onChange={(e)=>setDepartment(e.target.value)}
                            placeholder='Enter your Department' />
                    </div>
                    <div className='d-grid text-start mt-2'>
                        <label>Mobile Number</label>
                        <input
                            className='mt-1 p-1'
                            type='number'
                            value={number}
                            onChange={(e)=>setNumber(e.target.value)}
                            placeholder='Enter your number' />
                    </div>
                    <div className='mt-4'>
                        <button 
                        type='button'
                        className='btn btn-primary'
                        onClick={Reset}>Reset</button>
                        <button 
                        type='submit'
                        className='btn btn-danger ms-3'>Submit</button>
                    </div>
                </form>
            </div>
    </>
  )
}
