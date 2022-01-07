import { useDispatch } from 'react-redux'
import { userOperations } from '../../store/user'
import { loginUser } from '../API/loginAPI'
import { snackActions } from './useSnackBarUtils'

const useAuth = () => {
  const dispatch = useDispatch()

  const login = async (values) => {
    const formData = { ...values }
    const res = await loginUser(formData)

    if (res.status === 200) {
      // save token to store (and localStorage)
      dispatch(userOperations.setToken({ token: res.data.token }))

      snackActions.success('You successfully logged in')
      return true
    }
    snackActions.warning('Wrong login or password')
    return false
  }

  return { login }
}

export default useAuth