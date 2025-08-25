import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SEHome } from '../pages/Main/SEHome';


export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SEHome/>} />
      <Route path="/base" element={<SEHome/>} />
    </Routes>
  );
};
