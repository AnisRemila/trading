import React from 'react';
import Layout from './components/Layout/Layout';
import LandingPage from './screens/LandingPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
