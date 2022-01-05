import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { userSelectors } from '../store/user';
import BackdropLoader from '../components/BackdropLoader/BackdropLoader'
import PropTypes from 'prop-types';

const ProtectedRoute = ({ isLoggedIn, children, ...rest }) => {
  const isLoading = useSelector(userSelectors.getIsLoading())

  if (isLoading) {
    return <BackdropLoader open={isLoading}/>
  }

  return (
    <Route {...rest}>
      {isLoggedIn ? children : <Navigate to='/login' />}
    </Route>
  );
}

ProtectedRoute.propTypes = {
	isLoggedIn: PropTypes.bool,
	children: PropTypes.object
}

export default ProtectedRoute;