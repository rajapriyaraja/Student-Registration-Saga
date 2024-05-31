import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RegistrationForm } from './Components/RegistrationForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {RegistrationDetails} from './Components/RegistrationDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<RegistrationForm/>}></Route>
      <Route path='/RegistrationDetails'element={<RegistrationDetails/>}></Route>
      {/* <Route path='/'element={<RegistrationForm/>}></Route> */}
      </Routes></BrowserRouter>
    // <RegistrationForm />
  );
}

export default App;
