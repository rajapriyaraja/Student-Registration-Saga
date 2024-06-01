import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUser, updateUser } from './Action';
// import Loader from '../Loader';
import { Link } from 'react-router-dom';

export default function FormEdit() {
  const [loading, setLoading] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [roll, setRoll] = useState("");
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [national, setNational] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const todoUpdate = useSelector((state) => state.users.find(user => user.id === id));

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (todoUpdate) {
      setFname(todoUpdate.fname || '');
      setLname(todoUpdate.lname || '');
      setRoll(todoUpdate.roll || '');
      setDepartment(todoUpdate.department || '');
      setNational(todoUpdate.national || '');
      setGender(todoUpdate.gender || '');
      setNumber(todoUpdate.number || '');
      setDate(todoUpdate.date || '');
    
    }
  }, [todoUpdate]);

  const validateInputs = () => {
    const errors = {};

    if (!fname.trim()) {
      errors.fname = 'Please enter a name!';
    } else if (!/^[A-Za-z\s]+$/.test(fname)) {
      errors.fname = 'Name must contain only letters!';
    }
    if (!lname.trim()) {
      errors.lname = 'Please enter a name!';
    } else if (!/^[A-Za-z\s]+$/.test(lname)) {
      errors.lname = 'Name must contain only letters!';
    }

    if (!roll.trim()) {
        errors.roll = 'Please enter a roll !';
      } else if (!/^\d{10}$/.test(roll)) {
        errors.roll = 'Invalid  number format!';
      }

      if (!date.trim()) errors.date = 'Please enter a date!';

    if (!department.trim()) errors.department = 'Please enter a department';
    
    if (!number.trim()) {
      errors.number = 'Please enter a number number!';
    } else if (!/^\d{10}$/.test(number)) {
      errors.number = 'Invalid mobile number format!';
    }
  
    if (!gender.trim()) errors.gender = 'Please select a gender!';
    if (!national.trim()) errors.national = 'Please select a nationality!';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      setLoading(true);
      try {
        if (todoUpdate) {
          await dispatch((todoUpdate.id, {
            fname, lname, roll, date, department, number, gender, national
        }));
        }
        navigate('/EmployeeDetails');
      } catch (error) {
        console.error('Error updating todo:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
          <h2 className='_qwet'>Register Form</h2>
          <div className='form-group-cx'>
       
          
        <div className='row mb-3'>
          <div className='col-md-6 text-start'>
            <label >First Name*</label>
            <input
              className='mt-1 p-2 rounded border-primary w-100'
              type='text'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder='Enter your first name'
            />
          </div>
              {errors.fname && <p className="">{errors.fname}</p>}
            </div>
            <div className='col-md-6 text-start'>
            <label>Last Name*</label>
            <input
              className='mt-1 p-2 rounded border-primary w-100'
              type='text'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder='Enter your last name'
            />
          </div>
              {errors.lname && <p className="error">{errors.lname}</p>}
            </div>
         
          <div className='row mb-3'>
          <div className='col-md-6 text-start'>
            <label>Roll Number</label>
            <input
              className='mt-1 p-2 rounded border-primary w-100'
              type='number'
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              placeholder='Enter your Roll Number'
            />
          </div>
              {errors.roll && <p className="">{errors.roll}</p>}
            </div>
            <div>
            <div className='col-md-6 text-start'>
            <label>Date of Birth</label>
            <input
              className='mt-1 p-2 rounded border-primary w-100'
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder='Enter your Date of Birth'
            />
          </div>
        
              {errors.date && <p className="">{errors.date}</p>}
            </div>
          <div className='form-grouptw'>
            <div className='error'>
              <input
                className=''
                type="tel"
                placeholder="Mobile number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              {errors.mobile && <p className="error">{errors.mobile}</p>}
            </div>
        
          </div>
          <div className='row mb-3'>
          <div className='col-md-6 text-start'>
            <label>Gender</label>
            <div className='mt-1'>
              <input
                type='radio'
                className='form-check-input me-2'
                id='radio1'
                name='gender'
                value='Male'
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
              />
              {errors.gender && <p className="error">{errors.gender}</p>}
            </div>
          </div>

          <div className='col-md-6 text-start'>
            <label>Department</label>
            <input
              className='mt-1 p-2 rounded border-primary w-100'
              type='text'
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder='Enter your Department'
            />
          </div>
          {errors.department && <p className="">{errors.department}</p>}
        </div>
        <div className='row mb-3'>
          <div className='col-md-6 text-start'>
            <label>Mobile Number</label>
            <input
              className='mt-1 p-2 rounded border-primary w-100'
              type='number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder='Enter your number'
            />
          </div>
              {errors.number && <p className="error">{errors.number}</p>}
            </div>
      
          <div>
            <div className='col-md-6 '>
            <label>Nationality</label>
            <select
              className='mt-1 p-2 rounded border-primary w-100'
              value={national}
              onChange={(e) => setNational(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Indian">Indian</option>
              <option value="Others">Others</option>
            </select>
          </div>
        
              {errors.national && <p className="">{errors.national}</p>}
            </div>
       
          <div className='we-er'>
             <button
            type='submit'
            className='btn btn-danger ms-3'
          >
            Submit
          </button>
          </div>
          </form>
        </>
  )
};





      