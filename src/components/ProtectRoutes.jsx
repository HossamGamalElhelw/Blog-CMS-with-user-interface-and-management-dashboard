import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TokenContext } from './TokenContext';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import Login from './Login';

function ProtectedRoutes() {
    const { token } = useContext(TokenContext);     

    return (
        <Routes>
            <Route path="/HomePage" element={<HomePage />} />
        {token ? (
            <>
                <Route path="/Dashboard" element={<Dashboard />} />
            </>
        ) : (
            <>
                <Route path="*" element={<Login />} />
                <Route path="/Login" element={<Login />} />
            </>
        )}
        </Routes>
    );
}

export default ProtectedRoutes;
