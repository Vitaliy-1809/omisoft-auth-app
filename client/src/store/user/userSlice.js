import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('userToken') || null,
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken (state, action) {
      const { token } = action.payload
      state.token = token
      if (token) {
        localStorage.setItem('userToken', token)
      }
    },
    logOut (state) {
      localStorage.removeItem('userToken')
      state.token = null
      return state
    },
  }
})

export const { actions } = userSlice

export default userSlice.reducer