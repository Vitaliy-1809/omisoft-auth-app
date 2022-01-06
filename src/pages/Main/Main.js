import React from 'react';
import { useDispatch } from 'react-redux';
import { userOperations } from '../../store/user';
import { snackActions } from '../../utils/customHooks/useSnackBarUtils';
import './Main.scss';

const Main = () => {
  const dispatch = useDispatch()

  const logOutUser = () => {
    dispatch(userOperations.logOut())
    snackActions.success('You successfully logged Out')
  }

  return (
    <div className='main-page'>
      <button
        onClick={logOutUser}
      >
        Log Out
      </button>
    </div>
  );
}

export default Main;
