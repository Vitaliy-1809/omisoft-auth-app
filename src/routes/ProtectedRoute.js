import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { userSelectors } from '../store/user';
import BackdropLoader from '../components/BackdropLoader/BackdropLoader'
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, ...rest }) => {
  const token = useSelector(userSelectors.getToken())
  const isLoading = useSelector(userSelectors.getIsLoading())

  if (isLoading) {
    return <BackdropLoader open={isLoading} />
  }

  return (
    <Route {...rest}>
      {token ? children : <Navigate to='/login' />}
    </Route>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.object
}

export default ProtectedRoute;