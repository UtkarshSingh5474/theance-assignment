import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import HomeScreen from './pages/HomeScreen/HomeScreen' 
import RegistrationScreen from './pages/RegistrationSceen/RegistrationScreen' 
import FormSuccessScreen from './pages/FormSuccessScreen/FormSuccessScreen' 

const App = () => {
  return (
    <div>
      <Routes>
        {}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/registration" element={<RegistrationScreen />} />
        <Route path="/form-success" element={<FormSuccessScreen />} />
      </Routes>
    </div>
  );
}

export default App;