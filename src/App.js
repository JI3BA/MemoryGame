import React from 'react'
import './styles/App.css'
import SmallField from './component/SmallField'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LogIn from './component/pages/LogIn/LogIn';
import Results from './component/pages/Results/Results';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/field' element={<SmallField />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
