import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUser, updateUser } from './Action';

export default function EditForm() {
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
    if (id) {
      dispatch(fetchUser(id));
    }
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

    if (!fname.trim()) errors.fname = 'Please enter a first name!';
    if (!lname.trim()) errors.lname = 'Please enter a last name!';
    if (!roll.trim()) errors.roll = 'Please enter a roll number!';
    if (!date.trim()) errors.date = 'Please enter a date of birth!';
    if (!department.trim()) errors.department = 'Please enter a department!';
    if (!number.trim()) errors.number = 'Please enter a mobile number!';
    else if (!/^\d{10}$/.test(number)) errors.number = 'Invalid mobile number format!';
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
          await dispatch(updateUser(todoUpdate.id, { fname, lname, roll, date, department, number, gender, national }));
        }
        navigate('/RegistrationDetails');
      } catch (error) {
        console.error('Error updating user:', error);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className='container justify-content-center text-center d-grid mt-5'>
      <form className='border rounded p-4' onSubmit={handleSubmit}>
        <h3 className='mb-3'>Student Registration</h3>

        <div className='row mb-3'>
          <div className='col-md-6 text-start'>
            <label>First Name*</label>
            <input
              className='mt-1 p-2 rounded form-control w-100'
              type='text'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder='Enter your first name'
            />
            {errors.fname && <p className="text-danger">{errors.fname}</p>}
          </div>
          <div className='col-md-6 text-start'>
            <label>Last Name*</label>
            <input
              className='mt-1 p-2 rounded form-control w-100'
              type='text'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder='Enter your last name'
            />
            {errors.lname && <p className="text-danger">{errors.lname}</p>}
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-md-6 text-start'>
            <label>Roll Number</label>
            <input
              className='mt-1 p-2 rounded form-control w-100'
              type='number'
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              placeholder='Enter your Roll Number'
            />
            {errors.roll && <p className="text-danger">{errors.roll}</p>}
          </div>
          <div className='col-md-6 text-start'>
            <label>Date of Birth</label>
            <input
              className='mt-1 p-2 rounded form-control w-100'
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder='Enter your Date of Birth'
            />
            {errors.date && <p className="text-danger">{errors.date}</p>}
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
              <label className='form-check-label me-3' htmlFor='radio1'>Male</label>
              <input
                type='radio'
                className='form-check-input me-2'
                id='radio2'
                name='gender'
                value='Female'
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className='form-check-label' htmlFor='radio2'>Female</label>
            </div>
            {errors.gender && <p className="text-danger">{errors.gender}</p>}
          </div>
          <div className='col-md-6 text-start'>
            <label>Department</label>
            <input
              className='mt-1 p-2 rounded form-control w-100'
              type='text'
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder='Enter your Department'
            />
            {errors.department && <p className="text-danger">{errors.department}</p>}
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-md-6 text-start'>
            <label>Mobile Number</label>
            <input
              className='mt-1 p-2 rounded form-control w-100'
              type='number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder='Enter your number'
            />
            {errors.number && <p className="text-danger">{errors.number}</p>}
          </div>
          <div className='col-md-6 text-start'>
            <label>Nationality</label>
            <select
              className='mt-1 p-2 rounded form-control w-100'
              value={national}
              onChange={(e) => setNational(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Indian">Indian</option>
              <option value="Others">Others</option>
            </select>
            {errors.national && <p className="text-danger">{errors.national}</p>}
          </div>
        </div>
        <div className='mt-4'>
          <button
            type='submit'
            className='btn btn-danger ms-3'
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>

        </div>
      </form>
    </div>
  );
}