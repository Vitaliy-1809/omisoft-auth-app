import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userSelectors } from '../store/user'
import BackdropLoader from '../components/BackdropLoader/BackdropLoader'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children }) => {
  const token = useSelector(userSelectors.getToken())
  const isLoading = useSelector(userSelectors.getIsLoading())

  if (isLoading) {
    return <BackdropLoader open={isLoading} />
  }

  if (!token) {
    return <Navigate to='/login' />
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.object
}

export default ProtectedRoute