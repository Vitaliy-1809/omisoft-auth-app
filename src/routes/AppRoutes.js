import React from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '../store/user'
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/Main/Main'
import Error404 from '../pages/Error404/Error404'
import Login from '../pages/Login/Login'

const AppRoutes = () => {
  const token = useSelector(userSelectors.getToken())

  return (
    <Routes>
      {token && <Route path='/login' element={<Navigate replace to='/' />} />}
      {!token && <Route path='/' element={<Navigate replace to='/login' />} />}
      <Route exact path='/' element={<Main />} />
      <Route exact path='/login' element={<Login />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

export default AppRoutes;
