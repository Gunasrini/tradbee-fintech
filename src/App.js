import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SetPassword from './components/SetPassword';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import OnBoarding from './components/Onboarding/Onboarding';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<SetPassword />} />
      <Route path='/dashboard/*' element={<Dashboard />}>
        <Route path='onboarding' element={<OnBoarding />} />
      </Route>
    </Routes>
  );
}

export default App;
