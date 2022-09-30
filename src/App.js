import React from 'react'
import './styles/App.css'
import SmallField from './component/SmallField'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from './component/pages/LogIn/LogIn';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LogIn />} />
      </Routes>
      <div className="container">
        <SmallField />
      </div>
    </Router>
  );
}

export default App;
