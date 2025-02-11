import React, { useState } from 'react';
import './App.css'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {

  const [token, setToken] = useState(null);
  
  return (
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            {!token ? (<Route path='/*' element={<Login setToken={setToken} />} /> ): (
              <>
                <Route path="/" element={<Login />} />
                <Route path='/HomePage' element={<HomePage />} />
                <Route path='/Dashboard' element={<Dashboard />} />
              </>
          )}
          </Routes>
        </main>
      </BrowserRouter>
  )
}

export default App
