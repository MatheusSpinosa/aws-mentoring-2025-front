/* eslint-disable react-hooks/exhaustive-deps */
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/auth/Dashboard';
import { Home } from '../pages/public/Home';

export function AuthRoutes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </RouterRoutes>
  );
}