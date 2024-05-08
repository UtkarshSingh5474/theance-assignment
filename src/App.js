import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from React Router
import HomeScreen from './pages/HomeScreen/HomeScreen' // Import the HomeScreen component
import RegistrationScreen from './pages/RegistrationSceen/RegistrationScreen' // Import the RegistrationScreen component
import FormSuccessScreen from './pages/FormSuccessScreen/FormSuccessScreen' // Import the FormSuccessScreen component

const App = () => {
  return (
    <div>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/registration" element={<RegistrationScreen />} />
        <Route path="/form-success" element={<FormSuccessScreen />} />
      </Routes>
    </div>
  );
}

export default App;
