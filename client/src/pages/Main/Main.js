import React from 'react'
import { useDispatch } from 'react-redux'
import { ColorButton } from '../../components/Button/Button'
import { userOperations } from '../../store/user'
import { snackActions } from '../../utils/customHooks/useSnackBarUtils'
import './Main.scss'

const Main = () => {
  const dispatch = useDispatch()

  const logOutUser = () => {
    dispatch(userOperations.logOut())
    snackActions.success('You successfully logged out')
  }

  return (
    <div className='main-page'>
      <ColorButton
        variant="contained"
        onClick={logOutUser}
      >
        Logout
      </ColorButton>
    </div>
  )
}

export default Main