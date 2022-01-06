/* eslint-disable no-unused-vars */
import { useCallback } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { userOperations, userSelectors } from '../../store/user'
import { loginUser } from '../API/loginAPI'
import { snackActions } from './useSnackBarUtils'

const useAuth = () => {
	const dispatch = useDispatch()
	const token = useSelector(userSelectors.getToken())

	// const checkToken = useCallback(() => {
	// 	if (token) {
	// 		axios.defaults.headers.Authorization = token
	// 		dispatch(userOperations.fetchUser())
	// 	} else {
	// 		axios.defaults.headers.Authorization = null
	// 	}
	// 	return token
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [token])

	const login = async (values) => {
		let formData = { ...values }
		const res = await loginUser(formData)

		if (res.status === 200) {
			//save token to store (and localStorage)
			dispatch(userOperations.setToken({ token: res.data.token }))

			// snackActions.success('You successfully Logged In')
			alert('You successfully Logged In')
			return true
		}
		// snackActions.warning('Wrong login or password')
		alert('Wrong login or password')
		return false
	}

	// return { checkToken, login }
	return { login }
}

export default useAuth