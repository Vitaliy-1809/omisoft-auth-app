import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('userToken') || null,
  data: null,
  error: null,
  isLoading: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  }
})

export const { actions } = userSlice

export default userSlice.reducer