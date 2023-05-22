import { configureStore } from '@reduxjs/toolkit'
import musicVid from './features/letter-page/music-vid-reducer'
import authSlice from './features/auth/authSlice'
import letterSlice from './features/letter-page/letterPage'
export const store = configureStore({
  reducer: {
    musicVid: musicVid,
    auth: authSlice,
    letterPage: letterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
