import React from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '../store/user'
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/Main/Main'
import Error404 from '../pages/Error404/Error404'
import Login from '../pages/Login/Login'
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  const token = useSelector(userSelectors.getToken())

  return (
    <Routes>
      {token && <Route path='/login' element={
        <Navigate replace to='/' />
      } />}
      <Route exact path='/' element={
        <ProtectedRoute>
          <Main />
        </ProtectedRoute>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

export default AppRoutes;