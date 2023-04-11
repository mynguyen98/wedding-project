import { customFetch } from '@/utils/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
  isLoading: false,
}

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/signup', user)
      console.log(response)
      // thunkAPI.dispatch(addToast(BasicToast('#2eb85c', 'Register success')))
    } catch (error) {
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
      state.isLoading = true
    },
    [signupUser.fulfilled]: (state) => {
      state.isLoading = false
    },
  },
})
export const { handleChangeInput, clearFields } = authSlice.actions
export default authSlice.reducer
