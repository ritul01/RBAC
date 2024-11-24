// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Users from './pages/Users';
import Roles from './pages/Roles';
// import Permissions from './pages/Permissions';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        {/* <Route path="/permissions" element={<Permissions />} /> */}
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;