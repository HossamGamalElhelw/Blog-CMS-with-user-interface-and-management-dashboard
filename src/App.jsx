import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TokenProvider } from './components/TokenContext';
import Navbar from './components/Navbar';
import ProtectedRoutes from './components/ProtectRoutes';

function App() {
  return (
    <TokenProvider>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <ProtectedRoutes />
      </BrowserRouter>
    </TokenProvider>
  );
}

export default App;
