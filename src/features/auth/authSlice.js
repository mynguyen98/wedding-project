import { customFetch } from '@/utils/axios'
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
  isLoading: false,
}

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    try {
      console.log('post')
      console.log(user)
      const response = await axios.post(
        'http://172.173.169.122:3000/api/signup',
        user
      )
      console.log(response)
      // thunkAPI.dispatch(addToast(BasicToast('#2eb85c', 'Register success')))
    } catch (error) {
      console.log(error)
      const msg = error.response.data.message
      // thunkAPI.dispatch(addToast(BasicToast('#e55353', msg)))
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signupUser.pending]: (state) => {
      console.log('loading')
      state.isLoading = true
    },
    [signupUser.fulfilled]: (state) => {
      console.log('login success')

      state.isLoading = false
    },
  },
})
export const { handleChangeInput, clearFields } = authSlice.actions
export default authSlice.reducer
