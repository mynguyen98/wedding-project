import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { customFetch } from '@/utils/axios'
const initialState = {
  isLoading: false,
}
export const getLetterPage = createAsyncThunk(
  'letterPage/getLetterPage',
  async (id, thunkAPI) => {
    try {
      const resp = await customFetch(`/list-invitation?userId=${id}`)
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  }
)
const letterSlice = createSlice({
  name: 'letterPage',
  initialState,
  extraReducers: {
    [getLetterPage.pending]: (state, action) => {
      state.isLoading = true
    },
    [getLetterPage.fulfilled]: (state, action) => {
      state.isLoading = false
    },
    [getLetterPage.rejected]: (state, action) => {
      state.isLoading = false
    },
  },
})
export default letterSlice.reducer
