import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <LandingPage />
    </HashRouter>
  );
}

export default App;
